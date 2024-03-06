import { useState } from "react";
import { baseUrl } from "./utilis/getApiUrl";
type nameProps={
  message:string
}
function App() {
  const [name,setName] = useState<nameProps>({
message:""
  })
  const handleClick = async() =>{
    const response = await fetch(`${baseUrl}`, {
      mode: 'no-cors'
    });
    const result =await response.json()
    // setName(result)
    console.log(result,"data");
    
  }
  return (
   <div className="bg-black h-[100vh]">
    <div className="flex justify-center items-center w-[80%] mx-auto flex-col gap-10">
    <h1 className="text-5xl text-cyan-500" >Hello Guys</h1>
    <button className="bg-white px-6 py-2 rounded-full" onClick={handleClick}>Click me</button>
    </div>
    <h1 className="text-5xl text-green-700 text-center mt-5" ></h1>
   </div>
  );
}

export default App;
