import { useState } from "react";
import ItemCard from "./components/ItemCard";
import Controls from "./components/Controls";
import "./App.css";



 function App() {
  const initialItem = {
    type: "person", 
    name: "Ahmad",
    age: 20,
    major: "Computer Science",
    price: 499,
    specs: "16GB RAM, 512GB SSD",
  };

  const [item, setItem] = useState(initialItem);

  const increase = () => {
    setItem((prev) =>
      prev.type === "person"
        ? { ...prev, age: prev.age + 1 }
        : { ...prev, price: prev.price + 10 }
    );
  };

  const decrease = () => {
    setItem((prev) =>
      prev.type === "person"
        ? { ...prev, age: prev.age - 1 }
        : { ...prev, price: prev.price - 10 }
    );
  };

  const changeName = () => {
    const newName = prompt("Enter new name/title:");
    if (newName) {
      setItem((prev) => ({ ...prev, name: newName }));
    }
  };

  const reset = () => setItem(initialItem);

  return (
    <div className="item-profile-app">
      <ItemCard item={item} />
      <Controls
        onIncrease={increase}
        onDecrease={decrease}
        onChangeName={changeName}
        onReset={reset}
      />
    </div>
  );
}
export default App;