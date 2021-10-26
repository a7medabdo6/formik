import "./App.css";

import { Formik, Field, useField } from "formik";
import { TextField, Radio, FormControlLabel } from "@material-ui/core";
import CheckboxCus from "./Checkbox";
import RadioCus from "./Radio";
function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{
          name: "",
          precentage: 0,
          rate: 0,
          applicable_items: [],
          applied_to: "",
          isTall: false,
          cookies: [],
          isTall2: false,
          cookies2: [],
        }}
        onSubmit={(data, { setSubmitting }) => {
          /*  setSubmitting(true);
          // make async call
          console.log("submit: ", data);
          setSubmitting(false);
          */
        }}
      >
        {({ values }) => (
          <form>
            <h1>Add Tax</h1>
            <div>
              <Field
                placeholder="name"
                name="name"
                type="input"
                as={TextField}
              />
              <span style={{ margin: "10px" }}></span>
              <Field
                placeholder="precentage"
                name="precentage"
                type="number"
                max={2}
                as={TextField}
              />
              <span>%</span>
              {}
            </div>
            <RadioCus values={values} />
            <CheckboxCus values={values} />
          </form>
        )}
      </Formik>
    </div>
  );
}
export default App;

/*
 */
