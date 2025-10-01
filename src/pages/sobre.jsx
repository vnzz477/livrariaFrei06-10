import Cabecalho from "../components/cabecalho"
import './sobre.scss'

export default function Sobre() {
    return(
        <div>
        <Cabecalho />
        <hr />
        <p>Bem-vindo à nossa tela de sobre! Aqui você encontrará informações sobre a nossa livraria, nossa missão de promover a leitura e o amor pelos livros, além de detalhes sobre nossa equipe apaixonada e os eventos que realizamos. Explore e descubra tudo o que temos a oferecer!</p>

        <div className="rodape">
  <div className="coluna">
    <img src="/agenda.jpg" height="80" alt="Logo" />
    <h4>Contato</h4>
    <p>(11) 91690-5383</p>
    <p>livraria@frei.com.br</p>
  </div>

  <div className="coluna">
    <h4>Desenvolvido por</h4>
    <p>sergio ramalho macedo junior</p>
    <p>PROF: pedro</p>
    
  </div>

  <div className="coluna">
    <h4>Turma</h4>
    <p>INFO-a</p>
  </div>
</div>

<div className="rodape-final">
  <p>2025 © Instituto Nossa Senhora de Fátima</p>
</div>

        </div>
    )
}