# 🌍 Explore Dream Destination - Travel Management System

A full-stack web application designed for travel agencies to manage tour packages and for customers to explore and book their dream destinations. This system provides a seamless interface for administrators to handle package inventory and for users to discover new adventures.

---

## ✨ Features

### 🏢 Administrator Portal
- **Secure Login**: JWT-based authentication for administrative access.
- **Package Management**: Complete CRUD (Create, Read, Update, Delete) operations for travel packages.
- **Image Handling**: Upload and manage high-quality previews for destinations.
- **Admin Dashboard**: Overview of system statistics (Orders, Sales, Profits).

### 🌟 Customer Experience
- **Interactive Landing Page**: Modern UI with auto-playing video background and smooth animations.
- **Destination Discovery**: Browse a variety of travel packages with real-time price and location details.
- **About Us & Services**: Learn about the agency's value propositions (Best Price Guarantee, Flexible Booking).
- **Responsive Design**: Fully optimized for various screen sizes using modern CSS.

---

## 🛠 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React.js, Axios, React Router, React Icons |
| **Backend** | Spring Boot 3, Spring Security, JPA/Hibernate |
| **Database** | MySQL |
| **Security** | JSON Web Tokens (JWT) |
| **Styling** | Vanilla CSS3 (Modern Flex/Grid) |

---

## 📂 Project Structure

- `spring_backend/`: The primary backend API built with Spring Boot.
- `client/`: The React-based frontend application.
- `backend/`: Legacy backend implementation (archived).

---

## ⚙️ Setup and Installation

### 1. Prerequisites
- **Java**: JDK 17 or higher.
- **Node.js**: v16.x or higher.
- **Database**: MySQL Server.

### 2. Backend Setup
1. CD into the `spring_backend` directory.
2. Update `src/main/resources/application.properties` with your MySQL credentials:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/your_db_name
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```
3. Build and run the application:
   ```bash
   mvn spring-boot:run
   ```

### 3. Frontend Setup
1. CD into the `client` directory.
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Launch the development server:
   ```bash
   npm start
   ```

---

## 📝 API Endpoints (Core)

- `POST /api/auth/signin`: Admin authentication.
- `GET /api/images/getAll`: Retrieve all travel packages.
- `POST /api/images/addImage`: Add a new package (Multi-part form).
- `PUT /api/images/update/{id}`: Edit existing package details.
- `DELETE /api/images/delete/{id}`: Remove a package from the system.

---

## 📜 License
Internal use only. Developed as part of the EAD2 Project suite.
