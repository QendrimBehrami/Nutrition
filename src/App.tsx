import { useRef } from "react";

const API_URL = "https://api.api-ninjas.com/v1/nutrition?";
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {

  const query = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const queryValue = query.current?.value;
    if(!queryValue){
      console.error("Failed to get query")
      return ""
    }
    const response = await fetch(`${API_URL}&query=${queryValue}`, {
      headers:{
        'X-Api-Key': API_KEY
      }
    });
    const data = await response.json();

    console.log(data);
    
      
  }

  return (
    <>
      <h1 className="m-4 text-center">Nutrition</h1>
      <form action="" className="px-4" onSubmit={(e)=>{handleSubmit(e)}}>
        <div className="flex flex-wrap items-center gap-2">
          <input className="flex-auto min-w-0 text-black p-2" type="text" placeholder="Enter food item" ref={query}/>
          <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600" >Search</button>
        </div>
      </form>
    </>
  );
}

export default App;
