import React, { useState } from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Footer from "./Footer";

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState("aboutMe");

  const renderPage = () => {
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <AboutMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={{ background: "black", backgroundSize: "cover" }}>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
