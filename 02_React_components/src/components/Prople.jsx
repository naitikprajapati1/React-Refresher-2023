import {people} from '../data';
const Prople = () => {
    let data=people;
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