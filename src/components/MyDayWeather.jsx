import { Card, Row, Col } from "react-bootstrap";

const getHour  = (dateMs) =>{
    const dateObject = new Date(dateMs); 
    console.log(dateObject);
    const hours = dateObject.getHours(); 
    return hours;
}

const MyDayWeather = (props) => {
    const dayWeathers = [...props.weatherObj.list].slice(1, 5);
    console.log(dayWeathers);
    return (
        <>
            <h3 className="text-light">Day Weather</h3>
            <Row className="justify-content-center">
                {dayWeathers.map((dayWeather, index) => (
                    <Col sm={3} key={index}>
                        <Card style={{ backgroundColor: "grey" }}>
                            <Card.Body>
                                <Card.Title>{getHour(dayWeather.dt)}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{dayWeather.main.temp} °C</Card.Subtitle>
                                <img src={`http://openweathermap.org/img/wn/${dayWeather.weather[0].icon}.png`} alt="Weather Icon" />
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default MyDayWeather;