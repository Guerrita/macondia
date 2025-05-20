"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AnalisisEntrevistas() {
  return (
    <section className="w-full min-h-[40vh] flex flex-col justify-center items-center bg-white text-black py-16 px-4">
      <motion.h2
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-semibold mb-6 text-center tracking-wide"
      >
        Análisis de entrevistas
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg sm:text-xl font-light text-center max-w-6xl space-y-4"
      >
        <p>
          Ante la búsqueda de unos resultados más amplios, se dividieron algunas preguntas, según los tipos de persona entrevistadas: usuarios activos, nuevos, y preguntas generales.<br />
          Y estas fueron algunas de sus respuestas:
        </p>
        <Image
          src="/palabras.jpeg"
          alt="nube de palabras"
          width={400}
          height={400}
          className="block max-w-4xl w-94 h-auto object-contain rounded-lg mt-8 mx-auto"
          priority
        />
        <motion.h2
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-semibold mb-6 text-center tracking-wide"
        >Análisis:</motion.h2>
        <p>
          Por medio de las entrevistas afirmamos que la marca sí se ve afectada por la hipótesis generada. Estuvimos conversando con 3 estudiantes de comunicación social, 1 joven especializado en visual merchandising y 2 estudiantes de mercadeo, quienes demuestran tener un gran respeto hacia la marca en calidad del contenido de fotos, versatilidad en las prendas y una página web que denota un estilo luxury.
        </p>
        <p>
          Era también de carácter colectivo comentarios como "no he visto marcas colombianas con un estilo así", "Me encanta que no buscan seguir lo estandarizado", "este es el tipo de marcas que deben tener mejor reconocimiento".
        </p>
        <p>
          Pese a los buenos comentarios, también se resaltaron algunas ideas como el mostrar en qué locales de multimarcas se encuentran y hacer más publicidad en ellos, inclusive, su local oficial, ser más inclusivos con el tema de las tallas de las mujeres, puesto que, aunque manejen de XXS a la XXL (por medio de un pedido personalizado) en sus post siempre resaltan a la mujer flaca con las medidas de una modelo.
        </p>
        <p>
          Al igual que, en conjunto con la poca visibilidad a la mujer negra teniendo en cuenta que, al ser una empresa del Caribe, la mujer negra puede generar una conexión emocional y transmitir un mensaje sobre de dónde viene Macondia. Una caracterización.
        </p>
        <p>
          Un tema que se repitió en la mayoría de entrevistas, es el ya mencionado en nuestra hipótesis. Existen muchos usuarios que se sienten atraídos por la marca, pero en primera instancia ni siquiera saben la razón de su nombre.
        </p>
        <p>
          A pesar de sentir una conexión con la marca, consideraban qué era importante que se evidenciara más la esencia y la historia de la marca dentro de sus redes sociales y página web. En relación a esto mencionaban el interés por conocer lo que hay detrás del proceso creativo de la marca y la historia detrás de cada una de las colecciones. También se nos propuso hacer contenido un poco más orgánico y cercano al público con ejemplos de reels como el trend de "usarlo VS stylearlo". Al conocer la historia de la marca se ven de acuerdo con el valor de las prendas, pero por eso mismo resaltan la importancia de dar a conocer de dónde viene Macondia.
        </p>
      </motion.div>
    </section>
  );
} 