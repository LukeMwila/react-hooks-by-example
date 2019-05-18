import * as React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

/** Presentation */
import ErrorMessage from "../components/ErrorMessage";
import { Wrapper } from "../components/Styles";

/** Custom Hooks */
import useErrorHandler from "../utils/custom-hooks/ErrorHandler";

/** Context */
import { authContext } from "../contexts/AuthContext";

/** Utils */
import { authenticateUser, validateLoginForm } from "../utils/Helpers";

function Login() {
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const auth = React.useContext(authContext);
  const { error, showError } = useErrorHandler(null);

  const authHandler = async () => {
    try {
      setLoading(true);
      const userData = await authenticateUser(userEmail, userPassword);
      const { id, email } = userData;
      auth.setAuthStatus({ id, email });
    } catch (err) {
      setLoading(false);
      showError(err.message);
    }
  };

  return (
    <Wrapper>
      <Form
        onSubmit={e => {
          e.preventDefault();
          if (validateLoginForm(userEmail, userPassword, showError)) {
            authHandler();
          }
        }}
      >
        <FormGroup>
          <Label for="userEmail">Email Address</Label>
          <Input
            type="email"
            name="email"
            value={userEmail}
            id="userEmail"
            placeholder="john@mail.com"
            onChange={e => setUserEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="userPassword">Password</Label>
          <Input
            type="password"
            name="password"
            value={userPassword}
            id="userPassword"
            placeholder="Password"
            onChange={e => setUserPassword(e.target.value)}
          />
        </FormGroup>
        <br />
        <Button type="submit" disabled={loading} block={true}>
          {!loading ? "Sign In" : "Loading..."}
        </Button>
        <br />
        {error && <ErrorMessage errorMessage={error} />}
      </Form>
    </Wrapper>
  );
}

export default Login;
