import { FormGroup, styled, TextField } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const BackArrow = styled(ArrowBackIosNewOutlinedIcon)({
  color: "#7D3CE9",
  fontSize: "1.25rem",
});

export const ForwardArrow = styled(ArrowForwardIosOutlinedIcon)({
  color: "#7D3CE9",
  fontSize: "1rem",
});

export const UpArrow = styled(KeyboardArrowUpIcon)({
  cursor: "pointer",
});

export const DownArrow = styled(KeyboardArrowDownIcon)({
  cursor: "pointer",
});

export const InputFilter = styled(TextField)({
    width: "100%",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
  },
  
  });

export const CheckboxFormGroup = styled(FormGroup)({
  "& .MuiFormControlLabel-root": {
    borderLeft: "1px solid #DED8E8",
  },
});
