import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[90vh] overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] bg-pink-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[40rem] h-[40rem] bg-amber-200/40 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Tddl75W6Ij9Qp77j/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-32 md:pb-24 grid md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-rose-600 bg-rose-100 px-3 py-1 rounded-full w-fit">
              Fresh & Fun Food Store
            </span>
          </motion.div>
          <motion.h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>
            Bubble tea bliss and tasty bites.
          </motion.h1>
          <motion.p className="text-lg md:text-xl text-gray-700 max-w-prose"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>
            A playful menu of colorful drinks and comfort bowls. Crafted daily with bright flavors and happy vibes.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 mt-2"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
            <a href="#menu" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-rose-600 text-white font-semibold shadow-lg shadow-rose-600/20 hover:bg-rose-700 transition">
              Explore Menu
            </a>
            <a href="#specials" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-white text-rose-700 font-semibold border border-rose-200 hover:bg-rose-50 transition">
              Today’s Specials
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
