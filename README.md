
# 🚀 ApplySmart – Job Application Automation Platform

ApplySmart is an intelligent job application automation platform designed to help candidates effortlessly discover, manage, and apply for jobs that match their skills. It integrates with multiple job boards, offers AI-powered recommendations, and provides a seamless experience for users to track and tailor their applications.

---

## 📌 Table of Contents

- [🔍 Features](#-features)
- [🧠 Project Vision](#-project-vision)
- [🛠 Tech Stack](#-tech-stack)
- [📦 Installation](#-installation)
- [🖥️ Run Locally](#️-run-locally)
- [🧩 Folder Structure](#-folder-structure)
- [📈 Roadmap](#-roadmap)
- [💼 Team Responsibilities](#-team-responsibilities)
- [📄 License](#-license)

---

## 🔍 Features

### ✅ MVP Features
- User authentication system (Login/Signup)
- Profile dashboard with resume/cover letter upload
- Integration with one major job board (e.g., LinkedIn/Indeed)
- Track applied jobs and manage job history
- Save jobs to review later

### 🔜 Phase 2 (Advanced)
- Multiple job board integrations (Naukri, Monster, etc.)
- Notifications for deadlines, new jobs, and status updates
- Role-based resume/cover letter library
- Application performance dashboard

### 💎 Phase 3 (Premium + AI)
- AI-based job recommendations
- Smart job filters (location, salary, remote)
- Browser extension for autofill and direct applications
- Interview preparation toolkit (mock questions, resume scoring)

---

## 🧠 Project Vision

> "Empower candidates by automating job search and applications using AI, while offering a centralized and customizable application management system."

---

## 🛠 Tech Stack

### Frontend
- `React.js`
- `TailwindCSS`

### Backend
- `Node.js`
- `Express.js`

### Database
- `MongoDB`

### Extension
- `Chrome Extension APIs`

### Hosting/Deployment
- `AWS` or `Heroku`

---

## 📦 Installation

### Prerequisites

- Node.js (v16+)
- MongoDB
- Git

### Clone the Repository

```bash
git clone https://github.com/alankrit98/applysmart.git
cd applysmart
```

### Install Dependencies

```bash
# For both client and server
cd client
npm install

cd ../server
npm install
```

---

## 🖥️ Run Locally

```bash
# Run backend
cd server
npm run dev

# Run frontend
cd ../client
npm run dev
```

Make sure MongoDB is running locally or connected via MongoDB Atlas.

---

## 🧩 Folder Structure

```
applysmart/
├── client/           # React frontend
│   ├── components/
│   ├── pages/
│   └── assets/
├── server/           # Node.js backend
│   ├── controllers/
│   ├── routes/
│   └── models/
├── extension/        # Chrome Extension (Phase 3)
├── .env
└── README.md
```

---

## 📈 Roadmap

| Phase | Description | Timeline |
|-------|-------------|----------|
| MVP   | Core Features: Auth, Profile, Job Board, Tracker | 4–8 weeks |
| Phase 2 | Multi-platform, Alerts, Dashboard | +8–12 weeks |
| Phase 3 | AI features, Browser Extension, Interview Prep | Continuous |

---

## 💼 Team Responsibilities

| Role | Responsibilities |
|------|------------------|
| Frontend Developer | Build React UI, dashboard, browser extension |
| Backend Developer | API integrations, authentication, job scraping |
| AI Engineer | Job recommendation engine, resume matching |
| UI/UX Designer | Intuitive user interface and experience |
| DevOps | Hosting, deployment, version control |
| Product/Marketing | Promotion, user feedback collection |

---

## 📄 License

This project is licensed under the MIT License[MIT LICENSE].

---

## 📬 Contact

For questions or collaboration, reach out to the project maintainers.

---
