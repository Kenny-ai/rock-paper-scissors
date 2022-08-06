import React from "react";
import DesktopRules from "./DesktopRules";
import MobileRules from "./MobileRules";

const Rules: React.FC = () => {
  return (
    <div>
      <div className="mobile-rules sm:hidden">
        <MobileRules />
      </div>
      <div className="desktop-rules hidden sm:block">
        <DesktopRules />
      </div>
    </div>
  );
};

export default Rules;
