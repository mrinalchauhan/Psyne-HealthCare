import React from 'react';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo Column */}
        <div>
          <h2 className="text-xl font-bold mb-4">Your Logo</h2>
          <Link href="/" className=" p-2 text-lg"><img src="/logo.jpg" alt="logo" width={100} height={70}></img></Link>
        </div>
        
        {/* Quick Links Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">Home</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">About</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Services</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        
        {/* Other Info Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Other Info</h3>
          <ul>
            <li className="mb-2">Privacy Policy</li>
            <li className="mb-2">Terms of Service</li>
            <li className="mb-2">FAQ</li>
          </ul>
        </div>
        
        {/* Address Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Address</h3>
          <address>
            123 Your Street,<br />
            Your City, YC 12345<br />
            Country
          </address>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
