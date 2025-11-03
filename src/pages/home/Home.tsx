function Home() {
  return (
    <div className="bg-yellow-400 flex justify-center">
      <div className="container grid grid-cols-2 text-gray-900">
        <div className="flex flex-col gap-4 items-center justify-center py-4">
          <h2 className="text-5xl font-bold">
            Gen Farmacia
          </h2>
          <p className="text-xl">
            Aqui, nos preocupamos com a sua saúde
          </p>

        </div>

        <div className="flex justify-center ">
          <img
            src="https://i.imgur.com/fyfri1v.png"
            alt="Imagem Página Home"
            className="w-2/3"
          />
        </div>
      </div>
    </div>
  )
}

export default Home