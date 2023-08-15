import { useState } from "react"
const PlayButton = ({message,children,onSmash}) => {
    // const [buttonName,setButtonName] = useState('play');
    // const handleChanged=()=>{
    //    setButtonName(buttonName);
    // }
  return (
    <div>
   <button className="bg-white text-black p-3 hover:text-white hover:bg-red-700 inline-block" onClick={onSmash}>{children}</button>
   {/* <button className="bg-white text-black p-3 hover:text-white hover:bg-red-700 inline-block" onClick={()=>alert(message)}>{children}</button> */}
   {/* <button className="bg-white text-black p-3 hover:text-white hover:bg-red-700 inline-block" onClick={handleChanged}>{buttonName}</button> */}
   {/* <button className="bg-white text-black p-3 hover:text-white hover:bg-red-700 inline-block" onClick={handleChanged}>{buttonName}</button> */}
   </div>
  )
}

export default PlayButton