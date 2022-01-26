import React from "react";

import * as S from "./elements";

const DashboardCards = ({text, value, measure}) => {

    return (
        <S.Container>
            <h2>{text}</h2>
            <p>{value}{measure !== '' && <span>{measure}</span>}</p>
        </S.Container>
    )
};

export default DashboardCards;
