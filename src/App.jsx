import './App.css'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarPizzeria from './components/Navbar'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'
import Cart from './components/Cart'

function App() {
  return (
    <>
      <NavbarPizzeria />
      {/*<Home />*/}
      {/*<Register />*/}
      {/*<Login />*/}
      <Cart />
      <Footer />
    </>
  )
}

export default App
