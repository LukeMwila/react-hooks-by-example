import * as React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

/** Presentation */
import ErrorMessage from "../components/ErrorMessage";

/** Custom Hooks */
import useErrorHandler from "../utils/custom-hooks/ErrorHandler";

/** Context */
import { authContext } from "../contexts/AuthContext";

/** Utils */
import { authenticateUser, validateLoginForm } from "../utils/Helpers";
import { Header } from "../components/Styles";

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
    <Form
      onSubmit={e => {
        e.preventDefault();
        if (validateLoginForm(userEmail, userPassword, showError)) {
          authHandler();
        }
      }}
    >
      <Header>Sign in</Header>
      <br />
      <FormGroup>
        <Input
          type="email"
          name="email"
          value={userEmail}
          placeholder="john@mail.com"
          onChange={e => setUserEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          name="password"
          value={userPassword}
          placeholder="Password"
          onChange={e => setUserPassword(e.target.value)}
        />
      </FormGroup>
      <Button type="submit" disabled={loading} block={true}>
        {loading ? "Loading..." : "Sign In"}
      </Button>
      <br />
      {error && <ErrorMessage errorMessage={error} />}
    </Form>
  );
}

export default Login;
