import Layout from './components/layout';

import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(){
  return(
    <div className='navbar bg-dark border-bottom border-body" data-bs-theme="dark'>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;