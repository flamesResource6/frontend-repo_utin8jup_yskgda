export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-rose-100/60 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <a href="/" className="text-xl font-extrabold tracking-tight">
            <span className="text-gray-900">Bubble</span>
            <span className="text-rose-600">Joy</span>
          </a>
          <p className="text-gray-600 mt-3 max-w-sm">Playful drinks and tasty bites. Fresh flavors, friendly vibes, every day.</p>
        </div>
        <div>
          <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Hours</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>Mon–Fri: 10:00 AM – 8:00 PM</li>
            <li>Sat–Sun: 11:00 AM – 9:00 PM</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Visit</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>123 Flavor St, Foodville</li>
            <li>(555) 123-4567</li>
            <li>hello@bubblejoy.example</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-rose-100/60 py-4 text-center text-xs text-gray-500">© {new Date().getFullYear()} BubbleJoy. All rights reserved.</div>
    </footer>
  )
}
