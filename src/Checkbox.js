import React from "react";
import { useField } from "formik";
import { Checkbox, FormControlLabel } from "@material-ui/core";
function CheckboxCus({ values }) {
  const MyCheck = ({ label, ...props }) => {
    const [field] = useField(props);

    return <FormControlLabel {...field} control={<Checkbox />} label={label} />;
  };
  return (
    <div>
      <div style={{ backgroundColor: "#8080804f", paddingLeft: "10px" }}>
        <MyCheck
          name="isTall"
          label="Bracelets"
          type="checkbox"
          as={Checkbox}
        />
      </div>
      <div style={{ paddingLeft: "30px" }}>
        <div>
          <MyCheck
            name="cookies"
            type="checkbox"
            value="14865"
            label="jasinthe_bracelet"
          />
        </div>
        <div>
          <MyCheck
            name="cookies"
            type="checkbox"
            value="14864"
            label="Jasinthe Bracelet"
          />
        </div>
        <div>
          <MyCheck
            name="cookies"
            type="checkbox"
            value="14870"
            label="inspire_bracelet"
          />
        </div>
      </div>
      <hr />
      <div style={{ backgroundColor: "#8080804f", paddingLeft: "10px" }}>
        <MyCheck name="isTall2" type="checkbox" as={Checkbox} />
      </div>
      <div style={{ paddingLeft: "30px" }}>
        <div>
          <MyCheck
            name="cookies2"
            type="checkbox"
            value="148600"
            label="Zero amount item with questions"
          />
        </div>
        <div>
          <MyCheck
            name="cookies2"
            type="checkbox"
            value="1400870"
            label="Normal item with questions"
          />
        </div>
        <div>
          <MyCheck
            name="cookies2"
            type="checkbox"
            value="1004865"
            label="Normal item"
          />
        </div>
      </div>
      <hr />

      {RadioFun(values)}
      {Data(values)}
    </div>
  );
}

const Data = (values) => {
  const { precentage, name, applied_to, cookies, cookies2 } = values;
  const obj = {
    rate: precentage / 100 + " %",
    name,
    applicable_items: [...cookies, ...cookies2],
    applied_to,
  };
  return <pre>{JSON.stringify(obj, null, 2)}</pre>;
};

const RadioFun = (values) => {
  if (values.applied_to == "all items") {
    values.isTall = true;
    values.isTall2 = true;
  } else if (values.applied_to == "some items") {
    values.isTall = false;
    values.isTall2 = false;
  }
  Checkall(values.isTall, values.cookies, ["14864", "14870", "14865"]);
  Checkall(values.isTall2, values.cookies2, ["148600", "1400870", "1004865"]);
};
const Checkall = (all, cookies, fixcookies) => {
  if (all) {
    if (cookies.length == 0) {
      cookies.push(fixcookies[0], fixcookies[1], fixcookies[2]);
    } else {
      for (var i = 0; i < fixcookies.length; i++) {
        if (cookies.indexOf(fixcookies[i]) === -1) {
          cookies.push(fixcookies[i]);
          console.log(cookies);
        }
      }
    }
  } else if (!all && cookies.length == 0) {
    return "";
  } else if (!all) {
    console.log("all");
    if (cookies.length > 0) {
    } else {
      for (var i = 0; i < cookies.length; i++) {
        cookies.splice(i, 1);
      }
    }
  }
};
export default CheckboxCus;
