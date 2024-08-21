import { Checkbox, Box, FormControlLabel } from "@mui/material";
import { FC, useState } from "react";
import classes from "./Filter.module.scss";
import { FormData } from "../../models";
import SearchIcon from "@mui/icons-material/Search";
import { CheckboxFormGroup, InputFilter } from "../../styles";

type Props = {
  onApply: (formData: FormData) => void;

};

const Filter: FC<Props> = ({ onApply}) => {
  const [formData, setFormData] = useState<FormData>({
    search: "",
    showField: false,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "showField" ? checked : value,
    }));
  };
  const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onApply(formData);
  };

  const handleReset = () => {
    setFormData({ search: "", showField: false });
    onApply({ search: "", showField: false });
  };
  return (
    <Box
      component={"form"}
      onSubmit={(e) => handleFilter(e)}
      className={classes.filters__container}
    >
      <div className={classes.input__fields__container}>
        <Box className={classes.input}>
          <SearchIcon sx={{ ml: "5px", color: "#7D3CE9" }} />
          <InputFilter
            InputLabelProps={{ className: classes.label }}
            name="search"
            size="small"
            id="outlined-basic"
            label="Search"
            variant="outlined"
            onChange={handleChange}
            value={formData.search}
          />
        </Box>
        <CheckboxFormGroup>
          <FormControlLabel
            classes={{ label: classes.label }}
            control={
              <Checkbox
                sx={{ ml: "10px" }}
                size="small"
                name="showField"
                onChange={handleChange}
                checked={formData.showField}
              />
            }
            label="Show PII Only"
          />
        </CheckboxFormGroup>
      </div>
      <div className={classes.form__btn__container}>
        <button className={classes.apply__btn} type="submit">
          Apply Filters
        </button>
        <button className={classes.reset__btn} onClick={handleReset}>
          Reset Filters
        </button>
      </div>
    </Box>
  );
};

export default Filter;
