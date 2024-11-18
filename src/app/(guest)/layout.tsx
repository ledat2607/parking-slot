import Heading from "@/components/layout/heading";
import Banner from "@/components/layout/banner";
import React from "react";

type GuestLayoutProps = {
  children: React.ReactNode;
};

function GuestLayout({ children }: GuestLayoutProps) {
  return (
    <div>
      <Heading title="Parking slot" description="Parking slot" />
      <Banner />
      {children}
    </div>
  );
}

export default GuestLayout;
