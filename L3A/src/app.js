// The app imports the Module from L2M
import * as finCalc from "../../L2M/finCalc_src/finCalc.js"

// --- Toggle-sektioner ---
document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const form = btn.nextElementSibling;
        form.style.display = form.style.display === 'none' ? 'block' : 'none';
    })
})

// --- Savings ---
const savingsResult = document.getElementById('savings-result')
document.getElementById('calculate-savings-btn').addEventListener('click', () => {
    const userName = document.getElementById('savings-user').value
    const goal = parseFloat(document.getElementById('savings-goal').value)
    const current = parseFloat(document.getElementById('current-savings').value)
    const months = parseInt(document.getElementById('months-goal').value)

    try {
        const plan = finCalc.calculateSavingsPerMonth(userName, goal, current, months)
        savingsResult.textContent = `${userName} måste spara ${plan.savingsPerMonth} per månad.`
        savingsResult.classList.remove('error')
    } catch (err) {
        savingsResult.textContent = `Error: ${err.message}`
        savingsResult.classList.add('error')
    }
})

// --- Budget ---
const budgetResult = document.getElementById('budget-result')
document.getElementById('create-budget-btn').addEventListener('click', () => {
    const userName = document.getElementById('budget-user').value
    const income = parseFloat(document.getElementById('monthly-income').value)
    const monthlyExpensesInput = parseFloat(document.getElementById('monthly-expenses').value)

    if (isNaN(income) || isNaN(monthlyExpensesInput)) {
        budgetResult.textContent = 'Error: Income and expenses must be valid numbers.'
        budgetResult.classList.add('error')
        return
    }

    const expenses = [{ amount: monthlyExpensesInput }]

    try {
        const budget = finCalc.createBudget(userName, income, expenses)
        budgetResult.textContent = `Balans: ${budget.balance}`
        budgetResult.classList.remove('error')
    } catch (err) {
        budgetResult.textContent = `Fel: ${err.message}`
        budgetResult.classList.add('error')
    }
})

// --- Rent or Buy ---
const rentBuyResult = document.getElementById('rent-buy-result')
document.getElementById('calculate-rent-buy-btn').addEventListener('click', () => {
    const housePrice = parseFloat(document.getElementById('house-price').value)
    const rent = parseFloat(document.getElementById('monthly-rent').value)
    const months = parseInt(document.getElementById('rent-months').value)

    function formatRentBuyResults(num) {
        return num.toFixed(2)
    }

    try {
        const result = finCalc.rentOrBuy(housePrice, rent, months)
        rentBuyResult.innerHTML = `
        Det blir billigare att köpa efter ${Math.ceil(result.monthsToBreakEven)} månader.
        `
        rentBuyResult.classList.remove('error')
    } catch (err) {
        rentBuyResult.textContent = `Error: ${err.message}`
        rentBuyResult.classList.add('error')
    }
})

// --- NPV / Investment Ranking ---
const investmentList = document.getElementById('investment-list')
const npvResult = document.getElementById('npv-result')
// Function to add a new investment to be assessed.
function addInvestmentRow() {
    const container = document.createElement('div')
    container.classList.add('investment-row')

    container.innerHTML = `
    <input type="text" class="investment-name" placeholder="Namn t.ex. Project A">
    <input type="number" class="discount-rate" placeholder="Ränta (%)">
    <div class="cashflows-container">
        <input type="number" class="cashflow" placeholder="År 0 (t.ex. -1000)">
        <input type="number" class="cashflow" placeholder="År 1 (t.ex. 200)">
    </div>
    <button type="button" class="add-cashflow-btn">Lägg till cashflow</button>
    `

    // Button to add cashflows
    const cashflowBtn = container.querySelector('.add-cashflow-btn')
    cashflowBtn.addEventListener('click', () => {
        const cashflowsContainer = container.querySelector('.cashflows-container')
        const newInput = document.createElement('input')
        newInput.type = 'number'
        newInput.classList.add('cashflow')
        newInput.placeholder = `År ${cashflowsContainer.querySelectorAll('.cashflow').length}`
        cashflowsContainer.appendChild(newInput)
    })

    investmentList.appendChild(container)
}

// Button to add more investments
document.getElementById('add-investment-btn').addEventListener('click', addInvestmentRow)

// Adding the first investment row
addInvestmentRow()

// Calculate NPV
document.getElementById('calculate-npv-btn').addEventListener('click', () => {
    let investments = []

    document.querySelectorAll('.investment-row').forEach(row => {
        const name = row.querySelector('.investment-name').value
        const rate = parseFloat(row.querySelector('.discount-rate').value) / 100
        const cashFlows = [...row.querySelectorAll('.cashflow')]
            .map(input => {
                const val = parseFloat(input.value)
                return isNaN(val) ? input.value : val
            })

        if (name && !isNaN(rate) && cashFlows.length > 0) {
            investments.push({ name, rate, cashFlows })
        }

    })

    try {
        const ranked = finCalc.rankInvestmentsOnNetPresentValue(investments)
        npvResult.innerHTML = `
      <h4>Rankning av investeringar</h4>
      <ol>
        ${ranked.map(i => `<li>${i.name}: NPV = ${i.npv.toFixed(2)}</li>`).join('')}
      </ol>
    `
        npvResult.classList.remove('error')
    } catch (err) {
        npvResult.textContent = `Error: ${err.message}`
        npvResult.classList.add('error')
    }
})

