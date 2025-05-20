"use client";
import { motion } from "framer-motion";

export default function HistoriaMacondia() {
  return (
    <section className="w-full min-h-[40vh] flex flex-col justify-center items-center bg-white text-black py-16 px-4">

      <motion.p
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg sm:text-xl font-light text-center max-w-6xl"
      >
        Macondia, nacida en 2021, fusiona dos estilos distintos para crear un espacio en constante evolución, el realismo mágico de Macondo y la belleza de Colombia. En su proceso creativo, buscan desafiar las convenciones que limitan la moda latinoamericana, alentando al público a explorar lo desconocido a través de las prendas. Basan su diseño en tres pilares: la conjunción de fuerzas opuestas, la incorporación del arte y la búsqueda de la innovación.
      </motion.p>
    </section>
  );
} 