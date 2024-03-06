import { useState } from "react";
import { baseUrl } from "./utilis/getApiUrl";
type nameProps={
  name:string
}
function App() {
  const [name,setName] = useState<nameProps>({
name:""
  })
  const handleClick = async() =>{
    const data=await fetch(`${baseUrl}`)
    const result =await data.json()
    setName(result)
    console.log(result,"data");
    
  }
  return (
   <div className="bg-black h-[100vh]">
    <div className="flex justify-center items-center w-[80%] mx-auto flex-col gap-10">
    <h1 className="text-5xl text-cyan-500" >Hello Guys</h1>
    <button className="bg-white px-6 py-2 rounded-full" onClick={handleClick}>Click me</button>
    </div>
    <h1 className="text-5xl text-green-700 text-center mt-5" >{name.name}</h1>
   </div>
  );
}

export default App;
