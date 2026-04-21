# Database Setup Instructions

## Supabase Configuration

### Step 1: Access Supabase Dashboard

1. Go to https://supabase.com and log in
2. Select your project or create a new one
3. Your project URL is: `https://kctnghjhcyekkxpjmeih.supabase.co`

### Step 2: Create Database Tables

1. In your Supabase dashboard, navigate to **SQL Editor**
2. Copy and paste the contents of `setup-database.sql` file
3. Click **Run** to execute the SQL commands

This will create:
- `shipments` table - stores all shipment information
- `status_history` table - tracks status changes and location updates

### Step 3: Configure Row Level Security (Optional but Recommended)

For production use, you should enable Row Level Security (RLS) on your tables:

```sql
-- Enable RLS
ALTER TABLE shipments ENABLE ROW LEVEL SECURITY;
ALTER TABLE status_history ENABLE ROW LEVEL SECURITY;

-- Create policies (adjust based on your authentication needs)
-- For now, allow all operations (NOT recommended for production)
CREATE POLICY "Allow all operations on shipments" ON shipments FOR ALL USING (true);
CREATE POLICY "Allow all operations on status_history" ON status_history FOR ALL USING (true);
```

### Step 4: Verify Setup

Run this query to verify tables were created:

```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('shipments', 'status_history');
```

## Environment Variables

Your environment variables are already configured in `.env`:

```
VITE_SUPABASE_URL=https://kctnghjhcyekkxpjmeih.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_ftuoxUJXxVG_DbsQsqfoVQ_q-GUJvha
```

## Testing the Setup

1. Start the development server: `pnpm run dev` (already running)
2. Navigate to `/admin` in your browser
3. Try registering a new client
4. Check the Supabase dashboard to verify the data was inserted

## Troubleshooting

If you encounter errors:

1. **Connection errors**: Verify your Supabase credentials in `.env`
2. **Permission errors**: Check RLS policies in Supabase dashboard
3. **Table not found**: Ensure SQL setup script was executed successfully

## Features

### Admin Panel (`/admin`)
- **Register New Client**: Create shipment with sender/receiver details
- **Manage Shipments**: Update status, location, and notify clients
- **Receipt Generation**: Automatic receipt with "PAID" watermark

### Client Website
- **Home**: Hero section, stats, services, testimonials
- **About**: Company story, mission, values, team
- **Services**: Detailed service offerings
- **Tracking**: Real-time shipment tracking by tracking number
- **Contact**: Contact form and information

### Notifications
Automatic email notifications are sent for:
- New client registration (to both sender and receiver)
- Status updates
- Location changes

Note: Email notifications are currently logged to console. For production, integrate with an email service like SendGrid, Mailgun, or Supabase Edge Functions.
