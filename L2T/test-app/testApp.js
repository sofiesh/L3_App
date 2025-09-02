/**
 * This file is the entry point for the test application.
 * It imports the Average class from the finCalc.js file and uses it to calculate the average of a list of numbers.
 * 
 * @author Sofie Swagemakers Herou
 */

import { Average } from './finCalc.js'

const averageTest = new Average()

document.getElementById(calculateAverageBtn).addEventListener('click', () => {
    const averagesInput = document.getElementById('averagesInput').value

    const averagesValues = averagesInput.split(',').map((value) => parseFloat(value.trim))

    averagesValues.numbers = []

    averagesValues.forEach((value) => {
        if (!isNaN(value)) {
            averageTest.add(value)
        }
    })

    // Calculate and display average on the page
    const calculatedAverage = averageTest.calculate()
    document.getElementById('averageOutput').textContent = isNan(calculatedAverage) ? 'Invalid input' : calculatedAverage
})

