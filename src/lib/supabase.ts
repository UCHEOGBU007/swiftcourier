import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl) {
  throw new Error(
    "Missing VITE_SUPABASE_URL environment variable. Please check your .env file.",
  );
}

if (!supabaseKey) {
  throw new Error(
    "Missing VITE_SUPABASE_PUBLISHABLE_KEY environment variable. Please check your .env file.",
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface ClientRegistration {
  id?: string;
  tracking_number: string;
  sender_name: string;
  sender_email: string;
  sender_phone: string;
  sender_address: string;
  sender_city: string;
  sender_country: string;
  receiver_name: string;
  receiver_email: string;
  receiver_phone: string;
  receiver_address: string;
  receiver_city: string;
  receiver_country: string;
  package_weight: string;
  package_description: string;
  status: "pending" | "on_hold" | "in_transit" | "delivered";
  current_location?: string;
  created_at?: string;
  updated_at?: string;
}

export interface StatusHistory {
  id?: string;
  shipment_id: string;
  status: string;
  location: string;
  timestamp: string;
  notes?: string;
}
