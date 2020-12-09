import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import routes from "../routes/routes";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateEmail = (event) => setEmail(event.target.value);
  const updatePassword = (event) => setPassword(event.target.value);

  const formSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    networkRequests("/admin/login", "POST", { email, password })
      .then((response) => {
        history.push(routes.home);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Form onSubmit={formSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          value={email}
          name="email"
          id="exampleEmail"
          placeholder="email id"
          onChange={updateEmail}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          value={password}
          name="password"
          id="examplePassword"
          placeholder="password"
          onChange={updatePassword}
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default LoginPage;
