import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';

const WeatherCard = ({dt, temp_min, temp_max, main, icon, name}) => {
    const date = new Date(dt);
    return(
        <Card style={{marginTop: 50, width: 225, justifyContent:"center", alignItems:"center", display:"flex", flexDirection:"column"}}>
            <CardMedia style={{height: 100, width: 100}}
                image={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            />
            <CardContent style={{justifyContent:"center", alignItems:"center", display:"flex", flexDirection:"column"}}>
                <Typography variant="h5" component="h2">{name}</Typography>
                <Typography color="textSecondary">{main}</Typography>
                <Typography>{date.toLocaleDateString()} - {date.toLocaleTimeString()}</Typography>
                <Typography>{temp_min}°C - {temp_max}°C</Typography>
            </CardContent>
        </Card>
    );
};

export default WeatherCard;