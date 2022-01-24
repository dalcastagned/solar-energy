import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
    Container,
    Label
} from './elements'

const InputDate = ({ label, date, setDate, setError }) => {

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
