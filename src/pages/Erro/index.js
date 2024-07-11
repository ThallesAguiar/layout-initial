import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Erro extends Component {
    render() {
        return (
            <>
                <div>Pagina não encontrada</div>
                <Link to="/">Ir para home</Link>
            </>
        )
    }
}
