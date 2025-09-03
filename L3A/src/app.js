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
    savingsResult.textContent = `Fel: ${err.message}`
    savingsResult.classList.add('error')
  }
})

// --- Budget ---
const budgetResult = document.getElementById('budget-result')
document.getElementById('create-budget-btn').addEventListener('click', () => {
  const userName = document.getElementById('budget-user').value
  const income = parseFloat(document.getElementById('monthly-income').value)
  let expenses
  try {
    expenses = JSON.parse(document.getElementById('expenses').value)
  } catch {
    budgetResult.textContent = 'Fel: ogiltig JSON för utgifter'
    budgetResult.classList.add('error')
    return
  }

  try {
    const budget = createBudget(userName, income, expenses)
    budgetResult.textContent = `Balans: ${budget.balance}, Totala utgifter: ${budget.totalMonthlyExpenses}`
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
  const rate = parseFloat(document.getElementById('loan-interest').value) / 100
  const years = parseInt(document.getElementById('loan-years').value)

  try {
    const choice = rentOrBuy(housePrice, rent, rate, years)
    rentBuyResult.textContent = choice
    rentBuyResult.classList.remove('error')
  } catch (err) {
    rentBuyResult.textContent = `Fel: ${err.message}`
    rentBuyResult.classList.add('error')
  }
})

// --- NPV / Investment Ranking ---
const npvResult = document.getElementById('npv-result')
document.getElementById('calculate-npv-btn').addEventListener('click', () => {
  let investments
  try {
    investments = JSON.parse(document.getElementById('npv-input').value)
  } catch {
    npvResult.textContent = 'Fel: ogiltig JSON för investeringar'
    npvResult.classList.add('error')
    return
  }

  try {
    const ranked = rankInvestmentsOnNetPresentValue(investments)
    npvResult.textContent = 'Rankning: ' + ranked.map(i => `${i.name} (${i.npv})`).join(', ')
    npvResult.classList.remove('error')
  } catch (err) {
    npvResult.textContent = `Fel: ${err.message}`
    npvResult.classList.add('error')
  }
})

