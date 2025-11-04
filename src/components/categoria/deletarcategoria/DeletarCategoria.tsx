import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Services";

function DeletarCategoria() {
    
    const navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            console.error('Erro ao buscar categoria:', error)
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`)
            alert("Categoria apagada com sucesso")
        } catch (error: any) {
            alert("Erro ao deletar a categoria.")
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4 text-gray-900'>Deletar Categoria</h1>
            <p className='text-center font-semibold mb-4 text-gray-900'>
                Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-lime-600 text-gray-900 font-bold text-2xl'>
                    Categoria
                </header>
                <p className='p-8 text-3xl bg-yellow-100 h-full'>{categoria.descricao}</p>
                <div className="flex">
                    <button 
                        className='text-white bg-red-500 hover:bg-red-700 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-gray-900 bg-yellow-400 
                                   hover:bg-lime-500 flex items-center justify-center py-2'
                        onClick={deletarCategoria}>
                    {isLoading ?
                    <ClipLoader
                        color="#65a30d" // Cor Vede-Limão
                        size={24}
                        />:
                    
                        <span>Sim</span>

                    }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria