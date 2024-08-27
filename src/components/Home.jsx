import Header from './Header'
import CardPizza from './CardPizza'
import './Home.css'
import { pizzas } from '../pizzas'
import { useState } from 'react'

const Home = () => {
  const [listaPizzas, setListaPizzas] = useState(pizzas)
  return (
    <>
      <Header />
      <div className="Cards-pizzas">
        {listaPizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            desc={pizza.desc}
          />
        ))}
      </div>
    </>
  )
}
export default Home
