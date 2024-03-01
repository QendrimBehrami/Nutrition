import { useRef, useState } from "react";
import FoodItem from "./FoodItem";

const API_URL = "https://api.api-ninjas.com/v1/nutrition?";
const API_KEY = import.meta.env.VITE_API_KEY;

function capitalize(str: string): string {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function App() {
  const query = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<FoodItem[]>([]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const queryValue = query.current?.value;
    if (!queryValue) {
      console.error("Failed to get query");
      return "";
    }
    const response = await fetch(`${API_URL}&query=${queryValue}`, {
      headers: {
        "X-Api-Key": API_KEY,
      },
    });
    const [data] = await response.json();

    const foodItem = Object.assign(data);
    setItems((prevItems) => [...prevItems, foodItem]);

    query.current.value = "";
  };

  return (
    <>
      <h1 className="m-4 text-center">Nutrition</h1>
      <form
        action=""
        className="px-4"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="flex flex-wrap items-center gap-2">
          <input
            className="min-w-0 flex-auto p-2 text-black"
            type="text"
            placeholder="Enter food item"
            ref={query}
          />
          <button
            type="submit"
            className="rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </form>
      {items.map((food) => (
        <div key={food.name} className="m-4">
          {capitalize(food.name)} has {food.calories} Calories per{" "}
          {food.serving_size_g} gram.
        </div>
      ))}
    </>
  );
}

export default App;
