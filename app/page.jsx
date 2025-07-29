
export default function Home() {
  return (
    <div className="h-screen bg-blue-200">
      <div className="flex relative l-screen">
        <img src="/home/lua.webp" alt="lua" className="w-44 h-34 md:w-66 md:h-51 md:mt-5 -mr-20 md:ml-5 -ml-4" />
        <img src="/home/logo.webp" alt="Clara Rossetti" className="w-84 h-60 ml-auto md:mr-80 mr-15 -mt-5"/>
      </div>
      <div className="flex relative l-screen">
        <img src="/home/fone.webp" alt="Fone de ouvido" className="w-25 h-25 md:ml-50 ml-20 -mt-1" />
        <img src="/home/livros.webp" alt="Estante de livros" className="w-48 h-49 ml-auto mr-5 -mt-20" />
      </div>
      
      
    </div>
  );
}
