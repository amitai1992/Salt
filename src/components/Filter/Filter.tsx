import { TextField, FormGroup, Checkbox, Box, FormControlLabel } from "@mui/material";
import { FC, useState } from "react";
import classes from './Filter.module.scss'
import { FormData } from "../../models";
import { styled } from '@mui/material/styles';
type Props = {
    onApply: (formData: FormData) => void
    onReset: () => void;
}

const InputFilter = styled(TextField)({
    '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
    },
}})

const CheckboxFormGroup = styled(FormGroup)({
    '& .MuiFormControlLabel-root':{
        borderLeft:"1px solid #DED8E8"
    }
})


const Filter: FC<Props> = ({ onApply, onReset }) => {
    const [formData, setFormData] = useState<FormData>({
        search: '',
        showField: false,

    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'showField' ? checked : value,
        }));
    };
    const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onApply(formData)
    }

    const hanldeReset = () => {
        setFormData({ search: "", showField: false });
        onReset();
    }
    return (<Box component={"form"} onSubmit={(e) => handleFilter(e)} className={classes.filters__container}>
        <div className={classes.input__fields__container}>
            <InputFilter InputProps={{classes:{input:classes.label}}} InputLabelProps={{className:classes.label}} className={classes.input} name="search" size="small" id="outlined-basic" label="Search" variant="outlined" onChange={handleChange} value={formData.search} />
            <CheckboxFormGroup >
                <FormControlLabel classes={{label:classes.label}} control={<Checkbox sx={{ ml: "10px" }} size="small" name="showField" onChange={handleChange} checked={formData.showField} />} label="Show PII Only" />
            </CheckboxFormGroup >
        </div>
        <div className={classes.form__btn__container}>
            <button className={classes.apply__btn} type="submit">Apply Filters</button>
            <button className={classes.reset__btn} onClick={hanldeReset}>Reset Filters</button>
        </div>
    </Box>)
}

export default Filter;