# FF Sensitivity Optimizer

## Overview

FF Sensitivity Optimizer is a web application designed to generate optimal Free Fire sensitivity settings based on user device specifications and play style preferences. The application provides personalized gaming configurations to improve player performance through device-specific optimization.

## System Architecture

The application follows a modern full-stack architecture with clear separation between client and server:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state and React hooks for local state
- **Build Tool**: Vite for fast development and optimized production builds
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot reload with Vite integration

## Key Components

### Frontend Components
1. **SensitivityForm**: Collects user device specifications and preferences
2. **ResultsDisplay**: Shows calculated sensitivity settings with copy functionality
3. **UI Components**: Comprehensive shadcn/ui component library for consistent design

### Backend Components
1. **Storage Interface**: Abstracted storage layer with in-memory fallback
2. **Route Registration**: Centralized API route management
3. **Vite Integration**: Development server with hot reload capabilities

### Shared Components
1. **Schema Definition**: Centralized database schema using Drizzle ORM
2. **Type Safety**: Shared TypeScript types between client and server

## Data Flow

1. **User Input**: Device specifications collected through form validation
2. **Calculation Engine**: Client-side sensitivity calculation based on device specs
3. **Results Presentation**: Optimized settings displayed with gaming-themed UI
4. **Data Persistence**: User data stored in PostgreSQL with session management

## External Dependencies

### Database
- **PostgreSQL**: Primary database for user data and session storage
- **Drizzle ORM**: Type-safe database operations with schema migrations
- **Neon Database**: Serverless PostgreSQL provider

### UI/UX Libraries
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first styling framework
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Replit**: Cloud development environment with integrated deployment
- **esbuild**: Fast JavaScript bundler for production builds
- **tsx**: TypeScript execution for development

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20 runtime
- **Database**: PostgreSQL 16 module integration
- **Port Configuration**: Application runs on port 5000 with external port 80
- **Auto-scaling**: Configured for automatic scaling based on demand

### Build Process
1. **Frontend**: Vite builds React application to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Assets**: Static files served from build directory

### Environment Configuration
- **DATABASE_URL**: Required environment variable for PostgreSQL connection
- **NODE_ENV**: Environment-specific configuration (development/production)

## Changelog

Changelog:
- June 24, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.