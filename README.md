# 🌌 Selva Kumaran G | Interactive Developer Portfolio
**PORTFOLIO LINK**:https://selva-kumaran-portfolio.onrender.com

![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Matter.js](https://img.shields.io/badge/Matter.js-2D_Physics-FF6F00?style=for-the-badge)

A high-performance, interactive, and visually stunning developer portfolio built for **Selva Kumaran G** — Computer Science & Engineering Graduate, Full-Stack MERN Architect, Java Specialist, and Published Patent Innovator.

---

## ✨ Key Features & Highlights

- **🚀 Interactive Welcome Splash Screen**: Full-screen entrance greeting (*"WELCOME TO SELVA'S PORTFOLIO"*) with smooth fade/zoom transition into the main web application.
- **📸 Crystal-Clear Formal Photograph**: High-definition portrait frame displaying formal suit & tie photograph with zero darkening overlays and vibrant neon borders.
- **📄 Direct PDF Resume Download**: One-click resume download (`Selva_Kumaran_G_Resume.pdf`) integrated in the Navbar, Hero section, and Footer.
- **🎯 4-Tab Interactive Profile Panel**:
  - **Career Overview**: Engineering philosophy & bilingual proficiency (*English, Tamil*).
  - **Academic Timeline**: B.E CSE (**8.25 CGPA** at VSB College of Engineering), XII HSC (**82.1%**), and X SSLC (**100%** aggregate score).
  - **Internship Milestones**: Full Stack Development at **S3 Remotica**, MERN Stack at **Viruzverse Solution**, and Data Analytics at **Future Inters**.
  - **Coding Benchmarks**: **460+ LeetCode** problems solved & **4★ HackerRank** Java Gold badge.
- **📂 Dynamic GitHub Projects Showcase**: Integrated with GitHub REST API (`@Selvakumaran-2006`) featuring live repositories, tech stack tags, stars, forks, and repository links.
- **📜 Verified Google Drive Certificates**: Direct access links to official certifications stored in Google Drive: `https://drive.google.com/drive/folders/1zKKzVXL66CHf-EZYYPg8hMNky-npdoR6`.
- **📄 Published Patents & Research**:
  - **Patent 1**: *Fraud Detection in Voting System Using Hybrid Biometric Scanner* (App No: `202541037560A`).
  - **Patent 2**: *Fault Prediction in Computer Using IoT and Machine Learning Algorithms* (App No: `202541129936A`).
  - **IJRPA Journal Paper**: *Legal Status and Liability of Data Brokers and Third-Party Data Processors* (Manuscript No: `1050`).
- **📧 Dual MongoDB & Email Contact System**: Submissions save to MongoDB database (`selva_portfolio`) and dispatch email notifications directly to `selvakumaran936@gmail.com`.
- **✨ Visual Aesthetics & Particle Physics**:
  - Exact palette: `#050816` (Primary), `#0B1026` (Secondary), `#8B5CF6` (Purple), `#A855F7` (Neon Violet), `#3B82F6` (Blue), `#22D3EE` (Cyan).
  - **90 Twinkling Star Sparkles** across the background.
  - **Trailing Cursor Sparkle Effect** following mouse movement.

---

## 🛠️ Tech Stack & Architecture

### **Frontend**
- **Core Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS + Glassmorphic Design System
- **Typography**: Space Grotesk (Headings) + Inter (Body) + Fira Code (Mono)
- **Icons**: Lucide React Icons & Custom SVGs
- **Effects**: HTML5 Canvas Particle Engine & Canvas Confetti

### **Backend & Database**
- **Runtime**: Node.js & Express.js
- **Database**: MongoDB & Mongoose Object Modeling
- **Email Service**: Nodemailer SMTP & Direct Web API Dispatch
- **Security & Utilities**: CORS, Dotenv, JSON Parser

---

## 🚀 Local Installation & Setup Guide

### 1. Clone the Repository
```bash
git clone https://github.com/Selvakumaran-2006/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables (Optional for Local MongoDB)
Create a `.env` file in the root directory:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/selva_portfolio
EMAIL_USER=selvakumaran936@gmail.com
EMAIL_PASS=your_gmail_app_password
RECIPIENT_EMAIL=selvakumaran936@gmail.com
```

### 4. Start Local Backend Server (MongoDB & Mail Express Server)
```bash
node server.js
```
*Backend API available at: `http://localhost:5000/api/contact`*

### 5. Start Vite Frontend Development Server
```bash
npm run dev
```
*Frontend web application available at: `http://localhost:5173`*

---

## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Backend server health check |
| `POST` | `/api/contact` | Saves contact message to MongoDB & dispatches email |
| `GET` | `/api/contact/messages` | Admin route to retrieve all saved MongoDB messages |

---

## 👤 Author Details

**SELVA KUMARAN G**  
*B.E Computer Science & Engineering (2023 - 2027)*  
VSB College of Engineering Technical Campus, Coimbatore / Karur, Tamil Nadu, India.

- **Email**: [selvakumaran936@gmail.com](mailto:selvakumaran936@gmail.com)
- **GitHub**: [@Selvakumaran-2006](https://github.com/Selvakumaran-2006)
- **LinkedIn**: [selva-kumaran-g](https://www.linkedin.com/in/selva-kumaran-g-31b239329/)
- **LeetCode**: [SelvaKumaran](https://leetcode.com/u/SelvaKumaran)
- **HackerRank**: [selvakumaran936](https://www.hackerrank.com/profile/selvakumaran936)

---
*Developed with ❤️ using React, Tailwind CSS, Node.js, and MongoDB.*
