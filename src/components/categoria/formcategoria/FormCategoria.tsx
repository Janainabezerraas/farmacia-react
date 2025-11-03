import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Services";

function FormCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
             console.error('Erro ao buscar categoria por ID:', error);
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/categorias")
    }

    async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria)
                alert('A Categoria foi atualizada com sucesso!')
            } catch (error: any) {
                alert('Erro ao atualizar a categoria.')
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria)
                alert('A Categoria foi cadastrada com sucesso!')
            } catch (error: any) {
                alert('Erro ao cadastrar a categoria.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8 text-gray-900">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" 
                onSubmit={gerarNovaCategoria} >
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao" className="text-gray-900">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua categoria"
                        name='descricao'
                        className="border-2 border-lime-600 rounded p-2 bg-yellow-100"
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        // categoria descrição # categoria nome
                    />
                </div>
                <button
                    className="rounded text-gray-900 bg-yellow-400 
                               hover:bg-lime-500 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">

                    { isLoading ? 
                        <ClipLoader 
                            color="#65a30d" // Verde-Limão Escuro
                            size={24}
                        /> : 
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    }

                </button>
            </form>
        </div>
    );
}

export default FormCategoria;
