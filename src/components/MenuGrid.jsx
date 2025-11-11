import { useEffect, useState } from 'react'

export default function MenuGrid() {
  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])
  const [active, setActive] = useState('All')
  const base = import.meta.env.VITE_BACKEND_URL || ''

  useEffect(() => {
    fetch(`${base}/api/categories`).then(r => r.json()).then(d => setCategories(d.categories || []))
    fetch(`${base}/api/menu`).then(r => r.json()).then(d => setItems(d.items || []))
  }, [])

  const filtered = active === 'All' ? items : items.filter(i => i.category === active)

  return (
    <section id="menu" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Menu</h2>
        <div className="hidden md:flex gap-2">
          <button onClick={() => setActive('All')} className={`px-4 py-2 rounded-xl border ${active==='All' ? 'bg-rose-600 text-white border-rose-600' : 'bg-white text-gray-700 border-gray-200'}`}>All</button>
          {categories.map(c => (
            <button key={c} onClick={() => setActive(c)} className={`px-4 py-2 rounded-xl border ${active===c ? 'bg-rose-600 text-white border-rose-600' : 'bg-white text-gray-700 border-gray-200'}`}>{c}</button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, idx) => (
          <article key={idx} className="bg-white rounded-2xl border border-rose-100/60 shadow-sm hover:shadow-md transition overflow-hidden">
            {item.image && (
              <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
            )}
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>
                </div>
                <div className="text-rose-700 font-extrabold">${Number(item.price).toFixed(2)}</div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${item.category === 'Drinks' ? 'bg-pink-100 text-pink-700' : item.category === 'Bowls' ? 'bg-amber-100 text-amber-700' : 'bg-violet-100 text-violet-700'}`}>{item.category}</span>
                <button className="px-4 py-2 rounded-xl bg-rose-600 text-white text-sm font-semibold hover:bg-rose-700">Add to Cart</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 md:hidden flex flex-wrap gap-2">
        <button onClick={() => setActive('All')} className={`px-4 py-2 rounded-xl border ${active==='All' ? 'bg-rose-600 text-white border-rose-600' : 'bg-white text-gray-700 border-gray-200'}`}>All</button>
        {categories.map(c => (
          <button key={c} onClick={() => setActive(c)} className={`px-4 py-2 rounded-xl border ${active===c ? 'bg-rose-600 text-white border-rose-600' : 'bg-white text-gray-700 border-gray-200'}`}>{c}</button>
        ))}
      </div>
    </section>
  )
}
