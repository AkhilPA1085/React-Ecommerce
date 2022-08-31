import {signInWithGooglePopup,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import "./signIn.styles.scss";

const SignIn = () => {
    const logUser = async()=>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
  return (
    <div className="container">
      <div className="signin-form">
        {/* <div className="left-col">
          <h2>I already have an account</h2>
          <p>SignIn with your email and password</p>

          <form className="mt-3">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="submit-buttons">
                <button type="submit" className="btn btn-primary">
                SignIn
                </button>
                <button type="submit" className="btn btn-primary">
                SignIn with google
                </button>
            </div>
          </form>
        </div>
        <div className="right-col">
          <h2>I do not have an account</h2>

          <form className="mt-3">
            <div class="mb-3">
                <label for="Username" className="form-label">
                    Name
                </label>
                <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
               Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div> */}
        <button onClick={logUser}>sign in with google</button>
      </div>
    </div>
  );
};

export default SignIn;
