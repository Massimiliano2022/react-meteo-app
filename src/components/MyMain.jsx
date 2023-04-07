import { useEffect, useState } from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import MyWeather from "./MyWeather";

const MyMain = () => {

    const API_KEY = 'a20826c61fc45f9c046856bf342d2c5b';

    const [city, setCity] = useState("Torino");
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");

    useEffect(() => {
        let timer;
        if (city !== "") {
            timer = setTimeout(() => {
                handleSubmit();
            }, 3000);
        }

        return () => {
            clearTimeout(timer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [city]);

    const handleSubmit = async () => {
        console.log(city);

        try {
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`);

            if (response.ok) {
                const data = await response.json();
                console.log("data : ", data);
                setLat(data[0].lat);
                setLon(data[0].lon);
            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col>
                    <div className="my-3 input-group flex-nowrap">
                        <Form.Control 
                            aria-label="search" 
                            type="text"
                            name="city"
                            placeholder="Insert city..."
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            />
                         <InputGroup.Text>search</InputGroup.Text>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col>
                    <MyWeather city={city} lat={lat} lon={lon} />
                </Col>
            </Row>
        </Container >
    );
};

export default MyMain;
