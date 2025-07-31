"use client";
import { motion } from "framer-motion";
import {
  FaPlane,
  FaShieldAlt,
  FaHeadset,
  FaBullseye,
  FaCreditCard,
  FaMobileAlt,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaPlane />,
      title: "Best Price Guarantee",
      description:
        "We guarantee the lowest prices on flights to Cambodia. Find a lower price and we'll match it.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Booking",
      description:
        "Your personal and payment information is protected with bank-level security encryption.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      description:
        "Our customer service team is available around the clock to assist with your travel needs.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <FaBullseye />,
      title: "Easy Booking",
      description:
        "Book your flight in just a few clicks with our user-friendly interface and instant confirmation.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <FaCreditCard />,
      title: "Flexible Payment",
      description:
        "Multiple payment options including credit cards, PayPal, and local payment methods.",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App",
      description:
        "Manage your bookings on the go with our mobile app. Check-in, get boarding passes, and more.",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section id="features" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            Why Choose Air Cambodia?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
            Experience the difference with our premium services and commitment
            to making your journey memorable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 h-full border border-gray-100">
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-white text-2xl sm:text-3xl mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 sm:p-8 text-white"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Trusted by Millions
            </h3>
            <p className="text-blue-100 text-sm sm:text-base">
              Join the community of satisfied travelers
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { number: "2.5M+", label: "Bookings Made" },
              { number: "98%", label: "Customer Satisfaction" },
              { number: "150+", label: "Destinations" },
              { number: "50+", label: "Airline Partners" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-xl sm:text-2xl font-bold mb-1">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-xs sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#search"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(102, 126, 234, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block btn btn-primary px-8 py-2 text-base font-semibold bg-gradient-to-r from-primary to-secondary border-none shadow-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white"
          >
            Start Your Journey Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
