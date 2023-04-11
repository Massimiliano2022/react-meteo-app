import { Card, Row, Col } from "react-bootstrap";


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
                                <Card.Title>City</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">°C</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default MyDayWeather;