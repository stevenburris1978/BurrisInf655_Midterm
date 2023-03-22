import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <h1>Get Connected with our network</h1>
      <div>
        <FaFacebook size={30} />
        <FaInstagram size={30} />
        <FaTwitter size={30} />
      </div>
    </div>
  );
}