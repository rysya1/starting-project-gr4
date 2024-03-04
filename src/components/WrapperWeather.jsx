import React from 'react'
import SearchComp from './SearchComp'
import Card from './Card'
import classes from './WrapperWeather.module.css'

const WrapperWeather = () => {
	let weather = [
		{
			id: 'e1',
			nameCity: 'Paris',
			temperature: '9 c',
			weatherPhoto: 'https://img.icons8.com/ios/70/downpour.png',
			weatherDescription: 'Light intensity drizzle',
		},
		{
			id: 'e2',
			nameCity: 'Melbourne',
			temperature: '15 c',
			weatherPhoto: 'https://img.icons8.com/ios/70/do-not-disturb-2.png',
			weatherDescription: 'Clear sky',
		},
	]
	return (
		<div>
			<SearchComp />
			<div className={classes.wrapper_weather}>
				{weather.map((element, index, arr) => {
					return (
						<Card
							key={element.id}
							nameCity={element.nameCity}
							temperature={element.temperature}
							weatherPhoto={element.weatherPhoto}
							weatherDescription={element.weatherDescription}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default WrapperWeather
