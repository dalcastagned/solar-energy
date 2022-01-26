import React from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import * as S from './elements'

const InputDate = ({ label, date, setDate, setError }) => {

    return (
        <>
            <S.Label>{label}</S.Label>
            <S.Container>
                <DatePicker className='datepicker'
                    selected={date}
                    onChange={(date) => {setDate(date)}}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                    showFullMonthYearPicker
                />
            </S.Container>
        </>
    )
};

export default InputDate;
