import React from "react";
import Header from "./components/Header";
import Destinations from "./components/Destinations";
import Hero from "./components/Hero";
import SearchForm from "./components/SearchForm";
import Features from "./components/Features";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <Header />
      <main>
        <Hero />
        <SearchForm />
        <Features />
        <Destinations />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
