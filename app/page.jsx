
export default function Home() {
  return (
    <div className="h-screen bg-blue-200">
      <div className="flex relative l-screen">
        <img src="/home/lua.webp" alt="lua" className="w-44 h-34 md:w-66 md:h-51 md:mt-5 mt-1 -mr-20 md:ml-1 -ml-4" />
        <img src="/home/logo.webp" alt="Clara Rossetti" className="w-64 h-40 md:w-84 md:h-60 ml-auto md:mr-110 -mr-1 -mt-10 md:-mt-7"/>
      </div>
      <div className="flex relative l-screen">
        <img src="/home/fone.webp" alt="Fone de ouvido" className="w-20 h-20 md:ml-60 ml-15 mt-7 md:mt-10" />
        <img src="/home/livros.webp" alt="Estante de livros" className="w-38 h-39 md:w-48 md:h-49 ml-auto mr-10 md:mr-80 -mt-15 -md:mt-10" />
      </div>       

      <div className="relative l-screen">
        <div className="flex w-2xl md:w-1/2 md:ml-auto ml-15 mt-7 md:mt-5 md:mr-10">
          <img src="/home/maquinaEscrever.webp" alt="Máquina de escrever" className="w-40 h-40 md:w-55 md:h-55"/>
          <img src="/home/cafe.webp" alt="Café" className="w-15 h-10 md:w-26 md:h-18 -mt-5"/>
        </div>
        <div className="flex w-2x1 md:w-1/2 mt-1 md:-mt-50 bg-blue-200">
          <img src="/home/piano.webp" alt="Piano digital" className="w-86 h-68  md:w-96 md:h-76 ml-1 md:ml-3"/>
        </div>

      </div> 
     

    </div>
  );
}
