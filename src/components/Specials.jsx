import { useEffect, useState } from 'react'

export default function Specials() {
  const [specials, setSpecials] = useState([])
  const base = import.meta.env.VITE_BACKEND_URL || ''

  useEffect(() => {
    fetch(`${base}/api/menu?category=Drinks`).then(r => r.json()).then(d => {
      setSpecials((d.items || []).slice(0,3))
    })
  }, [])

  return (
    <section id="specials" className="relative z-10 mx-auto max-w-7xl px-6 py-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Today’s Specials</h2>
        <a href="#menu" className="text-rose-700 font-semibold">View all</a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {specials.map((item, idx) => (
          <article key={idx} className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl border border-rose-100/60 shadow-sm overflow-hidden">
            {item.image && (
              <img src={item.image} alt={item.title} className="h-40 w-full object-cover" />
            )}
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-rose-700 font-extrabold">${Number(item.price).toFixed(2)}</span>
                <button className="px-4 py-2 rounded-xl bg-rose-600 text-white text-sm font-semibold hover:bg-rose-700">Add to Cart</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
