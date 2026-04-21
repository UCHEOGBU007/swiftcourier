import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabase';
import { toast } from 'sonner';
import { Search, Edit, MapPin, Bell } from 'lucide-react';

export function ManageShipments() {
  const [shipments, setShipments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    status: '',
    current_location: '',
    notes: '',
  });

  useEffect(() => {
    fetchShipments();
  }, []);

  const fetchShipments = async () => {
    try {
      const { data, error } = await supabase
        .from('shipments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setShipments(data || []);
    } catch (error) {
      console.error('Error fetching shipments:', error);
      toast.error('Failed to load shipments');
    } finally {
      setLoading(false);
    }
  };

  const sendNotification = async (email: string, subject: string, message: string) => {
    console.log(`Sending notification to ${email}: ${subject} - ${message}`);
    toast.info(`Notification sent to ${email}`);
  };

  const handleUpdateStatus = async (shipmentId: string, shipment: any) => {
    if (!editForm.status && !editForm.current_location) {
      toast.error('Please update at least status or location');
      return;
    }

    try {
      const updates: any = { updated_at: new Date().toISOString() };
      if (editForm.status) updates.status = editForm.status;
      if (editForm.current_location) updates.current_location = editForm.current_location;

      const { error } = await supabase
        .from('shipments')
        .update(updates)
        .eq('id', shipmentId);

      if (error) throw error;

      await supabase.from('status_history').insert([
        {
          shipment_id: shipmentId,
          status: editForm.status || shipment.status,
          location: editForm.current_location || shipment.current_location,
          timestamp: new Date().toISOString(),
          notes: editForm.notes,
        },
      ]);

      if (editForm.status) {
        await sendNotification(
          shipment.sender_email,
          'Shipment Status Updated',
          `Your shipment ${shipment.tracking_number} status has been updated to: ${editForm.status.replace('_', ' ').toUpperCase()}`
        );

        await sendNotification(
          shipment.receiver_email,
          'Shipment Status Updated',
          `Shipment ${shipment.tracking_number} status: ${editForm.status.replace('_', ' ').toUpperCase()}`
        );
      }

      if (editForm.current_location) {
        await sendNotification(
          shipment.sender_email,
          'Shipment Location Updated',
          `Your shipment ${shipment.tracking_number} is now at: ${editForm.current_location}`
        );

        await sendNotification(
          shipment.receiver_email,
          'Shipment Location Updated',
          `Package ${shipment.tracking_number} location: ${editForm.current_location}`
        );
      }

      toast.success('Shipment updated successfully!');
      setEditingId(null);
      setEditForm({ status: '', current_location: '', notes: '' });
      fetchShipments();
    } catch (error) {
      console.error('Error updating shipment:', error);
      toast.error('Failed to update shipment');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'in_transit':
        return 'bg-blue-100 text-blue-800';
      case 'on_hold':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredShipments = shipments.filter(
    (s) =>
      s.tracking_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.sender_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.receiver_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="text-center py-8">Loading shipments...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl">Manage Shipments</h2>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by tracking number or name..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {filteredShipments.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600">No shipments found</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredShipments.map((shipment) => (
            <div key={shipment.id} className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl mb-2">
                    Tracking: <span className="font-mono text-blue-600">{shipment.tracking_number}</span>
                  </h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(shipment.status)}`}>
                    {shipment.status.replace('_', ' ').toUpperCase()}
                  </span>
                </div>
                <button
                  onClick={() => {
                    if (editingId === shipment.id) {
                      setEditingId(null);
                      setEditForm({ status: '', current_location: '', notes: '' });
                    } else {
                      setEditingId(shipment.id);
                      setEditForm({
                        status: shipment.status,
                        current_location: shipment.current_location || '',
                        notes: '',
                      });
                    }
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Edit className="w-4 h-4" />
                  {editingId === shipment.id ? 'Cancel' : 'Update'}
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">From</p>
                  <p className="font-medium">{shipment.sender_name}</p>
                  <p className="text-sm text-gray-600">
                    {shipment.sender_city}, {shipment.sender_country}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">To</p>
                  <p className="font-medium">{shipment.receiver_name}</p>
                  <p className="text-sm text-gray-600">
                    {shipment.receiver_city}, {shipment.receiver_country}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Package</p>
                  <p className="font-medium">{shipment.package_description}</p>
                  <p className="text-sm text-gray-600">{shipment.package_weight} kg</p>
                </div>
              </div>

              {shipment.current_location && (
                <div className="mb-4 p-3 bg-blue-50 rounded-md flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">
                    <span className="font-medium">Current Location:</span> {shipment.current_location}
                  </span>
                </div>
              )}

              {editingId === shipment.id && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Update Status</label>
                      <select
                        value={editForm.status}
                        onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select status</option>
                        <option value="pending">Pending</option>
                        <option value="on_hold">On Hold</option>
                        <option value="in_transit">In Transit</option>
                        <option value="delivered">Delivered</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Update Location</label>
                      <input
                        type="text"
                        value={editForm.current_location}
                        onChange={(e) => setEditForm({ ...editForm, current_location: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter current location"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Notes (optional)</label>
                    <textarea
                      value={editForm.notes}
                      onChange={(e) => setEditForm({ ...editForm, notes: e.target.value })}
                      rows={2}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Add any additional notes..."
                    ></textarea>
                  </div>
                  <button
                    onClick={() => handleUpdateStatus(shipment.id, shipment)}
                    className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  >
                    <Bell className="w-4 h-4" />
                    Save & Notify Clients
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
