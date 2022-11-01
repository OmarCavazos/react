import React from 'react'
import InfoDetail from './InfoDetail'

const InfoContainer = () => {
    let info = "mucha info..."
    return <InfoDetail nombre="Curso de React" numero="1" info={info}/>
    
};

export default InfoContainer;