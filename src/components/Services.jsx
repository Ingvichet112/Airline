"use client";
import { motion } from "framer-motion";
import {
  FaPlane,
  FaHotel,
  FaShieldAlt,
  FaCar,
  FaMapSigns,
  FaPassport,
  FaSearch,
  FaBalanceScale,
  FaCreditCard,
  FaLuggageCart,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Flight Booking",
      description: "Book domestic and international flights with ease",
      icon: <FaPlane />,
      features: [
        "Best Price Guarantee",
        "Instant Confirmation",
        "Flexible Dates",
        "24/7 Support",
      ],
    },
    {
      title: "Hotel Reservations",
      description: "Find and book the perfect accommodation",
      icon: <FaHotel />,
      features: [
        "Luxury Hotels",
        "Budget Options",
        "Free Cancellation",
        "Local Recommendations",
      ],
    },
    {
      title: "Travel Insurance",
      description: "Protect your journey with comprehensive coverage",
      icon: <FaShieldAlt />,
      features: [
        "Medical Coverage",
        "Trip Cancellation",
        "Baggage Protection",
        "Emergency Assistance",
      ],
    },
    {
      title: "Car Rentals",
      description: "Rent a car for ultimate travel freedom",
      icon: <FaCar />,
      features: [
        "Wide Selection",
        "Competitive Rates",
        "GPS Navigation",
        "Full Insurance",
      ],
    },
    {
      title: "Tour Packages",
      description: "Curated experiences and guided tours",
      icon: <FaMapSigns />,
      features: [
        "Expert Guides",
        "Cultural Experiences",
        "Group Discounts",
        "Custom Itineraries",
      ],
    },
    {
      title: "Visa Assistance",
      description: "Get help with visa applications and requirements",
      icon: <FaPassport />,
      features: [
        "Document Review",
        "Application Support",
        "Fast Processing",
        "Expert Advice",
      ],
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Search",
      description: "Enter your travel details and preferences",
      icon: <FaSearch />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      delay: 0,
    },
    {
      step: "2",
      title: "Compare",
      description: "Browse and compare available options",
      icon: <FaBalanceScale />,
      color: "from-blue-500 to-purple-500",
      bgColor: "bg-blue-50",
      delay: 0.2,
    },
    {
      step: "3",
      title: "Book",
      description: "Secure your booking with instant confirmation",
      icon: <FaCreditCard />,
      color: "from-green-500 to-blue-500",
      bgColor: "bg-green-50",
      delay: 0.4,
    },
    {
      step: "4",
      title: "Travel",
      description: "Enjoy your amazing Cambodia adventure",
      icon: <FaLuggageCart />,
      color: "from-green-500 to-blue-500",
      bgColor: "bg-orange-50",
      delay: 0.6,
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            Complete Travel Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
            Everything you need for your perfect Cambodia adventure, all in one
            place
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 h-full">
                <div className="text-3xl sm:text-4xl mb-5 group-hover:scale-110 transition-transform duration-300 text-gray-800">
                  {service.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base mb-5 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-xs sm:text-sm text-gray-600"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn btn-outline btn-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 text-sm py-2"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20"
        >
          <div className="text-center mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3"
            >
              How It Works
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto"
            >
              Simple steps to book your perfect trip
            </motion.p>
          </div>

          {/* Desktop Process Steps */}
          <div className="hidden md:block relative">
            {/* Animated Progress Line */}
            <div className="absolute top-14 left-0 right-0 h-1 bg-gray-200 rounded-full">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 2, delay: 0.5 }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-purple-500  to-orange-500 rounded-full"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {processSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: item.delay,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="text-center group cursor-pointer"
                >
                  {/* Step Circle with Icon */}
                  <div className="relative mb-5">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white text-xl sm:text-2xl mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                    >
                      {item.icon}
                    </motion.div>

                    {/* Step Number Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: item.delay + 0.3, type: "spring" }}
                      viewport={{ once: true }}
                      className="absolute -top-2 -right-2 w-7 h-7 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-700 shadow-md"
                    >
                      {item.step}
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`${item.bgColor} rounded-2xl p-5 shadow-md group-hover:shadow-lg transition-all duration-300`}
                  >
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>

                  {/* Floating Particles Effect */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${10 + i * 20}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Process Steps */}
          <div className="md:hidden space-y-6">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white text-lg shadow-lg flex-shrink-0`}
                >
                  {item.icon}
                </motion.div>

                <div
                  className={`${item.bgColor} rounded-xl p-4 flex-1 shadow-md group-hover:shadow-lg transition-all duration-300`}
                >
                  <h4 className="text-base font-bold text-gray-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-xs">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.a
              href="#"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(102, 126, 234, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block btn  btn-primary px-6 py-2 text-base font-semibold bg-gradient-to-r from-primary to-secondary border-none shadow-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white"
            >
              Start Your Journey Now
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
