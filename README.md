# Event Management and Ticketing System - Frontend

A modern, responsive event management and ticketing platform built with React, Vite, and Tailwind CSS. This application provides a seamless user experience for event discovery, registration, and management with integrated social authentication.

## 🌟 Features

### Authentication & Authorization
- **Email/Password Authentication** - Secure user registration and login with JWT tokens
- **Social Login Integration** - Sign in with Google and GitHub OAuth
- **Password Validation** - Strong password requirements with uppercase, lowercase, and numbers
- **Profile Picture Upload** - User avatars via ImgBB integration
- **Protected Routes** - Role-based access control (Admin, Organizer, User)

### User Interface
- **Responsive Design** - Fully responsive layouts for mobile, tablet, and desktop
- **Modern UI/UX** - Clean, intuitive interface with Lottie animations
- **Custom Color Theme** - Warm color palette (#FBF9D1, #E6CFA9, #C1856D, #9A3F3F)
- **Error Handling** - User-friendly error pages with navigation options
- **Form Validation** - Real-time validation with React Hook Form
- **Loading States** - Visual feedback during async operations

### Core Functionality
- User registration with profile customization
- Secure login/logout functionality
- Social authentication callbacks
- Dashboard for authenticated users
- Error page with navigation options

## 🚀 Tech Stack

### Frontend Framework
- **React 19.1.1** - Modern UI library with hooks
- **Vite 7.1.4** - Fast build tool and dev server
- **React Router 7.8.2** - Client-side routing

### Styling & UI
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **React Icons 5.5.0** - Icon library
- **Lottie React 2.4.1** - Animation library

### Form & Validation
- **React Hook Form 7.62.0** - Performant form validation
- Custom validation rules and error handling

### HTTP & API
- **Axios 1.11.0** - HTTP client with interceptors
- JWT token management
- Secure API communication

## 📋 Prerequisites

Before running this application, ensure you have:

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** package manager
- **Backend API** running (Laravel system-backend)
- **ImgBB API Key** (for profile picture uploads)
- **Google OAuth Client ID & Secret** (optional, for social login)
- **GitHub OAuth Client ID & Secret** (optional, for social login)

## ⚙️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/TanmoyDhar1077/Event-Management-System-Frontend.git
cd system-frontend
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```env
# Backend API URL
VITE_API_URL=http://localhost:8000/api

# ImgBB API Key (for profile picture uploads)
VITE_IMGBB_API_KEY=your_imgbb_api_key_here

# Social Authentication URLs (optional)
VITE_GOOGLE_AUTH_URL=http://localhost:8000/api/auth/google
VITE_GITHUB_AUTH_URL=http://localhost:8000/api/auth/github

# Frontend URL (for callbacks)
VITE_FRONTEND_URL=http://localhost:3000
```

### 4. Start Development Server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Project Structure

```
system-frontend/
├── public/                     # Static assets
│   └── vite.svg
├── src/
│   ├── api/
│   │   └── api.js             # Axios instance with interceptors
│   ├── assets/
│   │   ├── login.json         # Lottie animation for login
│   │   ├── register.json      # Lottie animation for register
│   │   ├── error.json         # Lottie animation for error page
│   │   └── react.svg
│   ├── hooks/
│   │   └── useTitle.jsx       # Custom hook for page titles
│   ├── pages/
│   │   ├── Login.jsx          # Login page component
│   │   ├── Register.jsx       # Registration page component
│   │   ├── ErrorPage.jsx      # 404 error page
│   │   └── dashboard/
│   │       └── Dashboard.jsx  # User dashboard
│   ├── Router/
│   │   └── Router.jsx         # Route configuration
│   ├── socialLogin/
│   │   └── SocialAuthCallback.jsx  # Social auth handler
│   ├── App.css               # Global styles
│   ├── App.jsx               # Root component
│   ├── index.css             # Tailwind directives
│   └── main.jsx              # Application entry point
├── .env                      # Environment variables
├── .gitignore
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── README.md                 # This file
├── tailwind.config.js        # Tailwind configuration
└── vite.config.js            # Vite configuration
```

## 🔧 Configuration

### Axios Configuration (`src/api/api.js`)
The application uses a custom Axios instance with:
- Base URL from environment variables
- Automatic JWT token injection in headers
- Request/response interceptors
- Error handling for unauthorized requests

### Routing (`src/Router/Router.jsx`)
Routes configured with React Router:
- `/` - Redirects to login
- `/login` - Login page
- `/register` - Registration page
- `/social-auth-callback` - Social authentication handler
- `/dashboard` - Protected dashboard (requires authentication)
- `*` - 404 error page

## 📱 Pages & Components

### Login Page (`src/pages/Login.jsx`)
- Email/password authentication
- Password visibility toggle
- Social login buttons (Google, GitHub)
- Form validation with error messages
- Responsive design with Lottie animation
- Remember me functionality
- Forgot password link

### Register Page (`src/pages/Register.jsx`)
- User registration form
- Profile picture upload to ImgBB
- Password strength validation
- Confirm password matching
- Terms and conditions checkbox
- Social registration options
- Real-time form validation

### Dashboard (`src/pages/dashboard/Dashboard.jsx`)
- Protected route for authenticated users
- User profile display
- Event management features

### Error Page (`src/pages/ErrorPage.jsx`)
- Custom 404 page
- Error code and message display
- Navigation buttons (Go Back, Go Home)
- Support contact information
- Matching design theme

### Social Auth Callback (`src/socialLogin/SocialAuthCallback.jsx`)
- Handles OAuth provider redirects
- Token extraction and storage
- Error handling with user feedback
- Automatic redirection after authentication
- Loading animation during processing

## 🔐 Authentication Flow

### Email/Password Registration
1. User fills registration form
2. Profile picture uploaded to ImgBB (optional)
3. User data sent to backend API
4. JWT token received and stored in localStorage
5. User redirected to dashboard

### Email/Password Login
1. User enters credentials
2. Credentials validated by backend
3. JWT token received and stored
4. User redirected to dashboard

### Social Authentication (Google/GitHub)
1. User clicks social login button
2. Redirected to OAuth provider
3. User authorizes the application
4. Provider redirects to backend callback
5. Backend creates/finds user and generates JWT
6. Backend redirects to frontend callback with token
7. Frontend stores token and user data
8. User redirected to dashboard

### Logout
1. User clicks logout
2. Token invalidated on backend
3. Token removed from localStorage
4. User redirected to login page

## 🎨 Styling & Theme

### Color Palette
- **Primary Background**: #FBF9D1 (Light cream)
- **Secondary Background**: #E6CFA9 (Tan)
- **Primary Accent**: #C1856D (Terracotta)
- **Primary CTA**: #9A3F3F (Deep burgundy)

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Typography
- Clean, modern font stack
- Responsive font sizes
- Proper hierarchy and spacing

## 🧪 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

### Code Quality
- ESLint configuration for code consistency
- React hooks plugin for best practices
- React refresh plugin for fast development

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deployment Considerations
1. Update environment variables for production
2. Configure CORS on backend API
3. Set up proper domain for OAuth callbacks
4. Configure CDN for static assets
5. Enable HTTPS for secure token transmission

## 🔒 Security Features

- JWT token-based authentication
- HTTP-only cookie support (optional)
- CORS configuration
- Input validation and sanitization
- Password strength requirements
- Protected routes with guards
- Secure token storage
- OAuth 2.0 implementation

## 🐛 Troubleshooting

### Common Issues

**Problem**: Images not uploading to ImgBB
- **Solution**: Check `VITE_IMGBB_API_KEY` in `.env` file
- Verify image size (max 30MB)
- Check network tab for API response

**Problem**: Social login not working
- **Solution**: Verify OAuth credentials in backend `.env`
- Check callback URLs match OAuth app settings
- Ensure backend and frontend URLs are correct

**Problem**: "Registration failed" error
- **Solution**: Check backend API is running
- Verify all required fields are filled
- Check browser console for specific errors
- Ensure backend accepts profile_picture as string URL

**Problem**: Token not persisting
- **Solution**: Check localStorage in browser DevTools
- Verify Axios interceptor is working
- Check token format from backend

## 🤝 Integration with Backend

This frontend integrates with a Laravel backend API:
- **Repository**: system-backend
- **API Endpoints**: `/api/register`, `/api/login`, `/api/logout`
- **Social Auth**: `/api/auth/google`, `/api/auth/github`
- **Authentication**: JWT tokens via tymon/jwt-auth

### Backend Requirements
- Laravel 11.0+
- PHP 8.2+
- Laravel Socialite for OAuth
- JWT Auth package
- CORS enabled for frontend domain

## 📄 License

This project is part of an Event Management and Ticketing System.

## 👨‍💻 Author

**Tanmoy Dhar**
- GitHub: [@TanmoyDhar1077](https://github.com/TanmoyDhar1077)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing fast build tool
- Tailwind CSS for the utility-first approach
- Lottie for beautiful animations
- All open-source contributors

---

**Note**: This is the frontend component of a full-stack application. Ensure the backend API is properly configured and running before starting development.
