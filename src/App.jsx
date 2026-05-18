import { useEffect, useState } from "react";

function App() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchJoke() {
    try {
      setLoading(true);

      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?type=single"
      );

      const data = await response.json();

      setJoke(data.joke);
    } catch (error) {
      setJoke("Error loading joke");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <h1>Programming Joke Generator</h1>

      <p>{loading ? "Loading..." : joke}</p>

      <button onClick={fetchJoke}>Get a New Joke</button>
    </div>
  );
}

export default App;