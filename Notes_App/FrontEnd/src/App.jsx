import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Edit_Readmore from './Pages/Edit_Readmore'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/edit/:title' element = {<Edit_Readmore/>} />
    </Routes>
  )
}

export default App
