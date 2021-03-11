import React from 'react';
import Logo from '../../core/assets/images/logo-3corp.png'
import { ButtonItem, ButtonItemDownload } from '../../core/components/Button/index'
const name = () => {
    return (
        <div className="home-container">
            <img className="logo" src={Logo} alt="Logo" />
            <div className="box">
                <div className="container-fluid">
                    <div id="form">
                        <h5 className="text-center mb-1">Formulários</h5>
                        <p className="information">O formulário pode estar privado para membros da empresa ou pessoas específicas.</p>
                        <ButtonItem name="✔️ Checklist de Verificação do Sistema - DF" link="https://forms.office.com/r/Vc2yxrOKWx" />
                        <ButtonItem name="🚚 Utilização do Correios" link="https://forms.office.com/r/Kl_edNGHod" />
                        <hr />
                    </div>
                    <div id="downloads">
                        <h5 className="text-center mb-1">Downloads</h5>
                        <p className="information">Alguns arquivos são destinados aos colaboradores da 3corp.</p>
                        <ButtonItemDownload name="⏰Justificativa de ponto ⬇️" link="https://intranet.3corp.com.br/fotos/DOC_709629.pdf" />
                        <ButtonItemDownload name="⏰ Solicitação de pagamento de horas adicionais ⬇️" link="https://intranet.3corp.com.br/fotos/DOC_648040.xlsx" />
                        <ButtonItemDownload name="⏰ Solicitação de pagamento de horas extras ⬇️" link="https://intranet.3corp.com.br/fotos/DOC_357291.xlsx" />
                        <ButtonItemDownload name="💰 Formulário de reembolsos de despesas ⬇️" link="https://intranet.3corp.com.br/fotos/DOC_644609.xlsx" />
                        <hr />
                    </div>
                    <div id="links">
                        <h5 className="text-center mb-1" >Links Úteis</h5>
                        <div className="d-flex justify-content-around">
                            <ButtonItem name="👨‍💻 Zendesk" link="https://3corp.zendesk.com/" />
                            <ButtonItem name="🌐 Site da 3corp" link="https://www.3corp.com.br" />
                        </div>
                        <div className="d-flex justify-content-around">
                            <ButtonItem name="🌐 Intranet 3corp 🔐" link="https://intranet.3corp.com.br" />
                        </div>
                        <hr />
                    </div>
                    <div id="doubts">
                        <h5 className="text-center mb-1" >Dúvidas/Sugestões nesse linktree:</h5>
                        <div className="d-flex justify-content-center align-items-center flex-column text-center">
                            <a href="mailto:pedro.rodrigues@3corp.com.br">Pedro Rodrigues - pedro.rodrigues@3corp.com.br</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default name;
