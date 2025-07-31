"use client";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 3,
      comment:
        "Air Cambodia made our trip to Angkor Wat absolutely magical. The booking process was seamless, and their customer service was exceptional. Highly recommended!",
      avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      name: "David Chen",
      location: "Singapore",
      rating: 5,
      comment:
        "Best flight booking experience I've had. Great prices, easy booking, and the flight was comfortable. Will definitely use Air Cambodia again for my next trip.",
      avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      name: "Emma Wilson",
      location: "London, UK",
      rating: 5,
      comment:
        "The customer support team helped me change my flight dates without any hassle. Professional service and competitive prices. Thank you Air Cambodia!",
      avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      name: "Michael Rodriguez",
      location: "Madrid, Spain",
      rating: 5,
      comment:
        "Fantastic service from start to finish. The website is user-friendly, prices are competitive, and the flight was on time. Couldn't ask for more!",
      avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      name: "Vincenzo Cassano",
      location: "Seoul, South Korea",
      rating: 4,
      comment:
        "Air Cambodia helped us plan our entire Cambodia itinerary. From flights to hotels, everything was perfectly organized. Amazing experience!",
      avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      name: "James Thompson",
      location: "Sydney, Australia",
      rating: 5,
      comment:
        "Professional, reliable, and affordable. Air Cambodia exceeded our expectations. The trip to Cambodia was unforgettable thanks to their excellent service.",
      avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from thousands of satisfied
            customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full border border-gray-100">
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.comment}"
                </p>

                {/* User Info */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Trusted by Travelers Worldwide
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { metric: "4.9/5", label: "Average Rating" },
                { metric: "50K+", label: "Reviews" },
                { metric: "99.8%", label: "Booking Success" },
                { metric: "24/7", label: "Customer Support" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {item.metric}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 pt-8 border-t border-gray-200"
            >
              <p className="text-gray-600 mb-4">
                Join thousands of satisfied travelers
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary btn-lg px-8"
              >
                Book Your Flight Today
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
