import React from "react";
import { useField } from "formik";
import { Radio, FormControlLabel } from "@material-ui/core";
function RadioCus() {
  const MyRadio = ({ label, ...props }) => {
    const [field] = useField(props);
    return <FormControlLabel {...field} control={<Radio />} label={label} />;
  };
  return (
    <div>
      <div>
        <MyRadio
          label="Apply to All Items in collection"
          name="applied_to"
          type="radio"
          value="all items"
          as={Radio}
        />
        <div>
          <MyRadio
            label="Apply to specific Items"
            name="applied_to"
            type="radio"
            value="some items"
            as={Radio}
          />
        </div>
      </div>
    </div>
  );
}

export default RadioCus;
