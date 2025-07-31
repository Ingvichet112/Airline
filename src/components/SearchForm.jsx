"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaExclamationCircle,
  FaInfoCircle,
  FaPlane,
  FaStar,
  FaWifi,
  FaUtensils,
  FaTv,
  FaCrown,
  FaSuitcase,
} from "react-icons/fa";

const SearchForm = () => {
  const [tripType, setTripType] = useState("roundtrip");
  const [passengers, setPassengers] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchData, setSearchData] = useState({
    from: "",
    to: "",
    departure: "",
    return: "",
    class: "economy",
  });
  const [error, setError] = useState("");

  // Mock flight results
  const mockFlights = [
    {
      id: 1,
      airline: "Air Cambodia",
      logo: "/airplain.png",
      from: "Phnom Penh (PNH)",
      to: "Siem Reap (REP)",
      departure: "08:30",
      arrival: "09:30",
      duration: "1h",
      price: 89,
      stops: "Direct",
      aircraft: "ATR 72",
      rating: 4.5,
      amenities: ["WiFi", "Meals", "Entertainment"],
      baggage: "20kg",
    },
    {
      id: 2,
      airline: "Cambodia Angkor Air",
      logo: "/airplain.png",
      from: "Phnom Penh (PNH)",
      to: "Siem Reap (REP)",
      departure: "14:20",
      arrival: "15:20",
      duration: "1h",
      price: 79,
      stops: "Direct",
      aircraft: "Airbus A320",
      rating: 4.3,
      amenities: ["WiFi", "Snacks", "Priority Boarding"],
      baggage: "25kg",
    },
    {
      id: 3,
      airline: "jarkata Airways",
      logo: "/airplain.png",
      from: "jarkata (jkt)",
      to: "Siem Reap (REP)",
      departure: "10:15",
      arrival: "11:35",
      duration: "1h 20m",
      price: 159,
      stops: "Direct",
      aircraft: "Airbus A319",
      rating: 4.7,
      amenities: ["Lounge Access", "Premium Meals", "Extra Legroom"],
      baggage: "30kg",
    },
    {
      id: 4,
      airline: "Singapore Airline",
      logo: "/airplain.png",
      from: "Singapore",
      to: "Siem Reap (REP)",
      departure: "10:15",
      arrival: "11:35",
      duration: "3h 30m",
      price: 159,
      stops: "Direct",
      aircraft: "Airbus A319",
      rating: 4.6,
      amenities: ["Lounge Access", "Premium Meals", "Extra Legroom"],
      baggage: "40kg",
    },
    {
      id: 5,
      airline: "Singapore Airline",
      logo: "/airplain.png",
      from: "Kuala Lumpur",
      to: "Siem Reap (REP)",
      departure: "10:15",
      arrival: "11:35",
      duration: "2h 30m",
      price: 159,
      stops: "Direct",
      aircraft: "Airbus A319",
      rating: 4.6,
      amenities: ["Lounge Access", "Premium Meals", "Extra Legroom"],
      baggage: "40kg",
    },
  ];

  const popularDestinations = [
    "Siem Reap (REP)",
    "Phnom Penh (PNH)",
    "Sihanoukville (KOS)",
    "jarkata (jkt)",
    "Ho Chi Minh City (SGN)",
    "Kuala Lumpur (KUL)",
  ];

  // Handle search button click with filtering
  const handleSearch = () => {
    // Validate required fields
    if (!searchData.from || !searchData.to) {
      setError("Please select both departure and destination cities.");
      setShowResults(false);
      return;
    }
    if (searchData.from === searchData.to) {
      setError("Departure and destination cities cannot be the same.");
      setShowResults(false);
      return;
    }

    setError("");
    setIsSearching(true);
    // Simulate API call delay
    setTimeout(() => {
      setIsSearching(false);
      setShowResults(true);
    }, 1000);
  };

  // Handle cancel button click
  const handleCancel = () => {
    setSearchData({
      from: "",
      to: "",
      departure: "",
      return: "",
      class: "economy",
    });
    setTripType("roundtrip");
    setPassengers(1);
    setShowResults(false);
    setError("");
    setIsSearching(false);
  };

  // Filter flights based on searchData
  const filteredFlights = mockFlights.filter(
    (flight) => flight.from === searchData.from && flight.to === searchData.to
  );

  return (
    <section
      id="search"
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 -mt-32 relative z-10"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Find Your Perfect Flight
            </h2>
            <p className="text-gray-600">
              Search and compare flights to Southeast Asia's top destinations
            </p>
          </div>

          {/* Trip Type Selector */}
          <div className="flex flex-wrap gap-4 mb-6">
            {["roundtrip", "oneway", "multicity"].map((type) => (
              <label key={type} className="cursor-pointer">
                <input
                  type="radio"
                  name="tripType"
                  value={type}
                  checked={tripType === type}
                  onChange={(e) => setTripType(e.target.value)}
                  className="radio radio-primary mr-2"
                />
                <span className="capitalize text-gray-700">
                  {type.replace("way", " way")}
                </span>
              </label>
            ))}
          </div>

          {/* Search Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-primary font-semibold">From</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={searchData.from}
                onChange={(e) =>
                  setSearchData({ ...searchData, from: e.target.value })
                }
              >
                <option disabled value="">
                  Select departure city
                </option>
                {popularDestinations.map((dest) => (
                  <option key={dest} value={dest}>
                    {dest}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-primary font-semibold">To</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={searchData.to}
                onChange={(e) =>
                  setSearchData({ ...searchData, to: e.target.value })
                }
              >
                <option disabled value="">
                  Select destination
                </option>
                {popularDestinations.map((dest) => (
                  <option key={dest} value={dest}>
                    {dest}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-primary font-semibold">Departure</span>
              </label>
              <input
                type="date"
                className="input input-bordered w-full"
                value={searchData.departure}
                onChange={(e) =>
                  setSearchData({ ...searchData, departure: e.target.value })
                }
              />
            </div>

            {tripType === "roundtrip" && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary font-semibold">Return</span>
                </label>
                <input
                  type="date"
                  className="input input-bordered w-full"
                  value={searchData.return}
                  onChange={(e) =>
                    setSearchData({ ...searchData, return: e.target.value })
                  }
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-primary font-semibold">Passengers</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Passenger" : "Passengers"}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-primary font-semibold">Class</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={searchData.class}
                onChange={(e) =>
                  setSearchData({ ...searchData, class: e.target.value })
                }
              >
                <option value="economy">Economy</option>
                <option value="premium">Premium Economy</option>
                <option value="business">Business</option>
                <option value="first">First Class</option>
              </select>
            </div>

            <div className="form-control flex justify-end items-end space-x-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary btn-lg flex-1 text-[15px]"
                onClick={handleSearch}
                disabled={isSearching}
              >
                {isSearching ? "Searching..." : "Search Flights"}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary btn-lg flex-1"
                onClick={handleCancel}
                disabled={isSearching}
              >
                Cancel
              </motion.button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="alert alert-error mt-4">
              <FaExclamationCircle className="shrink-0 h-6 w-6" />
              <span>{error}</span>
            </div>
          )}

          {/* Quick Links */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Popular Routes
            </h3>
            <div className="flex btn-primary flex-wrap gap-2">
              {[
                {
                  from: "Phnom Penh (PNH)",
                  to: "Siem Reap (REP)",
                  label: "Phnom Penh → Siem Reap",
                },
                {
                  from: "jarkata (jkt)",
                  to: "Siem Reap (REP)",
                  label: "jarkata → Singapore",
                },
                {
                  from: "Ho Chi Minh City (SGN)",
                  to: "Phnom Penh (PNH)",
                  label: "Ho Chi Minh → Phnom Penh",
                },
                {
                  from: "Singapore (SIN)",
                  to: "Siem Reap (REP)",
                  label: "Singapore → Siem Reap",
                },
                {
                  from: "Kuala Lumpur (KUL)",
                  to: "Phnom Penh (PNH)",
                  label: "Kuala Lumpur → Phnom Penh",
                },
              ].map((route) => (
                <motion.button
                  key={route.label}
                  whileHover={{ scale: 1.05 }}
                  className="btn btn-outline btn-sm"
                  onClick={() => {
                    setSearchData((prev) => ({
                      ...prev,
                      from: route.from,
                      to: route.to,
                    }));
                    handleSearch();
                  }}
                >
                  {route.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Flight Results */}
          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Flight Results
              </h3>
              {filteredFlights.length > 0 ? (
                <div className="space-y-4">
                  {filteredFlights.map((flight) => (
                    <div
                      key={flight.id}
                      className="bg-gray-50 p-4 rounded-lg shadow"
                    >
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div className="flex items-center mb-4 md:mb-0">
                          <img
                            src={flight.logo}
                            alt={`${flight.airline} logo`}
                            className="w-8 h-8 mr-4"
                          />
                          <div>
                            <h4 className="font-semibold">{flight.airline}</h4>
                            <p className="text-sm text-gray-600">
                              {flight.aircraft} • {flight.stops}
                            </p>
                          </div>
                        </div>
                        <div className="flex-1 mx-4">
                          <div className="flex justify-between">
                            <div>
                              <p className="font-semibold">
                                {flight.departure}
                              </p>
                              <p className="text-sm text-gray-600">
                                {flight.from}
                              </p>
                            </div>
                            <div className="text-center flex flex-col items-center">
                              <p className="text-sm text-gray-600 flex items-center gap-1">
                                <FaPlane className="text-primary w-3 h-3" />
                                {flight.duration}
                              </p>
                              <div className="h-1 bg-gray-300 rounded-full my-1 w-24"></div>
                            </div>
                            <div>
                              <p className="font-semibold">{flight.arrival}</p>
                              <p className="text-sm text-gray-600">
                                {flight.to}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-primary">
                            ${flight.price}
                          </p>
                          <p className="text-sm text-gray-600">
                            {flight.baggage} included
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {flight.amenities.map((amenity) => {
                          let Icon;
                          switch (amenity) {
                            case "WiFi":
                              Icon = FaWifi;
                              break;
                            case "Meals":
                            case "Premium Meals":
                            case "Snacks":
                              Icon = FaUtensils;
                              break;
                            case "Entertainment":
                              Icon = FaTv;
                              break;
                            case "Priority Boarding":
                            case "Lounge Access":
                              Icon = FaCrown;
                              break;
                            default:
                              Icon = null;
                          }
                          return (
                            <span
                              key={amenity}
                              className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded flex items-center gap-1"
                            >
                              {Icon && <Icon className="w-3 h-3" />}
                              {amenity}
                            </span>
                          );
                        })}
                      </div>
                      <div className="mt-2 flex items-center gap-1">
                        <FaStar className="text-yellow-400 w-4 h-4" />
                        <span className="text-sm text-gray-600">
                          {flight.rating}/5
                        </span>
                        <span className="mx-2">•</span>
                        <FaSuitcase className="text-gray-400 w-4 h-4" />
                        <span className="text-sm text-gray-600">
                          {flight.baggage}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="alert alert-info">
                  <FaInfoCircle className="shrink-0 w-6 h-6" />
                  <span>No flights found for the selected route.</span>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SearchForm;
