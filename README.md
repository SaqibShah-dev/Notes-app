```markdown
# Notes App (React + Tailwind CSS + Vite)

A responsive single-page web application built with **React** and **Tailwind CSS v4** that allows users to easily add, manage, and delete personal notes.

---

## Features

- **Add Notes:** Create notes with custom titles and detailed descriptions.
- **Delete Notes:** Remove individual note cards on demand.
- **Responsive Design:** Side-by-side layout for desktop devices and stacked view for mobile screens.
- **Modern Tech Stack:** Built with React 19, Vite, and Tailwind CSS v4.

---

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **HTTP Client:** Axios *(prepared for API integration)*

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SaqibShah-dev/Notes-app.git
   cd Notes-app

```

2. **Install dependencies:**
```bash
npm install

```


3. **Start the development server:**
```bash
npm run dev

```


4. Open your browser and navigate to `http://localhost:5173`.

---

## Available Scripts

In the project directory, you can run:

| Command | Action |
| --- | --- |
| `npm run dev` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint to check for code quality |

---

## Project Structure

```text
├── src/
│   ├── App.jsx         # Main application component & logic
│   ├── main.jsx        # App entry point
│   └── index.css       # Global styles & Tailwind imports
├── package.json        # Project metadata and dependencies
└── vite.config.js      # Vite configuration

```

```

<FollowUp label="Would you like me to add code to persist your notes using localStorage?" query="Can you modify App.jsx so that the notes persist in localStorage when refreshed?"/>

```
