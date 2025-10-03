import * as React from 'react'

function Greeting({initialName = ''}) {
  // Inicializa o estado com o valor do localStorage ou initialName
  const [name, setName] = React.useState(
    () => window.localStorage.getItem('name') ?? initialName
  )

  // Salva o nome no localStorage sempre que ele mudar
  React.useEffect(() => {
    window.localStorage.setItem('name', name)
  }, [name])

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Olá {name}</strong> : 'Por favor, informe seu nome'}
    </div>
  )
}

function Exercicio02() {
  return <Greeting />
}

export default Exercicio02