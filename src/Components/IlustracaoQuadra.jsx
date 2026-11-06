import './IlustracaoQuadra.css'
import quadra from '../assets/quadra-realista.png'

const IlustracaoQuadra = () => {
  return (
    <figure className="ilustracao-quadra">
      <img
        src={quadra}
        alt="Imagem ilustrativa de uma quadra de esportes de areia ao ar livre"
        width="1536"
        height="1024"
      />
      <figcaption>Seu lugar para viver o esporte.</figcaption>
    </figure>
  )
}

export default IlustracaoQuadra
