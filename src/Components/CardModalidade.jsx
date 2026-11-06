import './CardModalidade.css'
const CardModalidade = (props) => {
  return (
    <article className="card-modalidade">
      <span className="numero-modalidade" aria-hidden="true">{props.numero}</span>
      <h3>{props.nome}</h3>
      <p>{props.descricao}</p>
    </article>
  )
}

export default CardModalidade
