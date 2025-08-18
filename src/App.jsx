import DataAtom from './components/DataAtom/DataAtom.jsx'
import DataCard from './components/DataCard/DataCard.jsx'
import './App.css'

const data = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  key4: "value4"
}

function App() {

  return (
    <>
      <DataCard data={data} title="Dados gerais"/>
    </>
  )
}

export default App
