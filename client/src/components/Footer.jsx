import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500">
      <div className="flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor border-b">
        <div>
          <img src={assets.logo} alt="logo" className="h-15" />
          <p className="max-w-80 mt-3">
            Premium car rental service with a wide selection of luxury and
            everyday vehicles for all your driving needs.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <a href="#" aria-label="Facebook">
              <img src={assets.facebook_logo} className="w-5 h-5" alt="" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={assets.instagram_logo} className="w-5 h-5" alt="" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src={assets.twitter_logo} className="w-5 h-5" alt="" />
            </a>
            <a href="#" aria-label="Email">
              <img src={assets.gmail_logo} className="w-5 h-5" alt="" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">
            Quick Links
          </h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cars">Browse Cars</Link>
            </li>
            <li>
              <Link to="/owner/add-car">List Your Car</Link>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">
            Resources
          </h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Terms & Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Insurance</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">
            Contact
          </h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li>1234 Luxury Driver</li>
            <li>San Francisco, CA 94107</li>
            <li>+1 278 9345607</li>
            <li>Info@Autovia.com</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>© {new Date().getFullYear()} Autovia. All rights reserved.</p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>|</li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>|</li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
