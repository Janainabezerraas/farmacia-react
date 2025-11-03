import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias';
import FormCategoria from './components/categoria/formcategoria/FormCategoria';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh]">
        <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path="/categorias" element={<ListaCategorias />} />
      <Route path="/cadastrarcategoria" element={<FormCategoria />} />
<Route path="/editarcategoria/:id" element={<FormCategoria />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;