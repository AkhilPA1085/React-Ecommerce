import {Routes,Route} from 'react-router-dom';
import Authentication from './routes/authentication/authentication.component';
import CheckOut from './routes/checkout/checkout.components';
import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="auth" element={<Authentication/>}/>
        <Route path="checkout" element={<CheckOut/>}/>
      </Route>
    </Routes>
  );
};

export default App;
