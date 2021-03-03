import React from 'react';
import Logo from '../../core/assets/images/logo-3corp.png'
import ButtonItem from '../../core/components/Button/index'
const name = () => {
    return (
        <div className="home-container">
            <img className="logo" src={Logo} alt="Logo" />
            <div className="box">
                <div className="container-fluid">
                    <h5 className="text-center mb-1">Formulários</h5>
                    <ButtonItem name="✔️ Checklist de Verificação do Sistema - DF" link="https://forms.office.com/r/Vc2yxrOKWx" />
                    <ButtonItem name="🚚 Utilização do Correios" link="https://forms.office.com/r/Kl_edNGHod" />
                    <p className="information">O formulário pode estar privado para membros da empresa ou pessoas específicas.</p>
                    <hr />
                    <h5 className="text-center mb-1" >Links Úteis</h5>
                    <div className="d-flex justify-content-around">
                        <ButtonItem name="👨‍💻 Zendesk" link="https://3corp.zendesk.com/" />
                        <ButtonItem name="🌐 Site da 3corp" link="https://www.3corp.com.br" />
                    </div>
                    <hr />
                    <h5 className="text-center mb-1" >Dúvidas/Sugestões nesse linktree:</h5>
                    <div className="d-flex justify-content-center align-items-center flex-column text-center">
                        <a href="malito:pedro.rodrigues@3corp.com.br">Pedro Rodrigues - pedro.rodrigues@3corp.com.br</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default name;