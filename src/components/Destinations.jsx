"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbWorldCancel } from "react-icons/tb";
import {
  FaGlobeAsia,
  FaUmbrellaBeach,
  FaLandmark,
  FaWater,
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkedAlt,
  FaCompass,
  FaInfoCircle,
} from "react-icons/fa";

const Destinations = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef(null);

  const mainDestinations = [
    {
      name: "Siem Reap",
      description: "Cambodia's ancient city and gateway to Angkor Wat",
      image:
        "https://cdn.pixabay.com/photo/2017/12/31/04/47/cambodia-3051557_1280.jpg",
      price: "From $159",
      highlights: [
        "Angkor Wat",
        "Bayon Temple",
        "Pub Street",
        "Local Street Food",
      ],
      type: "international",
      country: "Cambodia",
    },
    {
      name: "Kuala Lumpur",
      description: "Malaysia's capital with towering skyscrapers and culture",
      image:
        "https://digital.ihg.com/is/image/ihg/crowne-plaza-kuala-lumpur-9304098596-4x3",
      price: "From $189",
      highlights: [
        "Petronas Towers",
        "Batu Caves",
        "Central Market",
        "Night Hawker Stalls",
      ],
      type: "international",
      country: "Malaysia",
    },
    {
      name: "Ho Chi Minh City",
      description: "Vietnam's dynamic southern metropolis",
      image:
        "https://image.vietnamlawmagazine.vn/MediaUpload/Org/2024/01/01/101238-1.jpg",
      price: "From $159",
      highlights: [
        "Ben Thanh Market",
        "Cu Chi Tunnels",
        "Notre Dame Cathedral",
        "Mekong Delta",
      ],
      type: "international",
      country: "Vietnam",
    },
    {
      name: "Singapore",
      description: "Modern city-state with gardens and cuisine",
      image:
        "https://images.prismic.io/travelfika/Z-DilndAxsiBvx9H_Singapore3.jpg?auto=format,compress",
      price: "From $249",
      highlights: [
        "Marina Bay Sands",
        "Gardens by the Bay",
        "Sentosa Island",
        "Hawker Centers",
      ],
      type: "international",
      country: "Singapore",
    },
    {
      name: "Dili",
      description:
        "Timor-Leste's coastal capital with scenic beaches and cultural heritage",
      image:
        "https://ik.imagekit.io/tvlk/loc-asset/gNr3hLh55ZCkPJisyxFK-v9MmzxPu57ZRVI+10VZ2S4b1PNW4T++cbA6yK4gzhAhs9o2HLZ9vs7gy3rpcIU+oKi5EygzQLRjTUv7fRblEVA=/images/1695196944262-1000x563-FIT_AND_TRIM-15961922ecd80a1d54c043421e27135f.jpeg?_src=imagekit&tr=h-250,q-40,w-519",
      price: "From $149",
      highlights: [
        "Cristo Rei of Dili",
        "Atauro Island",
        "Tais Market",
        "Local Timorese Cuisine",
      ],
      type: "international",
      country: "Timor-Leste",
    },
    {
      name: "Jakarta",
      description: "Indonesia's vibrant capital and cultural hub",
      image:
        "https://tz-mag-media.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/01/11165620/WP-Photos-Andrea-800-x-450-px.png",
      price: "From $169",
      highlights: [
        "National Monument",
        "Old Town",
        "Grand Indonesia",
        "Thousand Islands",
      ],
      type: "international",
      country: "Indonesia",
    },
  ];

  const additionalDestinations = [
    {
      name: "Vientiane",
      description: "Laos' peaceful capital along the Mekong River",
      image:
        "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_728/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/pysdmdsmc3nfxjbmsn5q/VientianeFull-day7Must-SeeHighlightswithTicketGuidedTour.jpg",
      price: "From $149",
      highlights: [
        "Pha That Luang",
        "Patuxai Monument",
        "Buddha Park",
        "Night Market",
      ],
      type: "regional",
      country: "Laos",
    },
    {
      name: "Yangon",
      description: "Myanmar's former capital with golden pagodas",
      image:
        "https://www.eyeonasia.gov.sg/images/asean-countries/Yangon%20snapshot%20iso.jpg",
      price: "From $139",
      highlights: [
        "Shwedagon Pagoda",
        "Bogyoke Market",
        "Colonial Architecture",
        "Circular Train",
      ],
      type: "regional",
      country: "Myanmar",
    },
    {
      name: "Manila",
      description: "Philippines' bustling capital with Spanish heritage",
      image:
        "https://assets.executivecentre.com/assets/Article-GuideToManila-CityTEC.jpeg",
      price: "From $219",
      highlights: ["Intramuros", "Rizal Park", "Manila Bay", "Chinatown"],
      type: "regional",
      country: "Philippines",
    },
    {
      name: "Bali",
      description: "Indonesia's paradise island with temples and beaches",
      image: "https://www.pelago.com/img/destinations/bali/0619-0941_bali.jpg",
      price: "From $229",
      highlights: [
        "Ubud Rice Terraces",
        "Tanah Lot Temple",
        "Seminyak Beach",
        "Mount Batur",
      ],
      type: "tropical",
      country: "Indonesia",
    },
    {
      name: "Da Nang",
      description: "Vietnam's coastal city with beaches and mountains",
      image: "https://danangfantasticity.com/wp-content/uploads/2025/03/1-cau-rong-phun-lua-va-nuoc-vao-moi-thu-6-7-cn-hang-tuan-tai-da-nang.jpg",
      price: "From $159",
      highlights: [
        "Golden Bridge",
        "My Khe Beach",
        "Marble Mountains",
        "Hoi An Ancient Town",
      ],
      type: "coastal",
      country: "Vietnam",
    },
    {
      name: "Cebu",
      description: "Philippines' Queen City with history and beaches",
      image:
        "https://madmonkey-wp.sgp1.cdn.digitaloceanspaces.com/wp-content/uploads/2018/10/Mad-Monkey-Hostels-The-Top-10-Reasons-to-Visit-Cebu-Philippines.jpg",
      price: "From $189",
      highlights: [
        "Magellan's Cross",
        "Temple of Leah",
        "Sirao Flower Garden",
        "Mactan Island",
      ],
      type: "tropical",
      country: "Philippines",
    },
    {
      name: "Penang",
      description: "Malaysia's food paradise with UNESCO heritage",
      image: "https://liveinmalaysia.com/wp-content/uploads/2020/12/Penang.jpg",
      price: "From $179",
      highlights: ["George Town", "Penang Hill", "Street Art", "Hawker Food"],
      type: "cultural",
      country: "Malaysia",
    },
  ];

  const allDestinations = [...mainDestinations, ...additionalDestinations];
  const displayedDestinations = showAll ? allDestinations : mainDestinations;

  // Responsive cards per slide
  const getCardsPerSlide = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1; // Mobile: 1 card
      if (window.innerWidth < 1024) return 2; // Tablet: 2 cards
      return 3; // Desktop: 3 cards
    }
    return 3;
  };

  const [cardsPerSlide, setCardsPerSlide] = useState(getCardsPerSlide());
  const [isMobile, setIsMobile] = useState(false);

  // Update cards per slide on window resize
  useEffect(() => {
    const handleResize = () => {
      const newCardsPerSlide = getCardsPerSlide();
      setCardsPerSlide(newCardsPerSlide);
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(displayedDestinations.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Touch/Swipe handlers for mobile
  const handleTouchStart = (e) => {
    if (!isMobile) return;
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isMobile || !isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = dragStart - currentX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isMobile || !isDragging) return;
    setIsDragging(false);

    // Threshold for swipe detection
    const threshold = 50;

    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setDragOffset(0);
  };

  const getCurrentSlideDestinations = () => {
    const startIndex = currentSlide * cardsPerSlide;
    return displayedDestinations.slice(startIndex, startIndex + cardsPerSlide);
  };

  const getBadgeStyle = (destination) => {
    switch (destination.type) {
      case "international":
        return {
          bg: "bg-gradient-to-r from-blue-500 to-purple-500",
          text: `${destination.country}`,
          icon: FaGlobeAsia,
        };
      case "regional":
        return {
          bg: "bg-gradient-to-r from-green-500 to-teal-500",
          text: `${destination.country}`,
          icon: FaMapMarkedAlt,
        };
      case "tropical":
        return {
          bg: "bg-gradient-to-r from-orange-500 to-pink-500",
          text: `${destination.country}`,
          icon: FaUmbrellaBeach,
        };
      case "coastal":
        return {
          bg: "bg-gradient-to-r from-cyan-500 to-blue-500",
          text: `${destination.country}`,
          icon: FaWater,
        };
      case "cultural":
        return {
          bg: "bg-gradient-to-r from-purple-500 to-indigo-500",
          text: `${destination.country}`,
          icon: FaLandmark,
        };
      default:
        return {
          bg: "bg-gradient-to-r from-gray-500 to-gray-600",
          text: `${destination.country}`,
          icon: FaCompass,
        };
    }
  };

  const DestinationCard = ({ destination, index }) => {
    const badge = getBadgeStyle(destination);

    return (
      <motion.div
        key={`${destination.name}-${index}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={!isMobile ? { y: -10, scale: 1 } : {}}
        className="group cursor-pointer h-full"
      >
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
          <div className="relative overflow-hidden">
            <img
              src={destination.image || "/placeholder.svg"}
              alt={destination.name}
              className={`w-full object-cover transition-transform duration-500 ${
                isMobile ? "h-48" : "h-64 group-hover:scale-110"
              }`}
            />
            <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 text-sm font-bold text-primary shadow-lg">
              {destination.price}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {badge && (
              <div
                className={`absolute top-3 left-3 ${badge.bg} text-white text-xs px-2.5 py-1.5 rounded-full font-semibold flex items-center gap-1.5 shadow-lg`}
              >
                {badge.icon && <badge.icon className="w-3 h-3" />}
                <span>{badge.text}</span>
              </div>
            )}
          </div>

          <div className={`flex flex-col flex-1 ${isMobile ? "p-4" : "p-6"}`}>
            <h3
              className={`font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors ${
                isMobile ? "text-lg" : "text-xl"
              }`}
            >
              {destination.name}
            </h3>
            <p
              className={`text-gray-600 mb-4 leading-relaxed flex-shrink-0 ${
                isMobile ? "text-sm" : ""
              }`}
            >
              {destination.description}
            </p>

            <div className="space-y-2 flex-1">
              <h4
                className={`font-semibold text-gray-800 ${
                  isMobile ? "text-xs" : "text-sm"
                }`}
              >
                Top Attractions:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {destination.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className={`bg-primary/10 text-primary rounded-full font-medium ${
                      isMobile ? "text-xs px-2 py-1" : "text-xs px-2 py-1"
                    }`}
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={!isMobile ? { scale: 1.05 } : {}}
              whileTap={{ scale: 0.95 }}
              className={`w-full btn btn-primary btn-outline group-hover:bg-primary group-hover:text-white hover:!text-white transition-all duration-300 flex-shrink-0 ${
                isMobile ? "mt-4 btn-sm" : "mt-6"
              }`}
            >
              Book Flight
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Explore Southeast Asia
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing destinations across Southeast Asia with AirLine
            Cambodia as your gateway
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Navigation Buttons */}
          {!isMobile && (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 group -ml-4 md:-ml-6"
              >
                <FaChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-primary" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 group -mr-4 md:-mr-6"
              >
                <FaChevronRight className="w-6 h-6 text-gray-600 group-hover:text-primary" />
              </motion.button>
            </>
          )}

          {/* Slider Content */}
          <div
            ref={containerRef}
            className={`overflow-hidden ${
              isMobile ? "rounded-xl" : "rounded-2xl"
            }`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ x: 300, opacity: 0 }}
                animate={{
                  x: isDragging ? -dragOffset * 0.5 : 0,
                  opacity: 1,
                }}
                exit={{ x: -300, opacity: 0 }}
                transition={{
                  duration: isDragging ? 0 : 0.5,
                  ease: "easeInOut",
                }}
                className={`grid gap-4 md:gap-8 ${
                  cardsPerSlide === 1
                    ? "grid-cols-1"
                    : cardsPerSlide === 2
                    ? "grid-cols-2"
                    : "grid-cols-3"
                } ${isMobile ? "px-2" : ""}`}
              >
                {getCurrentSlideDestinations().map((destination, index) => (
                  <DestinationCard
                    key={destination.name}
                    destination={destination}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Mobile Slide Indicators */}
          <div
            className={`flex justify-center mt-6 space-x-2 ${
              isMobile ? "px-4" : ""
            }`}
          >
            {Array.from({ length: totalSlides }).map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  isMobile ? "w-2 h-2" : "w-3 h-3"
                } ${
                  index === currentSlide
                    ? "bg-primary scale-125 shadow-lg"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Mobile Swipe Hint */}
          {isMobile && totalSlides > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-center mt-4"
            >
              <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
                <FaChevronLeft className="w-3 h-3 text-primary" />
                <span>Swipe to explore more destinations</span>
                <FaChevronRight className="w-3 h-3 text-primary" />
              </p>
            </motion.div>
          )}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setShowAll(!showAll);
              setCurrentSlide(0);
            }}
            className={`btn btn-primary relative overflow-hidden group ${
              isMobile ? "btn-md px-6 py-2" : "btn-lg px-8 py-3"
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              {showAll ? (
                <>
                  <span>Show Popular Only</span>
                  <motion.span
                    animate={{ rotate: showAll ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ⬆️
                  </motion.span>
                </>
              ) : (
                <>
                  <span>Discover More Destinations</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                    }}
                  >
                    <TbWorldCancel className="w-4 h-4" />
                  </motion.span>
                </>
              )}
            </span>

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
            />
          </motion.button>

          {/* Stats Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-gray-600"
          >
            <p className={`${isMobile ? "text-xs" : "text-sm"}`}>
              Slide {currentSlide + 1} of {totalSlides} •{" "}
              {displayedDestinations.length} destinations
              {showAll && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="ml-2 text-primary font-semibold"
                >
                  • Explore the entire region!
                </motion.span>
              )}
            </p>
          </motion.div>

          {/* Additional Info for All Destinations */}
          <AnimatePresence>
            {showAll && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={`mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100 ${
                  isMobile ? "p-4" : "p-6"
                }`}
              >
                <div className="flex items-center justify-center gap-2 mb-3">
                  <FaInfoCircle className="w-6 h-6 text-primary" />
                  <h3
                    className={`font-semibold text-gray-800 ${
                      isMobile ? "text-base" : "text-lg"
                    }`}
                  >
                    Explore Southeast Asia
                  </h3>
                  <FaGlobeAsia className="w-6 h-6 text-primary" />
                </div>
                <p
                  className={`text-gray-600 max-w-2xl mx-auto mb-4 ${
                    isMobile ? "text-xs" : "text-sm"
                  }`}
                >
                  From bustling metropolises to tropical paradises, discover the
                  incredible diversity of Southeast Asia. Each destination
                  offers unique cultures, cuisines, and experiences waiting to
                  be explored.
                </p>

                {/* Legend */}
                <div
                  className={`flex flex-wrap justify-center gap-3 ${
                    isMobile ? "text-xs" : "text-xs"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <span className="flex items-center gap-1 text-black">
                      <FaGlobeAsia className="w-3 h-3 text-black" /> Major
                      Cities
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>
                    <span className="flex items-center gap-1 text-black">
                      <FaUmbrellaBeach className="w-3 h-3 text-primary" /> Tropical Islands
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                    <span className="flex items-center gap-1 text-black">
                      <FaLandmark className="w-3 h-3 text-red-500" /> Cultural Heritage
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                    <span className="flex items-center gap-1 text-black">
                      <FaWater className="w-3 h-3 text-primary" /> Coastal Cities
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;
