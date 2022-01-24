import React from "react";
import { Container } from "./elements";

const DashboardCards = ({text, value, measure}) => {

    return (
        <Container>
            <h2>{text}</h2>
            <p>{value}{measure !== '' && <span>{measure}</span>}</p>
        </Container>
    )
};

export default DashboardCards;
