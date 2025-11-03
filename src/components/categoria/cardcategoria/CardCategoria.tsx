import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps{
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      
      <header className='py-2 px-6 bg-lime-600 text-gray-900 font-bold text-2xl'>Categoria</header>
      

      <p className='p-8 text-3xl bg-yellow-100 h-full'>{categoria.descricao}</p>

      <div className='flex'>
        <Link to={`/editarcategoria/${categoria.id}`}
          className='w-full text-gray-900 bg-yellow-400 hover:bg-lime-500
          flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>

        <Link to={`/deletarcategoria/${categoria.id}`}
          className='text-white bg-red-500 hover:bg-red-700 w-full
          flex items-center justify-center py-2'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategoria