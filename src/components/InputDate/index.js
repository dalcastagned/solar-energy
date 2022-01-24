import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
    Container,
    Label,
    InputItem,
    ErrorText,
} from './elements'

const InputDate = ({ label, errorMessage, errorText, date, setDate, setError }) => {

    return (
        <>
            <Label>{label}</Label>
            <Container>
                <DatePicker className='datepicker'
                    selected={date}
                    onChange={(date) => {setDate(date)}}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                    showFullMonthYearPicker
                />
            </Container>
        </>
    )
};

export default InputDate;
