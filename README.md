# SwiftCourier - Logistics & Courier Management System

A comprehensive courier and logistics management platform built with React, TypeScript, Tailwind CSS, and Supabase.

## Features

### Admin Panel
- ✅ Client registration with complete sender/receiver forms
- ✅ Status management (Pending, On Hold, In Transit, Delivered)
- ✅ Automated notifications for registration and updates
- ✅ Receipt generation with "PAID" watermark
- ✅ Real-time shipment tracking and location updates

### User Website (5 Pages)
1. **Home** - Hero section, statistics, services overview, testimonials, CTA
2. **About** - Company story, mission/vision, values, team, milestones
3. **Services** - Detailed service offerings and industries served
4. **Contact** - Contact form, office information, map integration
5. **Tracking** - Real-time shipment tracking with detailed history

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7
- **Database**: Supabase (PostgreSQL)
- **Animations**: Motion (Framer Motion)
- **Carousel**: React Slick
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Images**: Unsplash API

## Getting Started

### Prerequisites
- Node.js 18+ and pnpm
- Supabase account

### Installation

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Set up Supabase database**
   - See [DATABASE_SETUP.md](./DATABASE_SETUP.md) for detailed instructions
   - Execute the SQL in `setup-database.sql` in your Supabase SQL Editor

3. **Environment variables**
   The `.env` file is already configured with your Supabase credentials.

4. **Start development server**
   The dev server should already be running. If not:
   ```bash
   pnpm run dev
   ```

## Usage

### Admin Access
Navigate to `/admin` to access the admin dashboard:
- **Dashboard Tab**: View statistics and overview
- **Register New Client Tab**: Create new shipments
- **Manage Shipments Tab**: Update status, location, and notify clients

### Client Tracking
Clients can track their shipments at `/tracking` using their tracking number (format: SC123456789)

## Project Structure

```
src/
├── app/
│   ├── components/          # Shared components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/              # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   ├── Tracking.tsx
│   │   └── admin/
│   │       ├── Admin.tsx
│   │       ├── RegisterClient.tsx
│   │       ├── ManageShipments.tsx
│   │       └── Receipt.tsx
│   └── App.tsx             # Main app component
├── lib/
│   └── supabase.ts         # Supabase client config
└── styles/
    ├── carousel.css        # Carousel styles
    └── fonts.css           # Font imports

```

## Key Features Explained

### Notification System
Notifications are triggered for:
- New client registration (sender & receiver)
- Status updates
- Location changes

Currently logs to console. For production, integrate with:
- Supabase Edge Functions + Resend/SendGrid
- Custom email service
- SMS notifications via Twilio

### Receipt Generator
Automatically generates professional receipts with:
- "PAID" watermark (semi-transparent)
- Complete shipment details
- Print/download functionality
- Company branding

### Status Management
Four shipment statuses:
- **Pending**: Registered, awaiting pickup
- **On Hold**: Temporarily paused
- **In Transit**: Being delivered
- **Delivered**: Completed

Each status change creates a history entry with timestamp and location.

## Database Schema

### shipments
- Tracking number (unique)
- Sender details (name, email, phone, address, city, country)
- Receiver details (name, email, phone, address, city, country)
- Package info (weight, description)
- Status and current location
- Timestamps

### status_history
- Shipment reference
- Status snapshot
- Location
- Timestamp
- Notes

## Images & Assets

All images are sourced from Unsplash for:
- Hero backgrounds
- About page gallery
- Service page imagery
- Global reach visuals

## Customization

### Branding
Update company name and branding in:
- `Navbar.tsx` and `Footer.tsx` components
- `Receipt.tsx` for receipt header
- `Home.tsx` hero section

### Styling
Customize colors and themes in:
- `src/styles/theme.css` for Tailwind tokens
- Component-level Tailwind classes

## Production Deployment

Before deploying to production:

1. **Enable RLS** on Supabase tables
2. **Set up authentication** for admin panel
3. **Integrate email service** for real notifications
4. **Add error tracking** (Sentry, LogRocket)
5. **Optimize images** and enable lazy loading
6. **Configure custom domain**

## Support

For issues or questions:
- Check [DATABASE_SETUP.md](./DATABASE_SETUP.md)
- Review Supabase dashboard for errors
- Verify environment variables

## License

This project is built for demonstration and educational purposes.

---

Built with ❤️ using React, TypeScript, Tailwind CSS, and Supabase
# SWIFT-COURIER
