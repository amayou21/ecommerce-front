import { Paper, IconButton } from "@mui/material";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import PeopleIcon from '@mui/icons-material/People';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
const data = [
  {
    service: "IOT Devices",
    icon: <DeviceHubIcon fontSize="large" color="info" />,
  },
  {
    service: "Stock state",
    icon: <AutorenewIcon fontSize="large" color="info" />,
  },

  {
    service: "products",
    icon: <ProductionQuantityLimitsIcon fontSize="large" color="info" />,
  },
  {
    service: "statistics",
    icon: <DonutLargeIcon fontSize="large" color="info" />,
  },
  {
    service: "users",
    icon: <PeopleIcon fontSize="large" color="info" />,
  },
];

const Dashboard = () => {
  return (
    <div className="my-6 grid grid-cols-2 md:grid-cols-3 ">
      {data.map((serv, index) => (
        <Paper className="flex flex-col  justify-between overflow-hidden  shadow-lg my-2 py-4 px-3 mx-4 rounded-2xl  relative">
          <div className="mb-4 z-40 my-auto">
            <div className="flex w-full justify-between items-center">
              <IconButton>{serv.icon}</IconButton>
            </div>

            <p className="text-4xl xl:text-5xl font-bold opacity-30 mb-2 ">
              {serv.service}
            </p>
            {/* <p className=" font-semibold mb-[2px]">{serv.service}</p> */}
          </div>
          {/* {renderDelOrEditMenu} */}
        </Paper>
      ))}
    </div>
  );
};

export default Dashboard;
