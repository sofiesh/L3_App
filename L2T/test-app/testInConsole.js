import * as finCalc from '../../L2M/finCalc_src/finCalc.js'

/**
 * This file test functions in the console.
 * It imports the Average class from the finCalc.js file and uses it to calculate the average of a list of numbers.
 */



// TEST Average
const averageTest = new finCalc.Average()
averageTest.add(1)
averageTest.add(2)
averageTest.add(3)

averageTest.calculate() // Expected output: 2

if (averageTest.calculate() === 2) {
    console.log('Test passed')
} else {
    console.log('Test failed')
}

// TEST createBudget
// const userName = 'John Doe'
// const monthlyIncome = 30000
// const monthlyExpenses = [
//     { category: 'Rent', amount: 10000 },
//     { category: 'Food', amount: 4000 },
//     { category: 'Transport', amount: 1000 }
// ]

// try {
//     const budget = finCalc.createBudget(userName, monthlyIncome, monthlyExpenses)
//     console.log('Budget created: ', budget)
// } catch (error) {
//     console.log('Create Budget - Error', error.message)
// }

// TEST calculateSavings
// try { const savings = finCalc.calculateSavingsPerMonth('John Doe', 100000, 50000, 12)
//     console.log('savings: ', savings)
// } catch (error) {
//     console.log('Savings - Error: ', error.message)
// }

// TEST NPV -- Expected utput: 529.75
// const calculateNPV = finCalc.calculateNetPresentValue([100, 200, 300], 0.1)

// if (parseFloat(calculateNPV) === 529.75) {
//     console.log('Test passed')
// } else {
//     console.log('Test failed')
// }

// // Try 1: Normal case - Ranking investments based on NPV
// const investments = [
//     { name: 'Investment A', cashFlows: [100, 200, 300], rate: 0.1 },
//     { name: 'Investment B', cashFlows: [150, 250, 350], rate: 0.08 },
//     { name: 'Investment C', cashFlows: [200, 300, 400], rate: 0.12 }
// ]

// const rankedInvestments = finCalc.rankInvestmentsOnNetPresentValue(investments)
// console.log('Ranked investments: ', rankedInvestments)


// // // Uncomment to test errorhandling
// // // Try 2: Ranking investments based on NPV where one investment has no cash flows
// // const investments2 = [
// //     { name: 'Investment A', cashFlows: [], rate: 0.1 },
// //     { name: 'Investment B', cashFlows: [150, 250, 350], rate: 0.08 },
// //     { name: 'Investment C', cashFlows: [200, 300, 400], rate: 0.12 }
// // ]

// // const rankedInvestments2 = rankInvestmentsOnNetPresentValue(investments2)
// // console.log('Ranked investments: ', rankedInvestments2)


// // TEST rentOrBuy
// // Expected output:
// // {
// //     monthlyBuyCost: 20,
// //     monthlyRentCost: 20,
// //     totalCostToBuy: 100,
// //     totalCostToRent: 100,
// //     monthsToBreakEven: 5
// //   }
// // Try 1: Normal case
// const rentOrBuy = finCalc.rentOrBuy(100, 20, 5)
// console.log(rentOrBuy)

// // Try 2: Error handling
// const rentOrBuy = finCalc.rentOrBuy(100, 20, -5)
// console.log(rentOrBuy)
