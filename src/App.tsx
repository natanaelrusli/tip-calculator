import './App.scss'
import CalculatorForm from './components/CalculatorForm'
import Card from './components/Card'
import Container from './components/Container'

function App() {
  return (
    <div className="app">
      <Container type='center'>
        <p>SPLI</p>
        <p>TTER</p>
        <Card>
          <CalculatorForm />
        </Card>
      </Container>
    </div>
  )
}

export default App
