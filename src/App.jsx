import stlyed from 'styled-components'
import logo from './logo.svg'
import GridTable from './components/gridTable'
import './App.css'

const Container = stlyed.div`
  width: 800px;
  overflow-x: scroll;
`

function App() {
  return (
    <div className="App">
      <GridTable />
    </div>
  )
}

export default App
