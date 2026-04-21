-- Create shipments table
CREATE TABLE IF NOT EXISTS shipments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  tracking_number TEXT UNIQUE NOT NULL,
  sender_name TEXT NOT NULL,
  sender_email TEXT NOT NULL,
  sender_phone TEXT NOT NULL,
  sender_address TEXT NOT NULL,
  sender_city TEXT NOT NULL,
  sender_country TEXT NOT NULL,
  receiver_name TEXT NOT NULL,
  receiver_email TEXT NOT NULL,
  receiver_phone TEXT NOT NULL,
  receiver_address TEXT NOT NULL,
  receiver_city TEXT NOT NULL,
  receiver_country TEXT NOT NULL,
  package_weight TEXT NOT NULL,
  package_description TEXT NOT NULL,
  status TEXT CHECK (status IN ('pending', 'on_hold', 'in_transit', 'delivered')) DEFAULT 'pending',
  current_location TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security on shipments table
ALTER TABLE shipments ENABLE ROW LEVEL SECURITY;

-- Create status_history table
CREATE TABLE IF NOT EXISTS status_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  shipment_id UUID REFERENCES shipments(id) ON DELETE CASCADE,
  status TEXT NOT NULL,
  location TEXT NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  notes TEXT
);

-- Enable Row Level Security on status_history table
ALTER TABLE status_history ENABLE ROW LEVEL SECURITY location TEXT NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  notes TEXT
);

-- Enable Row Level Security on status_history table
ALTER TABLE status_history ENABLE ROW LEVEL SECURITY;

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_shipments_tracking ON shipments(tracking_number);
CREATE INDEX IF NOT EXISTS idx_shipments_status ON shipments(status);
CREATE INDEX IF NOT EXISTS idx_status_history_shipment ON status_history(shipment_id);
