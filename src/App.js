import {Routes,Route} from 'react-router-dom';
import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import SignIn from './routes/sign-in/signIn.component';

// const Shop =()=>{
//   return(
//     <div>shop component</div>
//   )
// }

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="signin" element={<SignIn/>}/>
      </Route>
    </Routes>
  );
};

export default App;
