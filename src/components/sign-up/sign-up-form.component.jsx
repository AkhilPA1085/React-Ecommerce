import { useState } from "react";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input-field/form-input.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // const {setCurrentUser} = useContext(UserContext)
  
  const resetFormField = ()=>{
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async(event)=>{
    event.preventDefault();

    if(password !== confirmPassword){
        alert("please check the password again");
        return; 
    }
    try{
        const {user} = await createAuthUserWithEmailAndPassword(email,password);

        // setCurrentUser(user)

        await createUserDocumentFromAuth(user,{displayName});

        resetFormField();
    }catch(error){
      switch(error.code){
        case 'auth/email-already-in-use':
          alert("email-already-in-use");
          break;
          
        default:
          console.log("failed to create user",error);  
      }
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Don't have an account ?</h1>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          required
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          required
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <FormInput
          label="Confirm Password"
          required
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />

        <Button buttonType="inverted" type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
