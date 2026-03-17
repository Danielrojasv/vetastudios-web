import Hero from '@/components/Hero';
import Mision from '@/components/Mision';
import Vision from '@/components/Vision';
import ProductosInternos from '@/components/ProductosInternos';
import Servicios from '@/components/Servicios';
import Proyectos from '@/components/Proyectos';
import Stack from '@/components/Stack';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Mision />
      <Vision />
      <ProductosInternos />
      <Servicios />
      <Proyectos />
      <Stack />
      <Contacto />
      <Footer />
    </main>
  );
}