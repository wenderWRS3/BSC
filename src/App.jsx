import Header from './componentes/Header'
import Main from './componentes/Main'
import Log from './paginalog/Log.jsx'
import { useState } from 'react'
export default function App() {
  const [button, setButton] = useState(false);
  return (
      <div>
      <Header setButton={setButton} />
      {button ? <Main /> : <Log />}
    </div>
  )
}