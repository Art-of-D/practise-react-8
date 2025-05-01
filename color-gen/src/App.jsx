import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";
import { useState } from "react";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));
  const addColor = (color) => {
    try {
      setColors(new Values(color).all(10));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
    </main>
  );
};
export default App;
