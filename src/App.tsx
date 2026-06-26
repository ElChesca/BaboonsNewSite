import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { PageLoader } from './components/ui/PageLoader'
import { ScrollToTop } from './components/layout/ScrollToTop'

const Home = lazy(() => import('./pages/Home'))
const Producto = lazy(() => import('./pages/Producto'))
const ModulosIndex = lazy(() => import('./pages/modulos/ModulosIndex'))
const ModuloDetalle = lazy(() => import('./pages/modulos/ModuloDetalle'))
const VerticalesIndex = lazy(() => import('./pages/verticales/VerticalesIndex'))
const VerticalDetalle = lazy(() => import('./pages/verticales/VerticalDetalle'))
const CasosDeExito = lazy(() => import('./pages/CasosDeExito'))
const Precios = lazy(() => import('./pages/Precios'))
const Nosotros = lazy(() => import('./pages/Nosotros'))
const Contacto = lazy(() => import('./pages/Contacto'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto" element={<Producto />} />
          <Route path="/modulos" element={<ModulosIndex />} />
          <Route path="/modulos/:slug" element={<ModuloDetalle />} />
          <Route path="/verticales" element={<VerticalesIndex />} />
          <Route path="/verticales/:slug" element={<VerticalDetalle />} />
          <Route path="/casos-de-exito" element={<CasosDeExito />} />
          <Route path="/precios" element={<Precios />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
