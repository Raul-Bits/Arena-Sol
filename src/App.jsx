import { useEffect, useState } from 'react'
import Cabecalho from './Components/Cabecalho'
import PaginaInicial from './Components/PaginaInicial'
import FormularioCadastro from './Components/FormularioCadastro'
import Rodape from './Components/Rodape'
import logoArena from './assets/logo-arena-sol.png'


const identificarPagina = () => (
  window.location.hash === '#cadastro' ? 'cadastro' : 'inicio'
)

const App = () => {
  const [pagina, setPagina] = useState(identificarPagina)
  const [clientes, setClientes] = useState([])

  useEffect(() => {
    const atualizarPagina = () => {
      setPagina(identificarPagina())
      window.scrollTo(0, 0)
    }

    window.addEventListener('hashchange', atualizarPagina)
 
    return () => window.removeEventListener('hashchange', atualizarPagina)
  }, [])

  const adicionarCliente = (novoCliente) => {
    setClientes((clientesAnteriores) => [
      ...clientesAnteriores,
      novoCliente,
    ])
  }

  return (
    <>
      <a
        className="pular-conteudo"
        href="#conteudo"
        onClick={(evento) => {
          evento.preventDefault()
          document.getElementById('conteudo').focus()
        }}
      >
        Ir para o conteúdo
      </a>
      <Cabecalho nomeArena="Arena Sol" logo={logoArena} />
      <main id="conteudo" tabIndex={-1}>
        {pagina === 'inicio' ? (
          <PaginaInicial />
        ) : (
          <FormularioCadastro
            aoCadastrar={adicionarCliente}
            totalClientes={clientes.length}
          />
        )}
      </main>
      <Rodape nomeArena="Arena Sol" />
    </>
  )
}

export default App
