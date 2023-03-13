
import {  useState } from 'react';
import './App.css';
import FormInput from './components/FormInput.jsx';

const App=()=> {
  const [values,setValues] =useState({
    username:"",
    email:"",
    birthday:"",
    phoneno:"",
  });
  
const inputs=[
  {
    id:1,
    name:"username",
    type:"text",
    placeholder:"Username",
    errorMessage:"Username should be 3-16 characters and shouldn't include any special character",
    label:"Username",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  },
  {
    id:2,
    name:"email",
    type:"email",
    placeholder:"Email",
    errorMessage:"it should be valid email address!",
    label:"Email",
    required: true,
  },
  {
    id:3,
    name:"birthday",
    type:"date",
    placeholder:"Birthday",
    errorMessage:"it should be 18 year above",
    pattern:"^(0[1-9]|[12][0-9]|3[01])[- \/.,_](0[1-9]|1[012])[- \/.,_](19|20)\d\d",
    label:"Birthday"
  },
  {
    id:4,
    name:"phoneno",
    type:"tel",
    placeholder:"Phone No",
    errorMessage:"It should be 10 digit ",
    label:"Phone No",
    pattern:"^[0-9]{10}$",
    required: true,
  }
]

  const handleSubmit=(e)=>{
    e.preventDefault();  
    
  };
  const onChange =(e)=>{
    setValues({...values,[e.target.name]:e.target.value});

  };
  console.log(values);
  return (
    <div className="app"> 
      <form onSubmit={handleSubmit}>
        <h1>User form</h1>
        {inputs.map((input)=>(
          <FormInput key={input.id}
          {...input} 
          value={values[input.name]} 
          onChange={onChange}
          />

        ))}
       
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
