import React from "react";
import DesktopRules from "./DesktopRules";
import MobileRules from "./MobileRules";

const Rules: React.FC = () => {
  return (
    <div className="h-full">
      <div className="mobile-rules sm:hidden">
        <MobileRules />
      </div>
      <div className="desktop-rules hidden sm:block h-full">
        <DesktopRules />
      </div>
    </div>
  );
};

export default Rules;
