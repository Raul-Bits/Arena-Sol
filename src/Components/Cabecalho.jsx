import './Cabecalho.css'
const Cabecalho = (props) => {
  return (
    <header className="cabecalho">
      <div className="container cabecalho-conteudo">
        <a className="marca" href="#inicio" aria-label={`${props.nomeArena} — início`}>
          <img className="logo" src={props.logo} alt={props.nomeArena} />
        </a>
        <nav aria-label="Navegação principal">
          <a className="botao botao-amarelo" href="#cadastro">
            <span className="texto-desktop">Cadastre-se</span>
            <span className="texto-celular">Cadastro</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Cabecalho
