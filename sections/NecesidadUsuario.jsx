"use client";
import { motion } from "framer-motion";

export default function NecesidadUsuario() {
  return (
    <section className="w-full min-h-[40vh] flex flex-col justify-center items-center bg-black text-white py-16 px-4">
      <motion.h2
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-semibold mb-6 text-center tracking-wide"
      >
        Necesidad clave del usuario
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg sm:text-xl font-light text-center max-w-3xl"
      >
        La marca presenta un buen ADN, sin embargo, a la hora de plasmarlo o trasmitirlo se queda corta.<br />
        Nuestro usuario necesita un mejor manejo de storytelling porque así conoce, le causa interés y se fideliza con la marca.
      </motion.p>
    </section>
  );
} 