# Zar Finance Frontend

This frontend is the customer and operations interface for the Zar Finance banking application. It is built with React, TypeScript, and Vite, and it connects to the Spring Boot backend through a shared Axios API client. The interface supports account registration, sign-in, password recovery, customer account management, transfers, transaction review, and operational dashboard access.

## Overview

The app uses a role-based front-end experience:

- CUSTOMER users can view their profile, accounts, transfer funds, and review transactions
- ADMIN or AUDITOR users can access the dashboard for system metrics and record lookup
- unauthenticated users can register, log in, and recover a password

## Frontend architecture

The app architecture is intentionally simple and clear:

- App shell: global layout, routing, and navigation
- Page components: each route handles a specific product workflow
- API service layer: central Axios client and helper methods
- Protected route guards: enforce customer/admin/auditor restrictions

## Route structure

The application routing setup is defined in App.tsx and includes these primary paths:

- / and /home: landing page
- /login: login page
- /register: sign-up page
- /forgot-password: password recovery request page
- /reset-password: password reset page
- /profile: authenticated customer profile
- /update-profile: password change flow
- /transactions: customer transaction history
- /transfer: transfer flow
- /auditor-dashboard: admin/auditor dashboard
- /deposit: admin deposit workflow
- *: not found route

## Main UI pages

### Login
The login experience is a standard email/password form. On success, the app stores the token and roles in local storage and redirects to the home page.

### Register
The registration page collects name, email, phone number, and password, then calls the backend registration endpoint.

### Forgot password and reset password
The app supports a password recovery flow:

1. user enters email
2. backend sends a reset code
3. user enters the code and new password on the reset screen

### Profile and settings
The profile page allows:

- viewing account information
- uploading a profile picture
- reviewing personal details
- changing the password

### Transfer flow
The transfer page supports:

- selecting a source account
- entering a destination account number
- verifying the destination account
- confirming the transfer amount and description
- validating sufficient funds before submission

### Transactions
The transactions page lets the user:

- choose an account
- fetch transaction history
- paginate results
- review transaction amounts and dates

### Auditor dashboard
The dashboard exposes key operational views:

- total users, accounts, and transactions
- user lookup by email
- account lookup by account number
- transaction lookup by ID
- transaction queries by account

### Deposit workflow
The deposit page is used by admin/auditor-level users to:

- search for an account
- verify account details
- submit a deposit
- review recent deposit history

## UI component map

### Navbar
The navbar reads local storage state and renders links depending on auth state and user roles.

### Footer
The footer contains branding and basic support contact information.

### Guards
The route guards ensure the user is authorized before reaching protected screens:

- CustomerRoute: allows the customer experience only
- AuditorRoute: allows admin or auditor access

## API integration

The frontend uses a centralized Axios instance in services/api.ts.

Relevant responsibilities:

- login, register, password reset, and password change
- profile fetch and profile image upload
- account retrieval
- transfer and deposit requests
- audit queries for users, accounts, and transactions

The client automatically attaches the JWT bearer token when one is stored in local storage.

## Local setup

### Prerequisites
- Node.js and npm
- a running backend API instance
- access to the same local API host/port expected by the frontend client

### Install

```bash
cd frontend
npm install
```

### Run the development server

```bash
cd frontend
npm run dev
```

The app normally runs locally on the Vite development URL, typically:

```text
http://localhost:5173
```

## Screenshot gallery

These screenshots capture the actual application experience in the current workspace and help validate the implementation quality.

### Login screen
![Login screen](./screenshots/Screenshot%20(151).png)

Caption: customer login page with the Zar Finance branding and account authentication form.

### Transfer screen
![Transfer screen](./screenshots/Screenshot%20(160).png)

Caption: transfer workflow with source account selection, destination verification, and transfer guidelines.

Additional screenshots in the same folder capture the register flow, profile page, transaction history, and auditor dashboard.

## Project structure

```text
frontend/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── App.css
│   ├── index.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── ForgotPassword.tsx
│   │   ├── ResetPassword.tsx
│   │   ├── Profile.tsx
│   │   ├── UpdateProfile.tsx
│   │   ├── Transactions.tsx
│   │   ├── Transfer.tsx
│   │   ├── Deposit.tsx
│   │   ├── AuditorDashboard.tsx
│   │   └── NotFound.tsx
│   └── services/
│       ├── api.ts
│       └── guard.tsx
├── screenshots/
└── README.md
```

## Build and quality checks

### Production build

```bash
cd frontend
npm run build
```

### Lint

```bash
cd frontend
npm run lint
```

## Honest implementation note

This frontend is a polished local-development demo, not a full production bank portal. It shows the expected customer and operations UX clearly, while keeping the actual deployment behavior aligned with a local dev environment and a Spring Boot backend.

## Summary

The frontend presents a complete user-facing experience for a financial application: onboarding, account access, profile management, transfers, transaction history, and operational visibility. It is a strong complement to the backend and demonstrates how a modern fintech product can be built as a connected full-stack application.
