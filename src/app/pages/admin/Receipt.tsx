import { useRef } from 'react';
import { X, Download, Package } from 'lucide-react';

interface ReceiptProps {
  data: any;
  onClose: () => void;
}

export function Receipt({ data, onClose }: ReceiptProps) {
  const receiptRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl">Shipment Receipt</h2>
          <div className="flex gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              Print/Save
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div ref={receiptRef} className="p-8 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <div className="transform rotate-[-45deg]">
              <p className="text-8xl font-bold text-green-600">PAID</p>
            </div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8 border-b pb-6">
              <div className="flex justify-center mb-4">
                <Package className="w-16 h-16 text-blue-600" />
              </div>
              <h1 className="text-3xl mb-2">SwiftCourier</h1>
              <p className="text-gray-600">International Logistics & Delivery Services</p>
              <p className="text-sm text-gray-500 mt-2">123 Logistics Ave, Shipping District, NY 10001</p>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-blue-600">Receipt Information</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Receipt #:</span> RCP-{data.id}</p>
                  <p><span className="font-medium">Tracking #:</span> {data.tracking_number}</p>
                  <p><span className="font-medium">Date:</span> {new Date(data.created_at).toLocaleDateString()}</p>
                  <p><span className="font-medium">Time:</span> {new Date(data.created_at).toLocaleTimeString()}</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-blue-600">Status</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Current Status:</span> {data.status.replace('_', ' ').toUpperCase()}</p>
                  <p><span className="font-medium">Payment Status:</span> <span className="text-green-600 font-semibold">PAID</span></p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="border rounded-lg p-4 bg-gray-50">
                <h3 className="font-semibold text-lg mb-3">Sender Details</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Name:</span> {data.sender_name}</p>
                  <p><span className="font-medium">Email:</span> {data.sender_email}</p>
                  <p><span className="font-medium">Phone:</span> {data.sender_phone}</p>
                  <p><span className="font-medium">Address:</span> {data.sender_address}</p>
                  <p><span className="font-medium">City:</span> {data.sender_city}</p>
                  <p><span className="font-medium">Country:</span> {data.sender_country}</p>
                </div>
              </div>

              <div className="border rounded-lg p-4 bg-gray-50">
                <h3 className="font-semibold text-lg mb-3">Receiver Details</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Name:</span> {data.receiver_name}</p>
                  <p><span className="font-medium">Email:</span> {data.receiver_email}</p>
                  <p><span className="font-medium">Phone:</span> {data.receiver_phone}</p>
                  <p><span className="font-medium">Address:</span> {data.receiver_address}</p>
                  <p><span className="font-medium">City:</span> {data.receiver_city}</p>
                  <p><span className="font-medium">Country:</span> {data.receiver_country}</p>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4 mb-8 bg-blue-50">
              <h3 className="font-semibold text-lg mb-3">Package Information</h3>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Description:</span> {data.package_description}</p>
                <p><span className="font-medium">Weight:</span> {data.package_weight} kg</p>
                {data.current_location && (
                  <p><span className="font-medium">Current Location:</span> {data.current_location}</p>
                )}
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="text-center text-sm text-gray-600 space-y-2">
                <p className="font-semibold text-green-600 text-lg mb-4">✓ Payment Confirmed</p>
                <p>This is an official receipt for your shipment registration.</p>
                <p>For tracking and support, visit www.swiftcourier.com or call +1 (555) 123-4567</p>
                <p className="mt-4 font-medium">Thank you for choosing SwiftCourier!</p>
              </div>
            </div>

            <div className="mt-8 text-center text-xs text-gray-500">
              <p>This receipt is computer-generated and valid without signature.</p>
              <p className="mt-1">© {new Date().getFullYear()} SwiftCourier. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          ${receiptRef.current ? `#${receiptRef.current.id}` : '.receipt-content'},
          ${receiptRef.current ? `#${receiptRef.current.id}` : '.receipt-content'} * {
            visibility: visible;
          }
          ${receiptRef.current ? `#${receiptRef.current.id}` : '.receipt-content'} {
            position: absolute;
            left: 0;
            top: 0;
          }
        }
      `}</style>
    </div>
  );
}
