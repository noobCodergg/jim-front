
import CreateProject from './Pages/CreateProject'
import Main from './Pages/Main'
import {Routes,Route} from 'react-router-dom'
import ProjectDetail from './Pages/ProjectDetail'
import ManageProject from './Pages/ManageProject'
import Login from './Pages/Login'
function App() {
 
  return (
    <div className='font-raleway'>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/createproject' element={<CreateProject/>}/>
        <Route path='/projectdetail/:id' element={<ProjectDetail/>}/>
        <Route path='/manageproject' element={<ManageProject/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
