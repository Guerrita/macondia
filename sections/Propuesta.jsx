"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Propuesta() {
  return (
    <section className="w-full min-h-[40vh] flex flex-col items-center bg-white text-black py-16 px-4 relative overflow-hidden">
      <Image
        src="/propuesta-bg.jpeg"
        alt="Fondo Propuesta"
        fill
        style={{ objectFit: "cover", zIndex: 1, opacity: 0.18 }}
        className="absolute inset-0 w-full h-full"
        priority
      />
      <div className="relative z-10 w-full flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-semibold mb-6 text-center tracking-wide"
        >
          Propuesta
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl font-light text-center max-w-6xl"
        >
          Implementar en la página web una sección que se muestre de forma más auténtica a lo que las empresas siempre recurren en sus páginas cuando se trata hablar sobre el about us (nosotros). Esta sección se llamará Nuestro Universo. Se busca presentar información principalmente en video, para mayor exploración e interactividad presentada para el usuario, en conjunto de material escrito y sonoro que refuerce lo anterior. Con esta propuesta se generará mayor contenido en Instagram y Tiktok para plasmar datos curiosos de los textiles, estampados de los procesos creativos por lo que pasa Macondia.
        </motion.p>
      </div>
    </section>
  );
} 