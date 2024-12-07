import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cart from './pages/components/Cart'
//import Home from './pages/Home'

function App() {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        {/* <div className='flex-grow'>
          <Home />
        </div>  según lo indicado en el desafio */}
        <Cart/>
        <Footer />
      </div>
    </>
  )
}
export default App
