# 🌍 Srinath Travels & Agency - Management System

Welcome to the **Srinath Travels & Agency** management platform. This is a comprehensive travel management solution designed to streamline tour operations, package bookings, cargo handling, and administrative tasks.

---

## 🚀 Features

### 👤 Admin & Sales Management
- **Dashboard**: A powerful analytics dashboard for real-time sales and profit tracking.
- **Role-Based Access**: Secure login for Admin and Salesperson roles.
- **Management**: Easy CRUD operations for travel packages and cargo entries.

### 📦 Package & Booking System
- **Dynamic Packages**: Add, update, and manage travel packages with image previews.
- **Booking Flow**: Seamless booking experience for customers.

### 🚛 Cargo Management
- **Unified Interface**: Admin can manage cargo entries for all salespeople.
- **Tracking**: Monitor cargo status and details efficiently.

### 📊 Analytics & Reporting
- **Sales Metrics**: Detailed ticket counts and financial calculations.
- **Performance Comparison**: Visual charts and tabs to compare business performance.

---

## 🛠 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React.js, React Router, CSS3 |
| **Backend** | Spring Boot 3, Spring Security |
| **Database** | MySQL |
| **Authentication** | JWT (JSON Web Tokens) |
| **API Client** | Axios |

---

## 📂 Project Structure

- `spring_backend/`: The core API built with Spring Boot.
- `client/`: The modern React frontend application.
- `backend/`: (Optional/Legacy) Original backend implementation.

---

## ⚙️ Getting Started

### 1. Prerequisites
- Java 17+
- Node.js & npm
- MySQL Server

### 2. Backend Setup (`spring_backend`)
1. Navigate to the `spring_backend` directory.
2. Configure your database in `src/main/resources/application.properties`.
3. Run the application:
   ```bash
   mvn spring-boot:run
   ```

### 3. Frontend Setup (`client`)
1. Navigate to the `client` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

---

## 🤝 Contributing
Feel free to open issues or submit pull requests to improve the platform.

---

## 📜 License
This project is for internal use at Srinath Travels.
