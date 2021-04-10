import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {FormGroup, Label, Input} from "reactstrap";

function emailField() {
  return (
    <FormGroup>
      <Label for="exampleEmail">Email</Label>
      <Input type="email" name="email" id="exampleEmail" placeholder="Enter email" />
    </FormGroup>
  );
}

export default emailField;
