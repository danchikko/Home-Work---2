import React from "react";
import Comment from "./components/Comment";




const showingDate = {
	date: new Date('04.11.2020'),
	text: 'Purchased car',
	price: 120000,
	author: {
		name: 'Lamborghini Aventador',
		photoUrl: 'https://www.a777aa77.ru/lamborghini-2/2021-lamborghini-aventador-lp-780-4-ultimae-lb834.jpg'
	}
}

function App() {
	return (
		<div>
			<Comment 
			date={showingDate.date}
			text={showingDate.text}
			price={showingDate.price}
			author={showingDate.author}
			/>
		</div>
	)
}

export default App;
