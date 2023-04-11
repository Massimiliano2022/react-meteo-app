import { useEffect, useState } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import MyDayWeather from "./MyDayWeather";

const MyCurrentWeather = (props) => {

    const [weatherObj, setWeatherObj] = useState();
    const [loading, setLoading] = useState(true)


    /*const getDateFromMs = (dateMs) => {
        const date = new Date(dateMs * 1000);
        console.log(date);
        return date;
    }*/

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
            <h3 className="text-light">Current Weather</h3>
            {<Row className="justify-content-center">
                <Col>
                    {!loading ? (
                        <>
                            <Card className="mb-3" style={{ backgroundColor: "grey" }}>
                                <Card.Body>
                                    <Card.Title>{props.localName}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{props.state}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">{weatherObj.city.country}</Card.Subtitle>
                                    <Card.Text>{weatherObj.list[0].dt_txt}</Card.Text>
                                    <Card.Text>{weatherObj.list[0].main.temp}°C</Card.Text>
                                    <Card.Text>{weatherObj.list[0].weather[0].main}</Card.Text>
                                    <img src={`http://openweathermap.org/img/wn/${weatherObj.list[0].weather[0].icon}.png`} alt="Weather Icon" />
                                </Card.Body>
                            </Card>
                            <MyDayWeather weatherObj={weatherObj}/>
                        </>
                    ) : (
                        <Spinner variant="dark" animation="grow" />
                    )}
                </Col>
            </Row>
            }
        </>
    );
}
export default MyCurrentWeather;