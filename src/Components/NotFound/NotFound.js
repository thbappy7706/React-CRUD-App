import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <Jumbotron>
                <h1>Hello, Dear!!!</h1>
                <p>
                    This URL is not Valid
                </p>
                <p>
                    <Link to="/"><Button variant="primary">Please Back</Button> </Link>
                </p>
            </Jumbotron>
        </div>
    );
};

export default NotFound;