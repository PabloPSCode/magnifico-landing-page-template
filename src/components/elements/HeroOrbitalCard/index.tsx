'use client';

import Image from "next/image";

export default function HeroOrbitalCard() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem] overflow-hidden rounded-[2.25rem] border border-border-card/80 shadow-[0_32px_80px_-48px_rgba(15,26,61,0.45)]">
      <Image
        src="/hero-section-card.png"
        alt="Equipe de desenvolvimento trabalhando em uma estação de produto"
        fill
        priority
        sizes="(max-width: 1024px) 70vw, 540px"
        className="object-cover"
      />
    </div>
  );
}
