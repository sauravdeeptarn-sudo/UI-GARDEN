# UI Garden Component Library

Created by: Sauravdeep Singh
Assignment 13 – Code Quality & CI/CD Implementation

---

## 📌 Overview

This project extends the UI Component Library by adding **code quality checks and CI/CD automation**.

The following tools were integrated:

* ESLint (code linting)
* Prettier (code formatting)
* Jest (testing)
* Husky (pre-commit hooks)
* GitHub Actions (CI pipeline)
* Docker (production deployment)

---

## 🚀 Running the Project (Local Development)

### Install dependencies

npm install

### Run Storybook

npm run storybook

### Run the React App

npm start

---

## ✅ Code Quality Checks

### Run ESLint

npm run lint

### Run Tests

npm test -- --watchAll=false

👉 If errors exist, the build will fail.

---

## 🔒 Pre-Commit Hooks (Husky)

Husky is configured to run before every commit:

* ESLint
* Prettier
* Tests

❗ If any check fails, the commit is blocked.

---

## 🔁 CI/CD with GitHub Actions

A GitHub Actions workflow is configured to:

* Run ESLint
* Run tests

👉 If checks fail, the build fails in GitHub.

---

## 🐳 Running the Production Build with Docker

### Build Docker Image

docker build -t singh_sauravdeep_coding_assignment13 .

### Run Container

docker run -p 8018:80 --name singh_sauravdeep_coding_assignment13 singh_sauravdeep_coding_assignment13

### Open in Browser

http://localhost:8018

---

## 📁 Project Structure

Each component includes:

* ComponentName.tsx
* ComponentName.styles.ts
* ComponentName.types.ts
* ComponentName.stories.tsx
* ComponentName.test.tsx
* index.ts

---

## 🛠 Technologies Used

React
TypeScript
Storybook
Styled-components
Jest + React Testing Library
ESLint
Prettier
Husky
GitHub Actions
Docker
Nginx
