import { Box } from '@mui/material';
import Header from './components/header/Header';
import Home from './components/home/Home';
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';
import OrderSuccessful from './components/OrderSuccessful';

import {BrowserRouter , Routes , Route} from "react-router-dom"

import DataProvider from './context/DataProvider';
function App() {
  return (
    <DataProvider>
    <BrowserRouter>

      <Header/>
      <Box style={{marginTop: 54}}>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/orderSuccessful' element={<OrderSuccessful/>} />
      </Routes>
      <Routes>
      <Route path='/product/:id' element={<DetailView/>}/>
      <Route path='/cart' element ={<Cart/> }/>
      </Routes>

      
      </Box>
    </BrowserRouter>
     
    </DataProvider>
  );
}

export default App;
