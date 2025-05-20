"use client";
import { motion } from "framer-motion";

export default function FrasePrincipal() {
  return (
    <section className="w-full flex flex-col items-center bg-black text-white py-16 px-4">
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-xl sm:text-2xl font-light text-center max-w-6xl"
      >
        “En una sociedad asincrónica, existe algo surreal que nos une a todos.”
      </motion.p>
    </section>
  );
} 