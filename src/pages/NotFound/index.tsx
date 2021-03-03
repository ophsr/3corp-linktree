import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Spaceman } from '../../core/assets/images/spaceman.svg'


const NotFound = () => {
    return (
        <div className="notFound">
            <div className="m-0 row">
                <div className="pl-0 col-md-6 align-self-center">
                    <Spaceman />
                </div>
                <div className="col-md-6 align-self-center">
                    <h1>404 - Página não encrontrada</h1>
                    <h2>Ahh não, você está perdido!</h2>
                    <p className="text-white text-justify">A página que você está procurando não existe. Como você chegou aqui é um mistério. Mas você pode clicar no botão abaixo para voltar para a página inicial.</p>
                    <div className="d-flex justify-content-center">
                        <Link className="btn btn-primary btn-block" to="/" role="button">HOME</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default NotFound;