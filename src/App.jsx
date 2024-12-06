import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import {pizza} from './data/pizzas'
function App() {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <div className='flex-grow'>
          <Home />
        </div>
        <Footer />
      </div>
    </>
  )
}
export default App
