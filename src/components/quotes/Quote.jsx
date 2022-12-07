import { Link } from "react-router-dom"

const Quote = ({quote}) => {
    return (
        <div>
            <Link to={`/quote/${quote.character}`} >
                <h3>{quote.character}</h3>
            </Link>
            <img src={`${quote.image}`} alt="" />
            <h6>{quote.quote}</h6>
        </div>
    )
}

export default Quote