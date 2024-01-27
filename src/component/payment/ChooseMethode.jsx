import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Paper, Container } from "@mui/material";
import pay from "../../images/pay.png";
const ChooseMethode = () => {
  return (
    <Container maxWidth="lg">
      <Paper className="w-full flex justify-center items-center">
        <img src={pay} width="300px" />
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            payment methode{" "}
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="visa-caard"
              control={<Radio />}
              label="visa caard"
            />
            <FormControlLabel
              value="paypal"
              control={<Radio />}
              label="paypal"
            />
            <FormControlLabel
              value="othcach-on-delevryer"
              control={<Radio />}
              label="cach on delevry"
            />
          </RadioGroup>
        </FormControl>
      </Paper>
    </Container>
  );
};

export default ChooseMethode;
