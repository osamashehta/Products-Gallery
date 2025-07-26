import React from "react";

const CustomContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="custom-container max-w-[1280px] w-[95%] sm:w-[90%] mx-auto px-2">
      {children}
    </div>
  );
};

export default CustomContainer;
