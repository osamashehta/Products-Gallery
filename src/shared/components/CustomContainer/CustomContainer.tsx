import React from "react";
interface CustomContainerProps {
  children: React.ReactNode;
  className?: string;
}
const CustomContainer = ({ children, className }: CustomContainerProps) => {
  return (
    <section className={`custom-container overflow-hidden max-w-[1280px] w-[95%] sm:w-[90%] mx-auto px-2 ${className}`}>
      {children}
    </section>
  );
};

export default CustomContainer;
