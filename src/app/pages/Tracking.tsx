// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Search,
//   Package,
//   MapPin,
//   CheckCircle,
//   Clock,
//   Truck,
// } from "lucide-react";
// import { supabase } from "../../lib/supabase";
// import { toast } from "sonner";

// export function Tracking() {
//   const [trackingNumber, setTrackingNumber] = useState("");
//   const [shipment, setShipment] = useState<any>(null);
//   const [loading, setLoading] = useState(false);
//   const [history, setHistory] = useState<any[]>([]);

//   const handleTrack = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!trackingNumber.trim()) {
//       toast.error("Please enter a tracking number");
//       return;
//     }

//     setLoading(true);
//     try {
//       const { data, error } = await supabase
//         .from("shipments")
//         .select("*")
//         .eq("tracking_number", trackingNumber.toUpperCase())
//         .single();

//       if (error || !data) {
//         toast.error("Shipment not found. Please check your tracking number.");
//         setShipment(null);
//         setHistory([]);
//       } else {
//         setShipment(data);
//         const { data: historyData } = await supabase
//           .from("status_history")
//           .select("*")
//           .eq("shipment_id", data.id)
//           .order("timestamp", { ascending: false });
//         setHistory(historyData || []);
//         toast.success("Shipment found!");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("An error occurred. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case "delivered":
//         return <CheckCircle className="w-8 h-8 text-green-600" />;
//       case "in_transit":
//         return <Truck className="w-8 h-8 text-blue-600" />;
//       case "on_hold":
//         return <Clock className="w-8 h-8 text-yellow-600" />;
//       default:
//         return <Package className="w-8 h-8 text-gray-600" />;
//     }
//   };

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "delivered":
//         return "bg-green-100 text-green-800";
//       case "in_transit":
//         return "bg-blue-100 text-blue-800";
//       case "on_hold":
//         return "bg-yellow-100 text-yellow-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   return (
//     <div className="min-h-screen pt-16">
//       <section
//         className="relative h-[400px] flex items-center justify-center text-white"
//         style={{
//           backgroundImage:
//             "url(https://images.unsplash.com/photo-1733195296321-b99d129b09cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBuZXR3b3JrJTIwd29ybGQlMjBtYXB8ZW58MXx8fHwxNzc2NzQ0MTk3fDA&ixlib=rb-4.1.0&q=80&w=1080)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 to-purple-900/80"></div>
//         <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-5xl md:text-6xl mb-4"
//           >
//             Track Your Shipment
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-xl mb-8"
//           >
//             Enter your tracking number to get real-time updates
//           </motion.p>

//           <motion.form
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             onSubmit={handleTrack}
//             className="flex gap-2 max-w-2xl mx-auto"
//           >
//             <input
//               type="text"
//               value={trackingNumber}
//               onChange={(e) => setTrackingNumber(e.target.value)}
//               placeholder="Enter tracking number (e.g., SC123456789)"
//               className="flex-1 px-6 py-4 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-white text-blue-600 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 disabled:opacity-50"
//             >
//               <Search className="w-5 h-5" />
//               {loading ? "Tracking..." : "Track"}
//             </button>
//           </motion.form>
//         </div>
//       </section>

