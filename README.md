# 🌌 NASA React App

A React.js application that integrates with NASA's public APIs to display space-related data and imagery.

---

## 📅 Table of Contents

- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [License](#license)

---

## 📈 Features

- Fetches data from NASA's public APIs
- Built with React.js and modern frontend tools
- Uses environment variables for API key management

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/nasa-react-app.git
cd nasa-react-app
```

### 2. Create Environment File

Copy the provided `.env.example` file to create your own `.env` file:

```bash
cp .env.example .env
```

### 3. Provide Your API Key

- Visit [https://api.nasa.gov](https://api.nasa.gov) to register and obtain your API key.
- Replace the placeholder value in `.env` with your actual API key.
- You may also use the provided `DEMO_KEY` for limited free access.

Example `.env`:

```bash
VITE_NASA_API_KEY=your_actual_api_key_here
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Run the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port indicated by Vite).

---

## 🏢 Environment Variables

| Variable Name       | Description                       |
| ------------------- | --------------------------------- |
| `VITE_NASA_API_KEY` | Your NASA API Key (or `DEMO_KEY`) |

> **Note**: Never commit your actual `.env` file. Only commit `.env.example` with placeholder values.

---

## 📅 Available Scripts

- `npm run dev` — Runs the app in development mode
- `npm run build` — Builds the app for production
- `npm run preview` — Previews the production build locally

---

## 📦 Deployment

When deploying to platforms like Vercel, Netlify, or Render:

- Do not commit `.env`.
- Configure environment variables directly in the platform's UI using the same variable names as in `.env`.
- Build commands may vary depending on your platform. Usually:

```bash
npm install
npm run build
```

---

## 📁 Project Structure

```bash
nasa-react-app/
├── .env.example    # Environment variable template (committed)
├── .env            # Actual secrets (not committed)
├── package.json
├── src/            # React source code
└── public/         # Static assets
```

---

## 📜 License

This project is licensed under the MIT License.
