import * as React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";

/** Presentation */
import ErrorMessage from "../components/ErrorMessage";

/** Custom Hooks */
import useErrorHandler from "../utils/custom-hooks/ErrorHandler";

/** Utils */
import { validateLoginForm } from "../utils/Helpers";

const LoginWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & button {
    background: rgba(51, 51, 255, 1) !important;
  }
`;

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { error, showError } = useErrorHandler(null);

  /** Make API request to authenticate user
   * @param email - user's email/username
   * @param password - user's password
   * @param setLoading - function to update the loading state value
   */
  const authenticateUser = (
    email: string,
    password: string,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ): Promise<any> => {
    setLoading(true);

    return new Promise((resolve, reject) => {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ email, password })
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  };

  return (
    <LoginWrapper>
      <Form
        onSubmit={async e => {
          e.preventDefault();
          if (validateLoginForm(email, password, showError)) {
            try {
              const userData = await authenticateUser(
                email,
                password,
                setLoading
              );
              console.log("User data:", userData);
            } catch (err) {
              setLoading(false);
              showError(err.message);
            }
          }
        }}
      >
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
