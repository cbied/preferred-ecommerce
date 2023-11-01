import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authenication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component'
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Navigation /> }>
        <Route index element={ <Home /> } />
        <Route path='/shop' element={ <Shop /> } />
        <Route path='/contact' element={ <Shop /> } />
        <Route path='/auth' element={ < Authenication /> } />
      </Route>
    </Routes>
  )
}

export default App;
