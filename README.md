# L3_APP
This repository contains the L3 financial calculator project. It consists of a module, a test library and a webb application. It is created as part of the course 1DV610 Introduction to Software Quality at Linneaus University.

## Project Overview

**L3_App** is a web-based financial calculator that allows users to:

- Calculate monthly savings required to reach a certain goal.
- Create a simple budget.
- Perform calculations to decide wheather to rent or buy a certain product or service.
- Compare investments against each other based on Net Present Value.

## L2M
A module with methods for financial calculations that is used in L3A.

## L2T
A test library for manual tests of the module.

## L3A
The web application which contains a user interface for financial calculations implemented by the module.

## Docs
See the `docs/` folder for documentation targeted to:
* End Users - how to use the application
* App Developers - How the front end is structured.
* Module Users - How to use the shared modules.
* Module Developers - How the modules are implemented.
* Examiner - Overview and evaluation notes.


## Repository Structure
L3_App/<br>
├─ docs/
│ ├─ USERS.md
│ ├─ DEVELOPERS.md
│ ├─ MODULE-USERS.md
│ ├─ MODULE-DEVS.md
│ └─ EXAMINER.md
├─ L2M/
│ └─ finCalc_src/
│ ├─ createBudget.js
│ ├─ calculateSavings.js
│ └─ netPresentValue.js
├─ L2T/ 
│ └─ finCalc_src/
│ ├─ createBudget.js
│ ├─ calculateSavings.js
│ └─ netPresentValue.js
├─ L3A/
│ ├─ src/
│ │ ├─ index.html
│ │ ├─ style.css
│ │ └─ app.js
├─ node_modules/
├─ package-lock.json
├─ package.json
└─ README.md

