import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import MyCurrentWeather from "./MyCurrentWeather";
import MySearchBar from "./MySearchBar";


const MyMain = () => {

    const API_KEY = 'a20826c61fc45f9c046856bf342d2c5b';

    const [city, setCity] = useState("Torino");
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const [localName, setLocalName] = useState("");
    const [state, setState] = useState("");

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
                /*console.log("data : ", data);*/
                setLat(data[0].lat);
                setLon(data[0].lon);
                setLocalName(data[0].local_names.it);
                setState(data[0].state);
            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <Container fluid className="vh-100" style={{backgroundColor:"black"}}>
            <MySearchBar city={city} setCity={setCity}/>
            <MyCurrentWeather city={city} lat={lat} lon={lon} localName={localName} state={state}/>
               
            {/*<Row>
                <Col sm={4}>
                    <MyWeekWeather />
                </Col>
                <Col sm={4}>
                    <MyWeekWeather />
                </Col>
                <Col sm={4}>
                    <MyWeekWeather />
                </Col>
            </Row>*/}
        </Container >
    );
};

export default MyMain;
