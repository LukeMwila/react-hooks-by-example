import * as React from "react";

/** Presentation/UI */
import { JokeContainer } from "../components/Styles";
/** Utils */
import { apiRequest } from "../utils/Helpers";

const RandomJoke: React.FC<{}> = () => {
  const [joke, setJoke] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const getRandomJoke = async () => {
      setLoading(true);
      const joke = await apiRequest(
        "https://geek-jokes.sameerkumar.website/api",
        "get"
      );
      setLoading(false);
      setJoke(joke);
    };
    getRandomJoke();
  }, []);

  return (
    <JokeContainer>
      {loading ? "Why so serious, let's put a smile on your face :)" : joke}
    </JokeContainer>
  );
};

export default RandomJoke;
