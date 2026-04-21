import { useState } from 'react';
import { supabase } from '../../../lib/supabase';
import { toast } from 'sonner';
import { Receipt } from './Receipt';
import { Package, User, MapPin, FileText } from 'lucide-react';

export function RegisterClient() {
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptData, setReceiptData] = useState<any>(null);
  const [formData, setFormData] = useState({
    sender_name: '',
    sender_email: '',
    sender_phone: '',
    sender_address: '',
    sender_city: '',
    sender_country: '',
    receiver_name: '',
    receiver_email: '',
    receiver_phone: '',
    receiver_address: '',
    receiver_city: '',
    receiver_country: '',
    package_weight: '',
    package_description: '',
  });

  const generateTrackingNumber = () => {
    const prefix = 'SC';
    const random = Math.floor(100000000 + Math.random() * 900000000);
    return `${prefix}${random}`;
  };

  const sendNotification = async (email: string, subject: string, message: string) => {
    console.log(`Sending notification to ${email}: ${subject} - ${message}`);
    toast.info(`Notification sent to ${email}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trackingNumber = generateTrackingNumber();
    const shipmentData = {
      tracking_number: trackingNumber,
      ...formData,
      status: 'pending',
      current_location: `${formData.sender_city}, ${formData.sender_country}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    try {
      const { data, error } = await supabase
        .from('shipments')
        .insert([shipmentData])
        .select()
        .single();

      if (error) throw error;

      await supabase.from('status_history').insert([
        {
          shipment_id: data.id,
          status: 'Pending',
          location: `${formData.sender_city}, ${formData.sender_country}`,
          timestamp: new Date().toISOString(),
          notes: 'Shipment registered and awaiting pickup',
        },
      ]);

      await sendNotification(
        formData.sender_email,
        'Shipment Registered Successfully',
        `Your shipment has been registered with tracking number: ${trackingNumber}. We will notify you when it's picked up.`
      );

      await sendNotification(
        formData.receiver_email,
        'Incoming Shipment Notification',
        `A package has been registered for delivery to you. Tracking number: ${trackingNumber}`
      );

      setReceiptData(data);
      setShowReceipt(true);
      toast.success('Client registered successfully!');

      setFormData({
        sender_name: '',
        sender_email: '',
        sender_phone: '',
        sender_address: '',
        sender_city: '',
        sender_country: '',
        receiver_name: '',
        receiver_email: '',
        receiver_phone: '',
        receiver_address: '',
        receiver_city: '',
        receiver_country: '',
        package_weight: '',
        package_description: '',
      });
    } catch (error: any) {
      console.error('Error registering client:', error);
      toast.error('Failed to register client. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (showReceipt && receiptData) {
    return <Receipt data={receiptData} onClose={() => setShowReceipt(false)} />;
  }

  return (
    <div>
      <h2 className="text-2xl mb-6">Register New Client</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-xl mb-4 flex items-center gap-2">
            <User className="w-6 h-6 text-blue-600" />
            Sender Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                name="sender_name"
                value={formData.sender_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email Address *</label>
              <input
                type="email"
                name="sender_email"
                value={formData.sender_email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone Number *</label>
              <input
                type="tel"
                name="sender_phone"
                value={formData.sender_phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Address *</label>
              <input
                type="text"
                name="sender_address"
                value={formData.sender_address}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="123 Main Street"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">City *</label>
              <input
                type="text"
                name="sender_city"
                value={formData.sender_city}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="New York"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Country *</label>
              <input
                type="text"
                name="sender_country"
                value={formData.sender_country}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="United States"
              />
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-xl mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-blue-600" />
            Receiver Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                name="receiver_name"
                value={formData.receiver_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Jane Smith"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email Address *</label>
              <input
                type="email"
                name="receiver_email"
                value={formData.receiver_email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="jane@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone Number *</label>
              <input
                type="tel"
                name="receiver_phone"
                value={formData.receiver_phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+44 20 7946 0958"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Address *</label>
              <input
                type="text"
                name="receiver_address"
                value={formData.receiver_address}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="456 Oak Avenue"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">City *</label>
              <input
                type="text"
                name="receiver_city"
                value={formData.receiver_city}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="London"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Country *</label>
              <input
                type="text"
                name="receiver_country"
                value={formData.receiver_country}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="United Kingdom"
              />
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-xl mb-4 flex items-center gap-2">
            <Package className="w-6 h-6 text-blue-600" />
            Package Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Weight (kg) *</label>
              <input
                type="text"
                name="package_weight"
                value={formData.package_weight}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="5.0"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Description *</label>
              <input
                type="text"
                name="package_description"
                value={formData.package_description}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Electronics, Documents, etc."
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <FileText className="w-5 h-5" />
          Register Client & Generate Receipt
        </button>
      </form>
    </div>
  );
}
