import { Button, Form } from "react-bootstrap";

const MySearchBar = (props) => {
    return (
        <div className="py-3 input-group flex-nowrap">
            <Form.Control
                aria-label="search"
                type="text"
                name="city"
                placeholder="Insert city..."
                value={props.city}
                onChange={(e) => props.setCity(e.target.value)}
            />
            {/*<InputGroup.Text variant="primary">search</InputGroup.Text>*/}
            <Button variant="dark" disabled>
                search
            </Button>{' '}
        </div>
    )
}

export default MySearchBar;