# Shruti Zade Portfolio Application

## Overview

This is a personal portfolio application for Shruti Shankar Zade, showcasing her work as a software developer and data analytics enthusiast. The application is built as a full-stack TypeScript project with a React frontend and Express.js backend, featuring a modern design with pastel themes and interactive components.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: Radix UI primitives with custom styling
- **Build Tool**: Vite for development and building
- **Design System**: Custom pastel color scheme with glass morphism effects

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development**: Hot reloading with Vite middleware integration
- **Storage**: In-memory storage implementation with interface for future database integration
- **API**: RESTful API structure (routes defined but implementation pending)

### Database Architecture
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (via Neon Database serverless)
- **Schema**: User management schema defined in shared directory
- **Migrations**: Drizzle Kit for schema migrations

## Key Components

### Frontend Components
1. **Portfolio Sections**:
   - Hero section with full name display and professional information
   - About section with skills and languages
   - Projects section featuring the SmartFit virtual try-on system
   - Certifications section highlighting Deloitte Data Analytics certification
   - Hackathons section showcasing InnoVyuh 2025 participation
   - Contact section with working form integration (Formspree)

2. **UI Components**:
   - Comprehensive shadcn/ui component library
   - Custom animations and floating elements
   - Responsive design with mobile-first approach
   - Glass morphism design effects

3. **Navigation**:
   - Fixed navigation bar with smooth scrolling
   - Mobile-responsive hamburger menu

### Backend Components
1. **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations
2. **Route Structure**: Express router setup ready for API endpoint implementation
3. **Middleware**: Request logging and error handling

### Shared Components
- **Schema Definitions**: Drizzle schema for user management
- **Type Definitions**: Shared TypeScript types between frontend and backend

## Data Flow

1. **Static Portfolio Display**: Content is primarily static, rendered client-side
2. **Contact Form**: Form submissions handled via Formspree external service
3. **Future API Integration**: Backend prepared for dynamic content management
4. **Database Integration**: Drizzle ORM configured for future user/content management

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Date Handling**: date-fns for date formatting
- **Icons**: Lucide React icon library

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM with PostgreSQL adapter
- **Development**: tsx for TypeScript execution, Vite for hot reloading

### External Services
- **Form Handling**: Formspree for contact form submissions
- **Database**: Neon Database for PostgreSQL hosting
- **Fonts**: Google Fonts (Baloo 2, Fredoka, Nunito)
- **Images**: Unsplash and Pixabay for stock photography

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React application to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Assets**: Static assets served from built frontend

### Environment Configuration
- **Development**: Uses Vite dev server with Express middleware
- **Production**: Serves built static files with Express
- **Database**: Requires `DATABASE_URL` environment variable

### Scripts
- `dev`: Development server with hot reloading
- `build`: Production build for both frontend and backend
- `start`: Production server
- `db:push`: Push database schema changes

## Deployment Configuration

### Netlify Setup
- **Build Command**: `npm run build` 
- **Publish Directory**: `dist/public`
- **Node Version**: 20
- **Configuration**: `netlify.toml` with SPA redirects and asset caching
- **Assets**: Images copied to `client/public/attached_assets/` for build inclusion

### Deployment Files
- `netlify.toml`: Netlify configuration with redirects and headers
- `README.md`: Project documentation and setup instructions
- `DEPLOYMENT_GUIDE.md`: Step-by-step Netlify deployment instructions

## Changelog

- July 02, 2025: Initial portfolio setup with pastel theme
- July 02, 2025: Added real project images and Deloitte certification
- July 02, 2025: Implemented cursor particle animations
- July 02, 2025: Mobile responsiveness improvements and desktop fixes
- July 02, 2025: Netlify deployment configuration and documentation

## User Preferences

Preferred communication style: Simple, everyday language.