export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-4">Ozerwise Store</h1>
      <p className="text-gray-600 mb-8">
        Produits en résine • Impression 3D • Vêtements
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Produits Résine" />
        <Card title="Impression 3D sur mesure" />
        <Card title="Vêtements" />
      </div>
    </main>
  )
}

function Card({ title }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{title}</h2>
      <button className="mt-4 px-4 py-2 bg-black text-white rounded-xl">
        Découvrir
      </button>
    </div>
  )
}
