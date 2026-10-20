# Zar Finance

Zar Finance is a full-stack fintech and banking prototype built with a Spring Boot backend and a React frontend. The project models a modern digital banking experience with user authentication, account management, money transfers, password recovery, transactional notifications, and an auditor/admin dashboard.

This repository is designed to showcase practical, end-to-end engineering work: secure backend APIs, role-based authorization, financial domain logic, transactional data modeling, and a polished customer-facing interface.

## Why this project matters

This application demonstrates several recruiter-relevant capabilities:

- Secure Java backend with JWT-based authentication
- Role-aware access control for customer, admin, and auditor users
- Real financial workflows such as transfers, deposits, and balance updates
- Notification-driven user communication via email templates
- Auditing and operational search capabilities
- Full-stack integration between API and UI
- A realistic domain-model structure for a banking product

## Product overview

Zar Finance allows users to:

- register for an account
- log in with email and password
- manage profile information and profile picture upload
- view account balances and account metadata
- review transaction history
- transfer funds between accounts
- recover and reset a password through an email-based flow
- access admin or auditor views for operational lookup and monitoring

The app intentionally mirrors a banking product workflow rather than a simple demo app, making it suitable as a portfolio project for backend, full-stack, and fintech-oriented roles.

## Architecture

```text
+-------------------+        HTTP/JSON        +----------------------+
| React frontend    | ----------------------> | Spring Boot backend   |
| Vite + TypeScript |                         | Java 21 + JPA + JWT  |
+-------------------+                         +-----------+----------+
                                                             |
                                                             v
                                                     PostgreSQL database
                                                             |
                                                             v
                                                    Email templates / SMTP
```

## Technology stack

### Backend
- Java 21
- Spring Boot 4.0.8
- Spring Security
- Spring Data JPA
- PostgreSQL
- JWT (jjwt)
- Thymeleaf email templates
- AWS SDK for S3
- OpenAPI / Swagger UI support

### Frontend
- React 19
- TypeScript
- Vite
- React Router
- Axios for API calls

## Repository structure

```text
zar-finance/
├── README.md
├── backend/
│   ├── Dockerfile
│   ├── compose.yml
│   ├── pom.xml
│   ├── mvnw
│   ├── README.md
│   └── src/
│       ├── main/
│       │   ├── java/
│       │   └── resources/
│       └── test/
├── frontend/
│   ├── README.md
│   ├── package.json
│   ├── vite.config.ts
│   ├── screenshots/
│   └── src/
└── .git/
```

## Role model

The application includes a role-aware access model with role names such as:

- CUSTOMER
- ADMIN
- AUDITOR

The default registration flow assigns the CUSTOMER role when no role list is provided. Admin and auditor features are protected using method-level access checks.

## Key user journeys

### Customer journey
- register a new account
- get an automated savings account
- sign in and receive a JWT token
- view profile, accounts, and transaction history
- transfer funds to another account
- recover account access via password reset flow

### Operations journey
- review aggregate platform numbers
- search users by email
- inspect account details
- inspect transactions by account or transaction ID
- process customer deposits

## Getting started

### Prerequisites
- Java 21 or newer
- Maven
- Node.js and npm
- PostgreSQL instance
- SMTP-capable email configuration
- A local backend runtime environment with the required service variables configured

### Local startup

1. Start the backend:

```bash
cd backend
./mvnw spring-boot:run
```

2. Start the frontend:

```bash
cd frontend
npm install
npm run dev
```

3. Open the frontend in the browser at the local Vite URL, usually:

```text
http://localhost:5173
```

4. Ensure the backend is running on the configured API port, which the frontend targets through its API client.

## Backend and frontend documentation

- Backend documentation: [backend/README.md](backend/README.md)
- Frontend documentation: [frontend/README.md](frontend/README.md)

## Project status and honest note

This is a strong fintech prototype and portfolio application, not a production-grade banking system. It demonstrates real product logic, security patterns, and full-stack API integration while intentionally keeping local development assumptions and configuration values aligned with a development environment.

## Screenshot highlights

The frontend includes a screenshot gallery that captures the app’s live UI experience, including the login screen and transfer flow. These are included in the frontend documentation with proper relative references.

---

Zar Finance is built to show both engineering discipline and product awareness: secure backend design, user-centric flows, and operational tooling that fit a real digital banking product.
