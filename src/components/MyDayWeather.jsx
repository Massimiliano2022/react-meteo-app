import { Card, Row, Col, Carousel } from "react-bootstrap";

const getHourFromMs = (dateMs) => {
    const date = new Date(dateMs * 1000);
    /*console.log(date);*/
    const hours = date.getHours() +":00";
    return hours;
}

const MyDayWeather = (props) => {
    const dayWeathers = [...props.weatherObj.list].slice(0, 5);
    return (
        <>
            <h3 className="text-light">Day Weather</h3>
            <Row className="justify-content-center">
                <Carousel>
                    {dayWeathers.map((dayWeather, index) => (
                        <Carousel.Item key={index}>
                            <Col>
                                <Card style={{ backgroundColor: "grey" }}>
                                    <Card.Body>
                                        <Card.Title>{getHourFromMs(dayWeather.dt)}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{dayWeather.main.temp} °C</Card.Subtitle>
                                        <img src={`http://openweathermap.org/img/wn/${dayWeather.weather[0].icon}.png`} alt="Weather Icon" />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Row>
        </>
    );
}

export default MyDayWeather;