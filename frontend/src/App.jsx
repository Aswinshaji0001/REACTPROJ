import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import More from './Components/More'
import Add from './Components/Add'
import Edit from './Components/Edit'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/more/:id" Component={More}></Route>
            <Route path="/add" Component={Add}></Route>
            <Route path="/edit/:id" Component={Edit}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
