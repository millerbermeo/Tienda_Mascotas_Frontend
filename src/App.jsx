import {Routes, Route} from 'react-router-dom'
import Inicio from './pages/Inicio'
import Dashboard from './pages/Dashboard'
import Karsten from './pages/Karsten'
import Alex from './pages/Alex'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/karsten' element={<Karsten/>}/>
        <Route path='/alex' element={<Alex/>}/>
      </Routes>
    </>
  )
}

export default App
