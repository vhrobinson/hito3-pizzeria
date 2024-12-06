import Header from "./components/Header"
import CardPizza from "./components/CardPizza"
import {pizzas} from "./components/data/pizzas"


import "./Home.css"
function Home() {

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="grid-container">
        {
          pizzas.map((pizza) => {
            return <div key={pizza.id}>  
                <CardPizza
                  imagecrc={pizza.img}
                  title={pizza.name}
                  description={
                    <li>
                      {pizza.ingredients.map((ingrediente, index) => (
                        <li key={index}>{ingrediente}</li>
                      ))}
                    </li>
                  }
                  price={pizza.price}
                /> </div>
             
             
            })
           
          }
      </div>

    </>
  )
}



export default Home