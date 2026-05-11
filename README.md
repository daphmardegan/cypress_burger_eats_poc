# Burger Eats Cypress POC

A proof-of-concept end-to-end testing suite for the Burger Eats delivery application using Cypress.

## 📋 Overview

This project contains automated end-to-end tests for the Burger Eats application, a food delivery platform. The tests focus on critical user workflows including home page validation and delivery partner signup processes.

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (version 14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (to clone the repository)

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd cypress_burger_eats_poc
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   This will install:
   - Cypress - E2E testing framework
   - Faker - Random data generation
   - CPF Generator/Validator - Brazilian CPF validation
   - Cypress File Upload - Plugin for file upload tests

## 🚀 Running Tests

### Open Cypress Test Runner (Interactive Mode)

```bash
npm test
```

This opens the Cypress Test Runner where you can:

- View all available tests
- Run individual tests or all tests
- Watch tests execute in real-time
- Debug failing tests

### Run Tests in Headless Mode

```bash
npx cypress run
```

### Run Specific Test File

```bash
npx cypress run --spec "cypress/e2e/home.spec.cy.js"
```

### Run Tests with Specific Browser

```bash
npx cypress run --browser chrome
npx cypress run --browser firefox
```

## 📂 Project Structure

```
cypress_burger_eats_poc/
├── cypress/
│   ├── e2e/                          # End-to-end test files
│   │   ├── home.spec.cy.js          # Home page tests
│   │   └── signup.spec.cy.js        # Signup workflow tests
│   ├── factories/
│   │   └── SignupFactory.js         # Test data factory for signup
│   ├── pages/
│   │   └── SignupPage.js            # Page Object Model for signup page
│   ├── fixtures/
│   │   ├── deliver.json             # Test data fixtures
│   │   ├── example.json             # Sample fixtures
│   │   └── images/                  # Image fixtures for tests
│   └── support/
│       ├── commands.js              # Custom Cypress commands
│       └── e2e.js                   # E2E support configuration
├── cypress.config.js                # Cypress configuration
├── package.json                     # Project dependencies
└── README.md                        # This file
```

## 🏗️ Architecture & Patterns

### Page Object Model (POM)

Tests use the Page Object Model pattern to maintain clean separation between test logic and page interactions:

- **SignupPage.js**: Encapsulates all signup page interactions and validations

### Factory Pattern

Test data is generated using factory functions:

- **SignupFactory.js**: Generates realistic test data using Faker and validates with Brazilian CPF

## ✅ Test Coverage

### Home Page (`home.spec.cy.js`)

- Validates application availability
- Verifies home page loads correctly

### Signup Workflow (`signup.spec.cy.js`)

- Tests delivery partner registration
- Validates form filling and submission
- Tests address lookup and validation

## 🔧 Configuration

Edit `cypress.config.js` to modify:

- **baseUrl**: `https://buger-eats-qa.vercel.app/` (QA environment)
- **viewport**: Default 1440x900 pixels
- **projectId**: For Cypress Dashboard integration

## 📚 Key Technologies & Dependencies

- **Cypress 15.14.2** - E2E testing framework
- **Faker 5.5.3** - Random test data generation
- **Gerador-Validador-CPF 5.0.2** - Brazilian CPF generation and validation
- **Cypress File Upload 5.0.8** - File upload testing support

## 💡 Test Data Generation

The project uses factories to generate realistic test data:

```javascript
// Example: Generating delivery partner data
import SignupFactory from "../factories/SignupFactory";

const deliverData = SignupFactory.deliver();
// Returns object with name, cpf, email, whatsapp, address, etc.
```

## 🐛 Debugging Tests

### View Test Details

- Use the Cypress Test Runner to step through tests
- Inspect elements in the Chrome DevTools integrated into Cypress

### Check Logs

- Cypress outputs detailed logs in the terminal
- View network requests and console errors in the Test Runner

### Time Travel

- Use the Cypress snapshots feature to rewind through test execution

## 📝 Writing New Tests

1. Create a new file in `cypress/e2e/` with `.spec.cy.js` extension
2. Import page objects as needed:
   ```javascript
   import SignupPage from "../pages/SignupPage";
   ```
3. Use factories for test data:
   ```javascript
   import SignupFactory from "../factories/SignupFactory";
   ```
4. Write your test cases using Cypress commands

## 🌐 Environment Configuration

Currently configured for:

- **QA Environment**: https://buger-eats-qa.vercel.app/

To change environments, update `baseUrl` in `cypress.config.js`.

## 📄 License

MIT - See LICENSE file for details

## 👤 Author

Daphine Mardegan

## 🤝 Contributing

When adding new tests:

1. Follow the existing file structure
2. Use the Page Object Model pattern
3. Generate test data using factories
4. Keep test logic clean and descriptive
5. Add comments for complex test scenarios
