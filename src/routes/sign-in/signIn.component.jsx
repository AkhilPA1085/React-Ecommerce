import Button from '../../components/button/button.component';
import SignUp from '../../components/sign-up/sign-up-form.component';
import {signInWithGooglePopup,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import "./signIn.styles.scss";

const SignIn = () => {
    const logUser = async()=>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
  return (
    <div >
      <Button buttonType="google" onClick={logUser}>sign in with google</Button>
      <SignUp />
    </div>
  );
};

export default SignIn;
