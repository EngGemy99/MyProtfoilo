import React from "react";

function NavigationDonts(active) {
  return (
    <div className="app__navigation">
      {["Home", "About", "work", "skills", "certifications"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { background: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
}

export default NavigationDonts;
