import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllQuotes } from '../../store/slices/QuotesSlices'
import Quote from './Quote'



const QuotesList = () => {
    const quotes = useSelector(state => state.quotes.value)
    console.log("quotes", quotes);

    const dispatch = useDispatch ();

    useEffect (() => {
        dispatch(getAllQuotes ());
    },[])
    return quotes.map((quote, key) => <Quote quote = {quote} key={key} /> );
}

export default QuotesList