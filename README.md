# Murshid Web App (مرشد) 📖

Murshid is a modern React application that allows users to search for an Arabic root word in the Holy Qur'an and returns detailed, related words and occurrences.

## 🌟 Features
- **Responsive Design**: Auto-swaps between a detailed Table view (for large screens) and a mobile-friendly Card View (for smaller devices).
- **Fast & Modern UI**: Built with React, TypeScript, Vite, and styled with Chakra UI.
- **Arabic Typography**: Beautifully integrated with the `Cairo` font for native Arabic readability.
- **Robust Testing**: Fully configured with `Vitest` and `React Testing Library`.

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed on your local machine:
- **Node.js** (v18.x or newer)
- **npm** (comes with Node.js)
- **Django Backend Server** (Must be running for API calls to succeed)

## 🚀 Installation & Setup

1. **Clone or Download the Repository**
   Ensure you are in the `murshid` frontend directory:
   ```bash
   cd murshidweb/murshid
   ```

2. **Install Dependencies**
   Run the following command to install all necessary packages:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root of the React project and add the backend API URL. If you are running the Django server locally on port 8000, it should look like this:
   ```env
   VITE_API_URL=http://127.0.0.1:8000
   ```

4. **Start the Development Server**
   ```bash
   npm run dev
   ```
   *The application will be accessible at `http://localhost:5173/`.*

## 🔗 Connecting to the Backend API
For this frontend to display data, the MySQL database must be populated, and the Django backend API must be running. 

Navigate to your backend directory (`murshidApp`) in a separate terminal window and start the server:
```bash
source venv/bin/activate
python manage.py runserver 8000
```
> **Note**: Ensure that `django-cors-headers` is installed and correctly configured in your Django `settings.py` so that the React frontend is permitted to fetch data.

## 🧪 Testing
The application includes a suite of unit tests. To run the tests, use:
```bash
npm run test
```

## 🏗️ Building for Production
To bundle the application into static files for production deployment, run:
```bash
npm run build
```
The optimized files will be generated in the `/dist` folder, which can then be hosted on any static hosting service like Vercel, Netlify, or an Nginx server.
