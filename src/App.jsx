import './App.css'
import Botao from './components/Botao'
import Cabecalho from './components/Cabecalho'
import Condicional from './components/Condicional'
import Div from './components/Div'
import Imagem from './components/Imagem'
import Link from './components/Link'
import Lista from './components/Lista'
import Paragrafo from './components/Paragrafo'
import Saudacao from './components/Saudacao'
import Titulo from './components/Titulo'

function App() {

  return (
    <>
    <Cabecalho />
    <Saudacao/>
    <Paragrafo/>
    <Lista/>
    <Imagem/>
    <Botao/>
    <Link/>
    <Titulo />
    <Condicional condicional={false}/>
    <Div/>
  
    </>
  )
}

export default App
