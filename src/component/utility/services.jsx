import React from "react";

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WalletIcon from '@mui/icons-material/Wallet';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

const ServiceData = [
  {
    id: 1,
    icon: <LocalShippingIcon color="info" />,
    title: "Free Shipping",
    description: "Free Shipping On All Order",
  },
  {
    id: 2,
    icon: <CheckCircleIcon color="info" />,
    title: "Safe Money ",
    description: "30 Days Money Back",
  },
  {
    id: 3,
    icon: <WalletIcon color="info" />,
    title: "Secure Payment",
    description: "All Payment Secure",
  },
  {
    id: 4,
    icon: <HeadsetMicIcon color="info" />,
    title: "Online Supoort 24/7",
    description: "Technical Support 24/7",
  },
];

const Services = () => {
  return (
    <div data-aos="fade-in">
      <div className="container my-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {ServiceData.map((data,index) => (
            <div key={index} className="flex flex-col items-start sm:flex-row gap-4">
              {data.icon}
              <div>
                <h1 className="lg:text-xl font-bold">{data.title}</h1>
                <h1 className="text-gray-400 text-sm">{data.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;