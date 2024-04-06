import Card from './house/HouseCard';
import data from './data.json';
export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Sección 1: Header */}
      <header className="flex flex-col items-start justify-center bg-cover bg-center text-center md:text-left md:px-60 h-96" style={{ backgroundImage: 'url("/home.jpeg")' }}>
        <div className='text-slate-200'>
          <h1 className="text-4xl font-bold">Búsqueda y Gestión de Propiedades</h1>
          <p>Descubre la mejor forma de encontrar y administrar tu hogar</p>
          </div>
      </header>

      {/* Sección 2: Menú de Filtros */}
      <section className="bg-gray-800 py-8 px-6 md:px-12 w-full max-w-screen-xl mx-auto rounded-lg -mt-12">
        <div className="flex flex-wrap gap-4">
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded">Filtro 1</button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded">Filtro 2</button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded">Filtro 3</button>
          {/* Agrega más botones según tus necesidades */}
        </div>
      </section>

      {/* Sección 3: Grid de Cards */}
      <section className="container mx-auto py-8 px-6 md:px-12  w-full max-w-screen-xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Grid de Cards</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              description={item.description}
              likes={item.likes}
              address={item.address}
            />
          ))}
        </div>
      </section>
    </div>
  );
}