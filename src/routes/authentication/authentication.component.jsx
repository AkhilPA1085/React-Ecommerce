import SignIn from '../../components/sign-in/sign-in-form.component';
import SignUp from '../../components/sign-up/sign-up-form.component';
import "./authentication.styles.scss";

const Authentication = () => {
    
  return (
    <div className='authentication-forms' >
      <SignIn/>
      <SignUp />
    </div>
  );
};

export default Authentication;
