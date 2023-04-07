import { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";

const MyWeather = (props) => {

    const [weatherObj, setWeatherObj] = useState({});
    const [loading, setLoading] = useState(true)


    const API_KEY = 'a20826c61fc45f9c046856bf342d2c5b';

    const fetchWeather = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=${API_KEY}`);

            if (response.ok) {
                const data = await response.json();
                console.log("data : ", data);
                setWeatherObj(data);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (props.lat) {
            fetchWeather();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.lat]);

    return (
        <>
            {!loading ? (
                <Card>
                    <Card.Title>{weatherObj.name}</Card.Title>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            ) : (
                <Spinner variant="primary" animation="grow" />
            )}

        </>
    );
}
export default MyWeather;