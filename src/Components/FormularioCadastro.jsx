import './FormularioCadastro.css'
import { useState } from 'react'

const FormularioCadastro = (props) => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [modalidade, setModalidade] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [erros, setErros] = useState({})
  const [clienteCadastrado, setClienteCadastrado] = useState(null)

  const alterarCampo = (atualizarEstado, campo, valor) => {
    atualizarEstado(valor)
    setErros((errosAnteriores) => ({ ...errosAnteriores, [campo]: '' }))
    setMensagem('')
  }

  const limparFormulario = () => {
    setNome('')
    setEmail('')
    setTelefone('')
    setModalidade('')
    setErros({})
    setMensagem('')
    setClienteCadastrado(null)
  }

  const cadastrarCliente = (evento) => {
    evento.preventDefault()

    // Monta um objeto com os erros de cada campo.
    const novosErros = {}
    const telefoneNumerico = telefone.replace(/\D/g, '')
    const modalidadesDisponiveis = ['Beach tennis', 'Vôlei de praia', 'Futevôlei']

    if (nome.trim() === '') {
      novosErros.nome = 'Informe seu nome completo.'
    }

    if (email.trim() === '') {
      novosErros.email = 'Informe seu e-mail.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      novosErros.email = 'Informe um e-mail válido.'
    }

    if (telefone.trim() === '') {
      novosErros.telefone = 'Informe seu telefone com DDD.'
    } else if (
      !/^[\d\s()+.-]+$/.test(telefone) ||
      (telefoneNumerico.length !== 10 && telefoneNumerico.length !== 11)
    ) {
      novosErros.telefone = 'Use um telefone com DDD, de 10 ou 11 dígitos.'
    }

    if (!modalidadesDisponiveis.includes(modalidade)) {
      novosErros.modalidade = 'Escolha uma modalidade.'
    }

    setErros(novosErros)

    if (Object.keys(novosErros).length > 0) {
      setMensagem('Revise os campos destacados para continuar.')
      document.getElementById(Object.keys(novosErros)[0])?.focus()
      return
    }

    const novoCliente = {
      nome: nome.trim(),
      email: email.trim(),
      telefone: telefoneNumerico,
      modalidade: modalidade,
    }

    props.aoCadastrar(novoCliente)
    setClienteCadastrado(novoCliente)
    setMensagem('Tudo certo! Você já faz parte da Arena Sol.')
    setNome('')
    setEmail('')
    setTelefone('')
    setModalidade('')
  }

  return (
    <section id="cadastro" className="area-cadastro container" aria-labelledby="titulo-cadastro">
      <div className="cadastro-apresentacao">
        <p className="sobretitulo">Faça parte da arena</p>
        <h1 id="titulo-cadastro">A próxima jogada é sua.</h1>
        <p className="descricao">Preencha seus dados e escolha a modalidade que mais combina com você.</p>
      </div>

      <div className="cadastro-painel">
        {clienteCadastrado ? (
          <div className="confirmacao" aria-labelledby="titulo-confirmacao">
            <span className="icone-sucesso" aria-hidden="true">✓</span>
            <h2 id="titulo-confirmacao">Cadastro realizado!</h2>
            <p>{clienteCadastrado.nome}, seu interesse em {clienteCadastrado.modalidade} foi registrado com sucesso.</p>
            <p className="mensagem sucesso" role="status">{mensagem}</p>
            <button className="botao" type="button" onClick={limparFormulario}>Cadastrar outra pessoa</button>
            <a className="botao" href="#inicio">Voltar ao início</a>
          </div>
        ) : (
          <form className="formulario" onSubmit={cadastrarCliente} noValidate aria-labelledby="titulo-formulario">
            <h2 id="titulo-formulario">Cadastro de cliente</h2>
            <p className="legenda">Todos os campos são obrigatórios.</p>

            {mensagem !== '' && <p className="mensagem erro" role="alert">{mensagem}</p>}

            <div className="campo">
              <label htmlFor="nome">Nome completo *</label>
              <input
                id="nome"
                name="nome"
                type="text"
                autoComplete="name"
                placeholder="Digite seu nome completo"
                value={nome}
                onChange={(evento) => alterarCampo(setNome, 'nome', evento.target.value)}
                aria-invalid={Boolean(erros.nome)}
                aria-describedby={erros.nome ? 'erro-nome' : undefined}
                required
              />
              {erros.nome && <p className="erro-campo" id="erro-nome">{erros.nome}</p>}
            </div>

            <div className="campo">
              <label htmlFor="email">E-mail *</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="voce@exemplo.com"
                value={email}
                onChange={(evento) => alterarCampo(setEmail, 'email', evento.target.value)}
                aria-invalid={Boolean(erros.email)}
                aria-describedby={erros.email ? 'erro-email' : undefined}
                required
              />
              {erros.email && <p className="erro-campo" id="erro-email">{erros.email}</p>}
            </div>

            <div className="campo">
              <label htmlFor="telefone">Telefone com DDD *</label>
              <input
                id="telefone"
                name="telefone"
                type="tel"
                autoComplete="tel"
                placeholder="(88) 99999-9999"
                value={telefone}
                onChange={(evento) => alterarCampo(setTelefone, 'telefone', evento.target.value)}
                aria-invalid={Boolean(erros.telefone)}
                aria-describedby={erros.telefone ? 'erro-telefone' : undefined}
                required
              />
              {erros.telefone && <p className="erro-campo" id="erro-telefone">{erros.telefone}</p>}
            </div>

            <div className="campo">
              <label htmlFor="modalidade">Modalidade de interesse *</label>
              <select
                id="modalidade"
                name="modalidade"
                value={modalidade}
                onChange={(evento) => alterarCampo(setModalidade, 'modalidade', evento.target.value)}
                aria-invalid={Boolean(erros.modalidade)}
                aria-describedby={erros.modalidade ? 'erro-modalidade' : undefined}
                required
              >
                <option value="">Selecione uma modalidade</option>
                <option value="Beach tennis">Beach tennis</option>
                <option value="Vôlei de praia">Vôlei de praia</option>
                <option value="Futevôlei">Futevôlei</option>
              </select>
              {erros.modalidade && <p className="erro-campo" id="erro-modalidade">{erros.modalidade}</p>}
            </div>

            <button className="botao" type="submit">Cadastrar <span aria-hidden="true">→</span></button>
          </form>
        )}
        <p className="contador" role="status">Cadastros nesta sessão: {props.totalClientes}</p>
      </div>
    </section>
  )
}

export default FormularioCadastro
