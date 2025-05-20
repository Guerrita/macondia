"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import FrasePrincipal from "../../sections/FrasePrincipal";
import HistoriaMacondia from "../../sections/HistoriaMacondia";
import NecesidadUsuario from "../../sections/NecesidadUsuario";
import Propuesta from "../../sections/Propuesta";
import Benchmarking from "../../sections/Benchmarking";
import AnalisisEntrevistas from "../../sections/AnalisisEntrevistas";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white relative overflow-hidden">
        {/* Imagen de fondo HERO */}
        <Image
          src="/hero.png"
          alt="Hero Macondia"
          fill
          style={{ objectFit: "cover", zIndex: 1 }}
          className="absolute inset-0 w-full h-full"
          priority
        />
      </div>
      <FrasePrincipal />
      <HistoriaMacondia />
      <NecesidadUsuario />
      <Propuesta />
      <Benchmarking />
      <AnalisisEntrevistas />
    </>
  );
}
