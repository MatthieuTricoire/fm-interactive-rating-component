import { useContext } from "react";
import "./App.css";
import Rating from "./components/rating/Rating";
import Thanks from "./components/thanks/Thanks";
import { SubmitContext } from "./context/submit-ctx";

function App() {
  const { isSubmit, setIsSubmit } = useContext(SubmitContext);

  return (
    <main>
      <Rating />
      {isSubmit}
      <Thanks />
    </main>
  );
}

export default App;
