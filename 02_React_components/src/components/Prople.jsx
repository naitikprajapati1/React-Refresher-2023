import data from "../data";
const Prople = () => {
  return (
    <div className='data'>
   {
     data.map((person)=>{
        <h3>{person.name}</h3>
     })
   }
   </div>
  )
}

export default Prople