# Backend - Silver Arrow Car Project

This backend project supports the digital showroom platform for Silver Arrow Car KFT. It provides API endpoints for user authentication, car management, and admin CRUD operations, built with a focus on security, scalability, and maintainability.

## 🚀 Features

- User registration and authentication with JWT
- Secure password hashing with bcrypt
- Full CRUD operations for cars manageable by admins
- Database interactions via Prisma ORM with PostgreSQL
- Environment configuration using dotenv
- Automatic restart during development with Nodemon
- Strong typing and linting using TypeScript and ESLint
- Schema validation with Zod

## 🛠️ Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.1.0-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-6.16.0-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15.x-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-9.0.2-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)
![Bcrypt](https://img.shields.io/badge/Bcrypt-6.0.0-9C6B41?style=for-the-badge&logo=bcrypt&logoColor=white)
![Dotenv](https://img.shields.io/badge/Dotenv-16.6.1-3C7A3D?style=for-the-badge)

## 📦 Installation

1. Clone the repository:
   git clone https://github.com/horvathmartin97/my-showcase-projects/tree/main/silverArrowCar/backend
   cd backend

text

2. Install dependencies:
   npm install

or
yarn install

text

3. Configure environment variables:

- Create a `.env` file in the root directory
- Set your PostgreSQL connection string and JWT secret, e.g.:
  ```
  DATABASE_URL="postgresql://user:password@localhost:5432/silvercar"
  JWT_SECRET="your_jwt_secret"
  ```

4. Run database migrations:
   npm run prisma:migrate

text

5. Start the development server:
   npm run dev

text

## 🧪 Scripts

- `dev` – Run the development server with Nodemon
- `prisma:migrate` – Run database migrations
- `prisma:generate` – Generate Prisma client
- `start` – Start the production build

## 🤝 Contributing

Contributions are welcome. Please open an issue first to discuss any major changes.

## 📄 License

This project is licensed under the ISC License.
