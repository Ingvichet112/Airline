"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdLocalPhone } from "react-icons/md";
import { BiMessage, BiLocationPlus } from "react-icons/bi";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTrophy,
  FaStar,
  FaShieldAlt,
} from "react-icons/fa";

const Footer = () => {
  // 👉 Telegram Bot info (បញ្ចូល Token និង Chat ID របស់អ្នក)
  const BOT_TOKEN = "8554662482:AAFfPssf1HDQsJlfo27MoKMgeR5YpDYOeKU"; // ⚠️ កុំដាក់តម្លៃពិតក្នុង frontend
  const CHAT_ID = "1439729032";

  // 👉 useState សម្រាប់រក្សាទុកសារពីអ្នកប្រើ
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // 👉 Function ដើម្បីផ្ញើសារទៅ Telegram
  const sendMessageToTelegram = async (e) => {
    e.preventDefault();
    if (!message.trim()) return alert("សូមវាយសារមុននឹងផ្ញើ!");

    setLoading(true);
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      });

      alert("✅ ផ្ញើសាររួចរាល់!");
      setMessage("");
    } catch (err) {
      alert("❌ កំហុសក្នុងការផ្ញើសារ: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const footerSections = [
    {
      title: "Company",
      links: ["About Us", "Our Team", "Careers", "Press", "Blog"],
    },
    {
      title: "Services",
      links: [
        "Flight Booking",
        "Hotels",
        "Car Rentals",
        "Travel Insurance",
        "Visa Assistance",
      ],
    },
    {
      title: "Destinations",
      links: [
        "Siem Reap",
        "Kuala Lumpur",
        "Ho Chi Minh City",
        "Singapore",
        "Dili",
        "Jakata",
        "Yangon",
      ],
    },
    {
      title: "Support",
      links: [
        "Help Center",
        "Contact Us",
        "Booking Management",
        "Refund Policy",
        "Terms & Conditions",
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://web.facebook.com/fwtntdqccq",
      color: "#1877F2",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/?hl=en",
      color: "#E4405F",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "https://youtube.com/channel/UCy7R3Yc5ZLaYxbnfwUM-mJA?si=7eG9OjmtmRrplhgH",
      color: "#FF0000",
    },
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Newsletter + Telegram Message Section */}
      <div className="bg-gradient-to-r from-primary to-secondary py-12">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Updated with Best Deals
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about
              exclusive offers, new destinations, and travel tips.
            </p>

            {/* Telegram message input form */}
            <form
              onSubmit={sendMessageToTelegram}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto w-full px-4 sm:px-0"
            >
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="input input-bordered w-full bg-white/10 border-white/20 text-white placeholder-blue-200 px-4 py-2 rounded-md"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="btn btn-secondary w-full sm:w-auto px-8 py-2 rounded-md"
              >
                {loading ? "Send..." : "Subscribe"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Rest of your footer (unchanged) */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <img
                      src="/airplain.png"
                      alt="Logo"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <h2 className="text-lg font-bold">AirLine</h2>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Your trusted partner for exploring the Kingdom of Wonder. We
                  make travel dreams come true with exceptional service and
                  unbeatable prices.
                </p>

                <div className="space-y-2 text-gray-400">
                  <p className="flex items-center">
                    <BiLocationPlus className="w-5 h-5 mr-2" />
                    123 Sisowath Quay, Phnom Penh, Cambodia
                  </p>
                  <p className="flex items-center">
                    <MdLocalPhone className="w-5 h-5 mr-2" /> +855 23 123 456
                  </p>
                  <p className="flex items-center">
                    <BiMessage className="w-6 h-5 mr-2" /> info@airline.com
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-primary transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Social Links & Awards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-gray-800"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 text-center">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4 justify-center">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300"
                      title={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="text-center md:text-right">
                <h4 className="text-lg font-semibold mb-4">
                  Awards & Certifications
                </h4>
                <div className="flex flex-wrap justify-center md:justify-end gap-4">
                  {[FaTrophy, FaStar, FaShieldAlt].map((Icon, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-sm text-gray-400 bg-gray-800 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700 hover:shadow-lg transition-all duration-300"
                    >
                      <Icon className="w-4 h-4 text-yellow-400" />
                      Award Example
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} AirLine. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
