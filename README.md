#  CloudCost Estimator

A **full-stack cost calculator** built with **Spring Boot**, **PostgreSQL**, and **React**.  
It allows the user to select a **Type**, **Subtype**, **Region**, and **Quantity**, then calculates total cost and provides a detaled bill.

---

##  Features

- Dynamic **subtype selection** based on chosen type (Compute, Storage, Database).
- **Real-time price lookup** from PostgreSQL.
- Backend cost calculation and **detailed breakdown**.
- **Axios**-based frontend API calls.
- User-friendly UI with breakdown display.

---

##  Tech Stack

- **Backend**: Java 17, Spring Boot, Spring Data JPA, Hibernate  
- **Frontend**: React, Axios, JSX  
- **Database**: PostgreSQL  
- **Build Tool**: Maven  

---

##  Project Structure

```
cloudcost-estimator/
│
├── backend/ # Spring Boot backend
│ ├── src/main/java/... # Java source code
│ ├── src/main/resources/ # application.properties, schema.sql, data.sql
│ └── pom.xml # Maven config
│
├── frontend/ # React frontend
│ ├── src/ # React components, App.jsx
│ └── package.json # Frontend dependencies
│
└── README.md # This file
```


---

##  Clone the Repository

You can clone the repository using **SSH**:
```bash
git clone git@github.com:Akhila2726/Cloud-Cost-Estimator.git
```
or using HTTPS:
```bash
git clone https://github.com/Akhila2726/Cloud-Cost-Estimator.git
```




##  Backend Setup (Spring Boot)

###  Database Setup
Make sure PostgreSQL is installed and running.

**Create database & user:**
```sql
CREATE USER your_username WITH PASSWORD 'your_password';
CREATE DATABASE pricing OWNER your_user;
```
**Create table:**
```sql
CREATE TABLE pricing (
    id SERIAL PRIMARY KEY,
    sub_type VARCHAR(50) NOT NULL,
    region VARCHAR(50) NOT NULL,
    price_per_unit NUMERIC(10, 2) NOT NULL
);
```
**Insert sample data:**
```sql
INSERT INTO pricing (sub_type, region, price_per_unit) VALUES
('VM', 'us-east', 0.12),
('VM', 'us-west', 0.13),
('SSD', 'us-east', 0.10),
('SSD', 'us-west', 0.11),
('MySQL', 'us-east', 0.15),
('MySQL', 'us-west', 0.16);
```


###  Configure Spring Boot
Edit application.properties or set environment variables:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/your_dbname
spring.datasource.username=your_username
spring.datasource.password=your_password
```

###  Run Backend
```bash
cd backend
mvn clean install
mvn spring-boot:run
```
The backend will start at: http://localhost:8080


##  Frontend Setup (React)
### Install Dependencies
```bash
cd frontend
npm install
```
###  Start Development Server
```bash
npm start
```
The frontend will run at: http://localhost:3000

---

## How It Works
- User selects **Type** → system dynamically loads available subtypes.
- User selects **Region** and **Quantity**.
- Frontend sends request to backend API.
- Backend queries PostgreSQL for price based on *subType* + *region*.
- Returns unit price, total cost, and breakdown.
- UI displays results in real-time.

 ---

## License
This project is for **learning/demo purposes** and is **not production-ready**.


