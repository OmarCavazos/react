import React from 'react'
import CursosList from './CursosList';

const CursosListContainer = () => {
    const cursos = [
        {
        nombre: "react",
        numero: "1",
        info:"Info de react",
        },
        {
        nombre: "html",
        numero: "2",
        info:"Info de html",
        },
        {
        nombre: "CSS",
        numero: "3",
        info:"Info de CSS",
        },
        {
        nombre: "Javascript",
        numero: "4",
        info:"Info de Javascript",
        },
    ];
    return <CursosList cursos={cursos} />
};

export default CursosListContainer;