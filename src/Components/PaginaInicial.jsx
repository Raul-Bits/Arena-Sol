import './PaginaInicial.css'
import CardModalidade from './CardModalidade'
import IlustracaoQuadra from './IlustracaoQuadra'

const PaginaInicial = () => {
  return (
    <>
      <section id="inicio" className="apresentacao container" aria-labelledby="titulo-inicio">
        <div className="apresentacao-texto">
          <p className="sobretitulo">Esporte ao ar livre · Arena Sol</p>
          <h1 id="titulo-inicio">Seu próximo desafio começa na areia.</h1>
          <p className="descricao">
            Um espaço para praticar esportes, reunir os amigos e desenvolver
            novas habilidades. Vem jogar com a gente!
          </p>
          <a className="botao" href="#cadastro">Quero fazer parte <span aria-hidden="true">→</span></a>
        </div>
        <IlustracaoQuadra />
      </section>

      <section className="secao modalidades" aria-labelledby="titulo-modalidades">
        <div className="container">
          <h2 id="titulo-modalidades">Encontre o seu esporte.</h2>
          <p className="descricao descricao-secao">Três modalidades. Muitas formas de se movimentar.</p>
          <div className="grade-modalidades">
            <CardModalidade numero="01" nome="Beach tennis" descricao="Raquetes, movimento e diversão para todos os níveis." />
            <CardModalidade numero="02" nome="Vôlei de praia" descricao="Reúna sua dupla e aproveite cada jogada na areia." />
            <CardModalidade numero="03" nome="Futevôlei" descricao="Habilidade com os pés e energia a cada ponto." />
          </div>
        </div>
      </section>

      <section className="secao" aria-labelledby="titulo-diferenciais">
        <div className="container">
          <h2 id="titulo-diferenciais">A estrutura para o seu melhor jogo.</h2>
          <div className="grade-diferenciais">
            <article><h3>Quadras iluminadas</h3><p>Mais conforto para jogar no fim do dia.</p></article>
            <article><h3>Ambiente acolhedor</h3><p>Espaço para reunir amigos e conhecer pessoas.</p></article>
            <article><h3>Todos os níveis</h3><p>Do primeiro contato aos novos desafios.</p></article>
          </div>
        </div>
      </section>

      <section className="secao chamada-cadastro" aria-labelledby="titulo-chamada">
        <div className="container">
          <h2 id="titulo-chamada">Seu próximo jogo começa aqui.</h2>
          <p>Cadastre seu interesse e venha fazer parte da Arena Sol.</p>
          <a className="botao" href="#cadastro">Fazer meu cadastro <span aria-hidden="true">→</span></a>
        </div>
      </section>
    </>
  )
}

export default PaginaInicial
