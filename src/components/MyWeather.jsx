import { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";

const MyWeather = (props) => {

    const [weatherObj, setWeatherObj] = useState();
    const [loading, setLoading] = useState(true)


    const API_KEY = 'a20826c61fc45f9c046856bf342d2c5b';

    const fetchWeather = async () => {
        try {

            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.lon}&appid=${API_KEY}&units=metric`)

            /*const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=${API_KEY}`);*/

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
        if (props.localName) {
            fetchWeather();
            setLoading(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.localName]);

    return (
        <>
            {!loading ? (
                <Card>
                    <Card.Body>
                        <Card.Title>{props.localName}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{weatherObj.city.country}</Card.Subtitle>
                        <Card.Text>{weatherObj.list[0].main.temp}</Card.Text>
                        <Card.Text>{weatherObj.list[0].weather[0].main}</Card.Text>
                    </Card.Body>
                </Card>
            ) : (
                <Spinner variant="primary" animation="grow" />
            )}

        </>
    );
}
export default MyWeather;