import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import FeaturedProjectPage from './FeaturedProjectPage'

export default function FeaturedProjectRoute() {
  const { slug } = useParams()

  useEffect(() => {
    document.documentElement.classList.add('dark')
    window.scrollTo(0, 0)
  }, [slug])

  return (
    <div className="page-bg min-h-screen font-[family-name:var(--font-sans)] text-slate-100">
      <Navbar />
      <main className="pt-20 sm:pt-24">
        <FeaturedProjectPage slug={slug} />
      </main>
      <Footer />
    </div>
  )
}
