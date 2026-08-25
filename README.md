# UniKit Frontend

UniKit is a web-based collection of free, practical utilities built with React and JavaScript.

## Tech Stack

- React
- JavaScript
- Vite
- React Router
- Lucide React
- CSS

## Project Structure

```text
UniKit-frontend/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   └── tools/
│   ├── config/
│   ├── pages/
│   │   ├── image/
│   │   ├── document/
│   │   └── audio/
│   ├── services/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── .env
├── package.json
└── vite.config.js
```

## Installation

Install the frontend dependencies:

```bash
npm install
```

## Environment Variables

The frontend uses an environment variable for the backend API URL.

Example:

```env
VITE_API_URL=http://localhost:8000
```

When deploying the frontend, change this value to the deployed backend URL.

For Vite, only variables prefixed with `VITE_` are exposed to frontend code.

## Development

Start the development server:

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

## Available Tools

### Image

- Background Remover

### Document

- OCR Scanner
- PDF Tools — planned

### Audio

- Audio to Text

## API Configuration

Keep the backend URL centralized in the frontend service/API configuration.

Example:

```js
const API_URL = import.meta.env.VITE_API_URL;
```

Do not hard-code production API URLs throughout individual components.

## Deployment

Before deploying the frontend:

1. Deploy the UniKit backend.
2. Obtain the backend's public HTTPS URL.
3. Set the frontend environment variable:

```env
VITE_API_URL=https://your-backend-domain.com
```

4. Build the frontend:

```bash
npm run build
```

5. Deploy the generated `dist/` directory using your chosen hosting platform.

> Important: changing only the frontend `.env` is sufficient **for the frontend's API URL**, but deployment is not only an `.env` change. The backend itself must also be deployed and configured, including its own environment variables, CORS settings, dependencies, and runtime.

## Development API

```text
Frontend: http://localhost:5173
Backend:  http://localhost:8000
```

The frontend communicates with the FastAPI backend through the configured API URL.

## Notes

- Do not commit secrets to Git.
- Keep `.env` files out of version control when they contain private values.
- Use `.env.example` to document required environment variables.
