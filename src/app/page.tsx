import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex justify-center">
          <Image
            src="/logoBlack.png"
            alt="Mario Carballo Ediciones"
            width={200}
            height={80}
            className="h-16 w-auto"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Mario Carballo
            <span className="block text-slate-600">Ediciones</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
            Editorial unipersonal donde publico mis propias obras literarias 
            con un enfoque artesanal y cuidado editorial excepcional.
          </p>
        </div>
      </section>

      {/* What is a Personal Publishing House */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              ¿Qué es una Editorial Unipersonal?
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  He elegido crear una editorial unipersonal porque me permite tener control total 
                  sobre cada aspecto del proceso: desde la escritura hasta el diseño final del libro.
                </p>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Este enfoque me da la libertad de trabajar a mi ritmo, cuidar cada detalle 
                  y asegurarme de que cada publicación refleje exactamente mi visión como autor.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/mockup1.jpg"
                  alt="Proceso editorial artesanal"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Books Showcase */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Mis Publicaciones
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/mockup2.jpg"
                alt="Publicación destacada"
                width={400}
                height={500}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Colección Literaria
                </h3>
                <p className="text-slate-600">
                  Mis obras literarias, cuidadosamente escritas y editadas con el máximo rigor editorial.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/mockup3.jpg"
                alt="Edición especial"
                width={400}
                height={500}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Ediciones Especiales
                </h3>
                <p className="text-slate-600">
                  Ediciones especiales de mis obras con acabados únicos y diseños exclusivos para coleccionistas.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <div className="h-64 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl text-slate-500 mb-2">📚</div>
                  <p className="text-slate-600 font-medium">Próximamente</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Nuevos Proyectos
                </h3>
                <p className="text-slate-600">
                  Estoy trabajando en nuevas obras que pronto formarán parte de mi catálogo editorial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Mi Filosofía Editorial
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Para mí, cada libro es una obra de arte que merece el máximo cuidado 
              en cada etapa de su creación. Desde la primera idea hasta el momento 
              en que llega a las manos del lector.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Calidad</h3>
                <p className="text-slate-600">
                  Cada obra pasa por un riguroso proceso de escritura, revisión y edición.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Diseño</h3>
                <p className="text-slate-600">
                  Cuidamos cada detalle visual para crear libros únicos y memorables.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">❤️</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Pasión</h3>
                <p className="text-slate-600">
                  Cada proyecto nace del amor por la literatura y la pasión por contar historias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Image
                src="/logoWhite.png"
                alt="Mario Carballo Ediciones"
                width={150}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-300 mb-2">
                © 2025 Mario Carballo Ediciones
              </p>
              <p className="text-slate-400 text-sm">
                Editorial unipersonal independiente
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
