import React from 'react'
import classes from './Card.module.css'

const Card = (props) => {
    console.log(props);
	return (
		<div className={classes.card}>
			<p className={classes.name_city}>{props.nameCity}</p>
			<h1>{props.temperature}</h1>
			<img src={props.weatherPhoto} alt='' /> 
			<p className={classes.weather}>{props.weatherDescription}</p>
		</div>
	)
}

export default Card