//       {shipment && (
//         <section className="py-20">
//           <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="bg-white rounded-lg shadow-lg p-8 mb-8"
//             >
//               <div className="flex items-center justify-between mb-6">
//                 <div>
//                   <h2 className="text-3xl mb-2">
//                     Tracking #{shipment.tracking_number}
//                   </h2>
//                   <p className="text-gray-600">
//                     Package: {shipment.package_description}
//                   </p>
//                 </div>
//                 <div className="text-right">
//                   {getStatusIcon(shipment.status)}
//                   <span
//                     className={`inline-block px-4 py-2 rounded-full mt-2 font-semibold ${getStatusColor(shipment.status)}`}
//                   >
//                     {shipment.status.replace("_", " ").toUpperCase()}
//                   </span>
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-8 border-t pt-6">
//                 <div>
//                   <h3 className="font-semibold mb-4 flex items-center gap-2">
//                     <Package className="w-5 h-5 text-blue-600" />
//                     Sender Information
//                   </h3>
//                   <div className="space-y-2 text-gray-600">
//                     <p>
//                       <span className="font-medium">Name:</span>{" "}
//                       {shipment.sender_name}
//                     </p>
//                     <p>
//                       <span className="font-medium">Email:</span>{" "}
//                       {shipment.sender_email}
//                     </p>
//                     <p>
//                       <span className="font-medium">Phone:</span>{" "}
//                       {shipment.sender_phone}
//                     </p>
//                     <p>
//                       <span className="font-medium">Location:</span>{" "}
//                       {shipment.sender_city}, {shipment.sender_country}
//                     </p>
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="font-semibold mb-4 flex items-center gap-2">
//                     <MapPin className="w-5 h-5 text-blue-600" />
//                     Receiver Information
//                   </h3>
//                   <div className="space-y-2 text-gray-600">
//                     <p>
//                       <span className="font-medium">Name:</span>{" "}
//                       {shipment.receiver_name}
//                     </p>
//                     <p>
//                       <span className="font-medium">Email:</span>{" "}
//                       {shipment.receiver_email}
//                     </p>
//                     <p>
//                       <span className="font-medium">Phone:</span>{" "}
//                       {shipment.receiver_phone}
//                     </p>
//                     <p>
//                       <span className="font-medium">Location:</span>{" "}
//                       {shipment.receiver_city}, {shipment.receiver_country}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {shipment.current_location && (
//                 <div className="mt-6 p-4 bg-blue-50 rounded-lg">
//                   <p className="flex items-center gap-2">
//                     <MapPin className="w-5 h-5 text-blue-600" />
//                     <span className="font-medium">Current Location:</span>{" "}
//                     {shipment.current_location}
//                   </p>
//                 </div>
//               )}
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="bg-white rounded-lg shadow-lg p-8"
//             >
//               <h3 className="text-2xl mb-6">Shipment History</h3>
//               {history.length > 0 ? (
//                 <div className="space-y-6">
//                   {history.map((item, index) => (
//                     <div key={item.id} className="flex gap-4">
//                       <div className="flex flex-col items-center">
//                         <div
//                           className={`w-12 h-12 rounded-full flex items-center justify-center ${index === 0 ? "bg-blue-600" : "bg-gray-300"}`}
//                         >
//                           <CheckCircle className="w-6 h-6 text-white" />
//                         </div>
//                         {index !== history.length - 1 && (
//                           <div className="w-1 h-full bg-gray-300 mt-2"></div>
//                         )}
//                       </div>
//                       <div className="flex-1 pb-8">
//                         <p className="font-semibold text-lg">
//                           {item.status.replace("_", " ").toUpperCase()}
//                         </p>
//                         <p className="text-gray-600">{item.location}</p>
//                         <p className="text-sm text-gray-500 mt-1">
//                           {new Date(item.timestamp).toLocaleString()}
//                         </p>
//                         {item.notes && (
//                           <p className="text-gray-600 mt-2 italic">
//                             {item.notes}
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p className="text-gray-600">
//                   No history available for this shipment.
//                 </p>
//               )}
//             </motion.div>
//           </div>
//         </section>
//       )}

//       {!shipment && !loading && (
//         <section className="py-20">
//           <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <Package className="w-24 h-24 text-gray-300 mx-auto mb-6" />
//             <h3 className="text-2xl mb-4">
//               Enter a tracking number to get started
//             </h3>
//             <p className="text-gray-600">
//               Track your shipment in real-time and get detailed updates on its
//               journey
//             </p>
//           </div>
//         </section>
//       )}
//     </div>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Package,
  MapPin,
  CheckCircle,
  Clock,
  Truck,
  ArrowRight,
} from "lucide-react";
import { supabase } from "../../lib/supabase";
import { toast } from "sonner";

