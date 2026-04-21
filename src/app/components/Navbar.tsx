// import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Package, Menu, X } from 'lucide-react';

// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="bg-white shadow-md fixed w-full top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <Link to="/" className="flex items-center gap-2">
//             <Package className="w-8 h-8 text-blue-600" />
//             <span className="font-bold text-xl text-gray-900">SwiftCourier</span>
//           </Link>

//           <div className="hidden md:flex items-center gap-8">
//             <Link
//               to="/"
//               className={`${isActive('/') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition-colors`}
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className={`${isActive('/about') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition-colors`}
//             >
//               About
//             </Link>
//             <Link
//               to="/services"
//               className={`${isActive('/services') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition-colors`}
//             >
//               Services
//             </Link>
//             <Link
//               to="/tracking"
//               className={`${isActive('/tracking') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition-colors`}
//             >
//               Track Shipment
//             </Link>
//             <Link
//               to="/contact"
//               className={`${isActive('/contact') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition-colors`}
//             >
//               Contact
//             </Link>
//             <Link
//               to="/admin"
//               className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
//             >
//               Admin
//             </Link>
//           </div>

//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-gray-700"
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden bg-white border-t">
//           <div className="px-4 py-4 space-y-3">
//             <Link to="/" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
//             <Link to="/about" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
//             <Link to="/services" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Services</Link>
//             <Link to="/tracking" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Track Shipment</Link>
//             <Link to="/contact" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
//             <Link to="/admin" className="block bg-blue-600 text-white px-4 py-2 rounded-md text-center" onClick={() => setIsOpen(false)}>Admin</Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Package, Menu, X, ShieldCheck } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for a more premium feel
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Track Shipment", path: "/tracking" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-md shadow-2xl py-3"
          : "bg-slate-950 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-orange-500 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-orange-500/20">
              <Package className="w-6 h-6 text-white" />
            </div>
            <span className="font-black text-2xl text-white tracking-tighter uppercase">
              Swift<span className="text-orange-500">Courier</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-extrabold uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${
                    isActive(link.path)
                      ? "text-orange-500"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            <div className="h-6 w-px bg-slate-800 mx-2" />

            <Link
              to="/admin"
              className="flex items-center gap-2 bg-white/5 hover:bg-orange-500 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all border border-white/10 hover:border-orange-500 shadow-xl"
            >
              <ShieldCheck className="w-4 h-4" />
              Terminal
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-orange-500 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-950 border-t border-slate-900 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-lg font-bold uppercase tracking-widest ${
                  isActive(link.path) ? "text-orange-500" : "text-slate-300"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admin"
              className="flex items-center justify-center gap-3 bg-orange-500 text-white w-full py-4 rounded-2xl font-black uppercase tracking-[0.2em]"
              onClick={() => setIsOpen(false)}
            >
              <ShieldCheck className="w-5 h-5" />
              Admin Portal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
