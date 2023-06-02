import React, {useState} from "react";
import Contact from "./Contact";
import contactData from "./contactData";

export default function App() {
  const contactEle = contactData.map(item => {
//    return <Contact name={item.name} skill={item.skill} image={item.image} alttext={item.alttext} />
return <Contact key={item.id} {...item}  />
})
// form
const [frmValue, setFrmValue] = useState({});
const frmSubmit = (e) =>{
e.preventDefault();
console.log(frmValue);
}
const ChangeVal = (e) => {
  setFrmValue({...frmValue, [e.target.id]:[e.target.value]})
}


  return (
    <>
    <form onSubmit={frmSubmit}>
      <label> Name:
          <input type="text" id="name" onChange={ChangeVal}/>
      </label>
      <label> Age:
          <input type="text" id="age" onChange={ChangeVal}/>
      </label>
      <button>Submit</button>
    </form>
    {contactEle}
    </>
  )
}