export function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [shipment, setShipment] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<any[]>([]);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      toast.error("Please enter a tracking number");
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("shipments")
        .select("*")
        .eq("tracking_number", trackingNumber.toUpperCase())
        .single();

      if (error || !data) {
        toast.error("Shipment not found. Please check your tracking number.");
        setShipment(null);
        setHistory([]);
      } else {
        setShipment(data);
        const { data: historyData } = await supabase
          .from("status_history")
          .select("*")
          .eq("shipment_id", data.id)
          .order("timestamp", { ascending: false });
        setHistory(historyData || []);
        toast.success("Shipment found!");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="w-8 h-8 text-emerald-500" />;
      case "in_transit":
        return <Truck className="w-8 h-8 text-orange-500" />;
      case "on_hold":
        return <Clock className="w-8 h-8 text-amber-500" />;
      default:
        return <Package className="w-8 h-8 text-slate-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-emerald-100 text-emerald-800";
      case "in_transit":
        return "bg-orange-100 text-orange-800";
      case "on_hold":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-slate-100 text-slate-800";
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HERO SECTION */}
      <section
        className="relative h-[450px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto mt-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1 rounded-full bg-orange-500 text-xs font-bold uppercase tracking-[0.2em] mb-6 "
          >
            Live Logistics
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            Track{" "}
            <span className="text-orange-500 italic font-normal">Parcel</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-10 font-light"
          >
            Enter your tracking number for real-time visibility
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onSubmit={handleTrack}
            className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto bg-white p-2 rounded-2xl shadow-2xl"
          >
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="e.g. SC123456789"
              className="flex-1 px-6 py-4 rounded-xl text-slate-900 focus:outline-none bg-slate-50 border border-transparent focus:border-orange-500/20 transition-all"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-orange-500/30"
            >
              {loading ? (
                "Verifying..."
              ) : (
                <>
                  <Search className="w-5 h-5" /> Track Now
                </>
              )}
            </button>
          </motion.form>
        </div>
      </section>

      {shipment && (
        <section className="py-24 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 p-8 md:p-12 mb-10 border border-slate-100"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 pb-10 border-b border-slate-100">
                <div>
                  <span className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-2 block">
                    Shipment Identified
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-950">
                    #{shipment.tracking_number}
                  </h2>
                  <p className="text-slate-500 mt-2 font-medium">
                    Content: {shipment.package_description}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  {getStatusIcon(shipment.status)}
                  <span
                    className={`inline-block px-5 py-2 rounded-full mt-4 font-bold text-xs uppercase tracking-tighter ${getStatusColor(shipment.status)}`}
                  >
                    {shipment.status.replace("_", " ")}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-lg font-black text-slate-950 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                      <Package className="w-4 h-4 text-orange-600" />
                    </div>
                    Origin Details
                  </h3>
                  <div className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <p className="text-slate-600 text-sm">
                      <span className="text-slate-400 font-medium block text-xs uppercase mb-1">
                        Sender
                      </span>{" "}
                      {shipment.sender_name}
                    </p>
                    <p className="text-slate-600 text-sm">
                      <span className="text-slate-400 font-medium block text-xs uppercase mb-1">
                        Contact
                      </span>{" "}
                      {shipment.sender_email}
                    </p>
                    <p className="text-slate-600 text-sm">
                      <span className="text-slate-400 font-medium block text-xs uppercase mb-1">
                        Location
                      </span>{" "}
                      {shipment.sender_city}, {shipment.sender_country}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-black text-slate-950 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-orange-600" />
                    </div>
                    Destination Details
                  </h3>
                  <div className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <p className="text-slate-600 text-sm">
                      <span className="text-slate-400 font-medium block text-xs uppercase mb-1">
                        Receiver
                      </span>{" "}
                      {shipment.receiver_name}
                    </p>
                    <p className="text-slate-600 text-sm">
                      <span className="text-slate-400 font-medium block text-xs uppercase mb-1">
                        Contact
                      </span>{" "}
                      {shipment.receiver_email}
                    </p>
                    <p className="text-slate-600 text-sm">
                      <span className="text-slate-400 font-medium block text-xs uppercase mb-1">
                        Location
                      </span>{" "}
                      {shipment.receiver_city}, {shipment.receiver_country}
                    </p>
                  </div>
                </div>
              </div>

              {shipment.current_location && (
                <div className="mt-10 p-6 bg-slate-950 rounded-2xl text-white flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center animate-pulse">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-widest">
                        Last Scanned At
                      </p>
                      <p className="text-lg font-bold">
                        {shipment.current_location}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="text-orange-500 hidden sm:block" />
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-slate-100"
            >
              <h3 className="text-2xl font-black text-slate-950 mb-10">
                Transit Log
              </h3>
              {history.length > 0 ? (
                <div className="relative space-y-0">
                  <div className="absolute left-[23px] top-2 bottom-0 w-0.5 bg-slate-100"></div>
                  {history.map((item, index) => (
                    <div
                      key={item.id}
                      className="relative flex gap-8 pb-12 last:pb-0"
                    >
                      <div className="relative z-10">
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                            index === 0
                              ? "bg-orange-500 shadow-lg shadow-orange-500/40"
                              : "bg-slate-100"
                          }`}
                        >
                          <CheckCircle
                            className={`w-6 h-6 ${index === 0 ? "text-white" : "text-slate-400"}`}
                          />
                        </div>
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                          <p
                            className={`font-black text-lg uppercase tracking-tight ${index === 0 ? "text-orange-600" : "text-slate-900"}`}
                          >
                            {item.status.replace("_", " ")}
                          </p>
                          <p className="text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-lg">
                            {new Date(item.timestamp).toLocaleString()}
                          </p>
                        </div>
                        <p className="text-slate-600 font-medium mb-2">
                          {item.location}
                        </p>
                        {item.notes && (
                          <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-orange-500">
                            <p className="text-slate-500 text-sm italic">
                              "{item.notes}"
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                  <p className="text-slate-400 font-medium">
                    History initializing for this parcel...
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {!shipment && !loading && (
        <section className="py-32">
          <div className="max-w-xl mx-auto px-4 text-center">
            <div className="w-24 h-24 bg-slate-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 border border-slate-100">
              <Package className="w-12 h-12 text-slate-300" />
            </div>
            <h3 className="text-3xl font-black text-slate-950 mb-4">
              Awaiting Input
            </h3>
            <p className="text-slate-500 leading-relaxed font-medium">
              Real-time telemetry becomes available as soon as you enter a valid
              manifest number.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
