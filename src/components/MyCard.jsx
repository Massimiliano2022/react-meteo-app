import { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";

const MyCard = (props) => {

    const [weatherObj, setWeatherObj] = useState({});

    const API_KEY = 'a20826c61fc45f9c046856bf342d2c5b';

    const fetchWeather = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=${API_KEY}`);

            if (response.ok) {
                const data = await response.json();
                console.log("data : ", data);
                setWeatherObj(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if(props.lat){
            fetchWeather();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.lat]);

    return (
        <>
            {weatherObj ? (
                <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            ) : (
                <Spinner variant="success" animation="grow" />
            )}
        </>
    );
}
export default MyCard;