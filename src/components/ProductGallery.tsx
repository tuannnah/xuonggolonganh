"use client";

import { useState } from "react";

export default function ProductGallery({
  images,
  alt
}: {
  images: string[];
  alt: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="rounded-2xl overflow-hidden shadow-sm bg-surface-container-low flex items-center justify-center h-64">
        <span className="material-symbols-outlined text-6xl text-on-surface-variant">
          image_not_supported
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="rounded-2xl overflow-hidden shadow-sm bg-surface-container-low flex items-center justify-center aspect-[4/3] md:aspect-auto md:h-[500px] w-full relative">
        <img
          src={images[currentIndex]}
          alt={`${alt} - ảnh ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300 absolute inset-0"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                currentIndex === idx
                  ? "border-primary shadow-md opacity-100"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
