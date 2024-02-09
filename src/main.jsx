import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from '../components/Header.jsx'
import Card from '../components/Card.jsx'
import './index.css'
import locations from './data.js'

const cardArray = locations.map((e)=>{
	return (
	<Card
	  key = {e.locationName}
	  Country = {e.Country}
	  locationName = {e.locationName}
	  date = {e.date}
	  description = {e.description}
	  image = {e.image}
	/>
	)
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    {cardArray}
  </React.StrictMode>,
)
