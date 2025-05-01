import { useState } from "react";
import { nanoid } from "nanoid";
import data from "./data";

const App = () => {
  const [amount, setAmount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let number = parseInt(amount);
    if (number <= 0) {
      number = 1;
    }
    if (number > 8) {
      number = 8;
    }
    setText(data.slice(0, number));
  };
  return (
    <section className="section-center">
      <h4>Lorem ipsum</h4>
      <form className="lorem-form">
        <input
          type="number"
          step="1"
          min="1"
          max="8"
          name="amount"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="btn" type="submit" onClick={handleSubmit}>
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
