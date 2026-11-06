import './Rodape.css'
const Rodape = (props) => {
  return (
    <footer className="rodape">
      <div className="rodape-conteudo">
        <a href="#inicio" className="marca-rodape">{props.nomeArena}</a>
        <p>Esporte, areia e boas conexões.</p>
      </div>
    </footer>
  )
}

export default Rodape
