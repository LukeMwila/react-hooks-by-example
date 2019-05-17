import * as React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";

/** Presentation */
import ErrorMessage from "../components/ErrorMessage";

/** Custom Hooks */
import useErrorHandler from "../utils/custom-hooks/ErrorHandler";

const LoginWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { error, showError } = useErrorHandler(null);

  return (
    <LoginWrapper>
      <Form>
        <FormGroup>
          <Label for="userEmail">Email Address</Label>
          <Input
            type="email"
            name="email"
            value={email}
            id="userEmail"
            placeholder="john@mail.com"
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="userPassword">Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            id="userPassword"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>
        <br />
        <Button type="submit" disabled={loading} block={true}>
          {!loading ? "Sign In" : "Loading..."}
        </Button>
        <br />
        {error && <ErrorMessage errorMessage={error} />}
      </Form>
    </LoginWrapper>
  );
}

export default Login;
