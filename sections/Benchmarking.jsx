"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Benchmarking() {
  return (
    <section className="w-full min-h-[40vh] flex flex-col justify-center items-center bg-white text-black py-16 px-4">

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
        <Image
          src="/cuadrados.png"
          alt="Gráfica de burbujas de las competencias"
          width={450}
          height={450}
          className="rounded-lg object-contain"
          priority
        />
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl font-light md:text-left max-w-2xl"
        >
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-semibold mb-6 tracking-wide"
          >
            Benchmarking
          </motion.h2>
          Realizando el Benchmarking y analizar el mercado competitivo logramos sentirnos cautivadas por <b className="font-bold">Chanel.</b><br /><br />
          Al entrar en la web pudimos conectar con la marca y vivir la experiencia que ofrece. Tiene una sección grande de historia y una gran interactividad que incluso te permite probarte las gafas de manera virtual. Además, la información e imágenes se presentan de forma atractiva, lo que permite que el usuario navegue las distintas secciones que tiene.
        </motion.p>
      </div>
      <Image
        src="/navbar.png"
        alt="navbar"
        width={800}
        height={400}
        className="block max-w-4xl w-full h-auto object-contain rounded-lg mt-8 mx-auto"
        priority
      />
      <Image
        src="/podcast.png"
        alt="navbar"
        width={800}
        height={400}
        className="block max-w-4xl w-full h-auto object-contain rounded-lg mt-8 mx-auto"
        priority
      />
    </section>
  );
} 