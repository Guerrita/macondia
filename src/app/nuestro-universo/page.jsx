'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SobreNosotros() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Contenedor principal con fondo blanco */}
      <div className="w-full max-w-6xl mx-auto px-8 py-10 bg-white  shadow-xl">
        <Link href="/detalle" className="block cursor-pointer hover:opacity-90 transition-opacity">
          <Image
            src="/mundos.jpeg"
            alt="mundos de macondia"
            width={400}
            height={400}
            className="block w-full h-auto object-contain my-8 mx-auto"
            priority
          />
        </Link>

      </div>
    </div>
  );
}