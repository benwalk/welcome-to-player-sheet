import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
}));

export default function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const [option, setOption] = React.useState("");

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleChange = (event) => {
    setOption(Number(event.target.value) || "");
    onClose(Number(event.target.value) || "");
  };

  return (
    <Dialog
      aria-labelledby="simple-dialog-title"
      open={open}
      onClose={handleClose}
      position="relative"
    >
      <form className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-dialog-native">House Number</InputLabel>
          <Select
            native
            value={option}
            onChange={handleChange}
            input={<Input id="demo-dialog-native" />}
          >
            <option aria-label="None" value="" />
            {options.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </Select>
        </FormControl>
      </form>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
