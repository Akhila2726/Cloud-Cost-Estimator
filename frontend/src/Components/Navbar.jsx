import React from "react";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.heading}>Cloud Cost Estimator</h1>
    </nav>
  );
}

const styles = {
  nav: {
    width: "100%",
    padding: "15px 30px",
    background: "rgba(255, 255, 255, 0.2)", // transparent over gradient
    backdropFilter: "blur(6px)", // glass effect
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  heading: {
    margin: 0,
    fontSize: "1.8rem",
    color: "#4a148c",
    fontWeight: "bold",
    letterSpacing: "1px"
  }
};

export default Navbar;
