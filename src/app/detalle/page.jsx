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
      <div className="w-full max-w-6xl mx-auto px-8 py-10 bg-white shadow-xl">
        {/* Título y subtítulo */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Everybody&apos;s Town</h1>
          <h2 className="text-xl text-gray-600">Lorem ipsum dolor sit amet</h2>
        </div>

        {/* Sección de video - Estilo YouTube */}
        <div className="w-full mb-12">
          <div className="relative w-full pb-[56.25%]">
            {/* Contenedor con proporción 16:9 para el video */}
            <div className="absolute inset-0 rounded-lg overflow-hidden shadow-lg">
              {/* Imagen del video con overlay de YouTube */}
              <div className="relative w-full h-full">
                <Image
                  src="/image.webp"
                  alt="Video thumbnail"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay con efecto de YouTube */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Botón de play estilo YouTube */}
                  <div className="w-16 h-12 bg-red-600 rounded-lg flex items-center justify-center relative">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>

                {/* Barra de progreso estilo YouTube */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                  <div className="h-full w-1/3 bg-red-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección con texto a la izquierda e imagen a la derecha */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Lorem ipsum dolor</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
            </p>
            <p>
              Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.
            </p>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="relative w-94 h-94 overflow-hidden rounded-lg">
              <Image
                src="/image2.jpg"
                alt="imagen cuadrada"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Sección con imagen y texto debajo */}
        <div className="mb-12">
          <div className="relative w-full h-80 overflow-hidden rounded-lg mb-8">
            <Image
              src="/fot.jpg"
              alt="imagen rectangular"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Lorem ipsum dolor sit</h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
          </p>
          <p>
            Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.
          </p>
        </div>
      </div>
    </div>
  );
}