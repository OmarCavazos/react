import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getQuoteByName } from "../../store/slices/QuotesSlices"

const CharacterQuote = () => {
    const dispatch = useDispatch();
    
    const quote = useSelector(state => state.quotes.value);
    
    const {name} = useParams();
    
    useEffect(() => {
        dispatch(getQuoteByName(name))
    }, [dispatch])

    return <div>
            <h3>{quote[0]?.character}</h3>
            <img src={`${quote[0]?.image}`} alt="" />
            <h6>{quote[0]?.quote}</h6>
    </div>
}

export default CharacterQuote