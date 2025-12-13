# 👨‍💻 Said Ait Ennecer - Full-Stack Developer Portfolio

A modern, responsive full-stack portfolio built with **React 19**, **FastAPI**, and **MongoDB**. This application showcases my software engineering projects and technical skills, featuring a dynamic frontend and a robust backend API.

![Portfolio Preview](frontend/public/images/portfolio-preview.png)
_(Note: Replace with an actual screenshot of your site)_

## 🚀 Tech Stack

### Frontend

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

### Backend

- **API Framework:** [FastAPI](https://fastapi.tiangolo.com/) (Python)
- **Database:** [MongoDB](https://www.mongodb.com/) (NoSQL)
- **Server:** Uvicorn (ASGI)

---

## 🛠️ Installation & Setup Guide

Follow these steps to run the full stack (Database, Backend, and Frontend) locally.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18+)
- **Python** (v3.9+)
- **MongoDB** (Running locally or have an Atlas connection string)

### 1. Clone the Repository

```bash
git clone [https://github.com/SaidAit01/my-portfolio.git](https://github.com/SaidAit01/my-portfolio.git)
cd my-portfolio
```

### Backend Setup (FastAPI)

```bash
# 1. Navigate to backend
cd backend

# 2. Create a virtual environment
python -m venv venv

# 3. Activate the virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# 4. Install Python dependencies
pip install -r requirements.txt

# 5. Configure Environment Variables
# Create a .env file and add your MongoDB URL
echo "MONGODB_URL=mongodb://localhost:27017" > .env
echo "DB_NAME=portfolio_db" >> .env

# 6. Start the Backend Server
uvicorn main:app --reload
```

The Backend API will launch at http://localhost:8000

## Frontend Setup (React + Vite)

```bash
# 1. Navigate to frontend
cd frontend

# 2. Install dependencies
# Use legacy-peer-deps to resolve React 19/template conflicts
npm install --legacy-peer-deps

# 3. Start the Development Server
npm run dev
```

The Frontend will launch at http://localhost:5173

---

# Project Structure

my-portfolio/
├── backend/ # FastAPI Application
│ ├── main.py # API Entry point
│ ├── models/ # MongoDB Models (Pydantic)
│ ├── routes/ # API Endpoints
│ └── requirements.txt # Python dependencies
├── frontend/ # React Application
│ ├── src/
│ │ ├── components/ # UI Components
│ │ ├── data/ # Mock Data / API Service
│ │ └── App.jsx # Main Frontend Logic
│ └── package.json # Frontend dependencies
└── README.md # Project Documentation

---

#Key features :
Dynamic Project Showcase: Filterable project cards with rich details.
Interactive Skills Section: Glassmorphic "skill chips" design.
Full-Stack Architecture: Decoupled frontend and backend for scalability.
Responsive Design: Fully optimized for mobile, tablet, and desktop.

---

Built with ❤️ by Said Ait Ennecer
