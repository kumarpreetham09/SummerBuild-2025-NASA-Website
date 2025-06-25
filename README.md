# 🌌 NASA React App

A React.js application that integrates with NASA's public APIs to display space-related data and imagery.

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

create your own `.env` file with reference to .env.example:

### 3. Provide Your API Key or use DEMO_KEY

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

---

## 📅 Available Scripts

- `npm run dev` — Runs the app in development mode

---

## 📦 Deployment

```bash
npm install
npm run dev
```

---

## 📁 Project Structure

```bash
nasa-react-app/
├── node_modules/         # Dependencies
├── public/               # Static assets
├── src/                  # Application source code
├── .env.example          # Example environment variables (template)
├── .env                  # Local environment variables
├── .eslintrc.js          # ESLint configuration
├── .gitattributes        # Git file attributes
├── .gitignore            # Git ignore rules
├── package.json          # Project metadata and dependencies
├── package-lock.json     # Exact dependency versions
├── README.md             # Project documentation
└── vite.config.js        # Vite build configuration
```

---
