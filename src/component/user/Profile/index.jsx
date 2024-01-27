import React from "react";
import { IconButton, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";

const Index = () => {
  return (
    <Paper className="shadow-md  grid grid-cols-1 mb-2 p-3">
      <div className="flex justify-between">
        <div>
          <div className=" ml-1  p-3">
            <table>
              <tbody>
                <tr>
                  <td className="px-2">
                    <b>Full Name</b>
                  </td>
                  <td>
                    : <span style={{ color: "blue" }}>Amaguar Youssef</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-2">
                    <b>Phone Number</b>
                  </td>
                  <td>
                    : <span style={{ color: "blue" }}>+212 624587963</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-2">
                    <b>Email</b>
                  </td>
                  <td>
                    :{" "}
                    <span style={{ color: "blue" }}>
                      youssef.ecom@gmail.com
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="">
          <IconButton aria-label="">
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
          {/* onClick={() => { navigate("/user/edit-address") }} */}
          <IconButton aria-label="">
            <EditNoteIcon />
          </IconButton>
        </div>
      </div>
    </Paper>
  );
};

export default Index;
