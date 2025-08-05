// src/components/Emoji.tsx
'use client';

import Image from 'next/image';
import type { ImageProps } from 'next/image';
import { useState } from 'react';

type EmojiName =
  | 'heart'
  | 'revolving'
  | 'sparkles'
  | 'ribbon_heart'
  | 'gift';

const emojiSrc: Record<EmojiName, string> = {
  heart: '/emoji/Red_Heart.png',
  revolving: '/emoji/Revolving_Hearts.png',
  sparkles: '/emoji/Sparkles.png',
  ribbon_heart: '/emoji/Heart_with_Ribbon.png',
  gift: '/emoji/Wrapped_Gift.png',
};

interface EmojiProps
  extends Omit<ImageProps, 'src' | 'width' | 'height' | 'alt'> {
  name: EmojiName;
  /** для доступности */
  alt?: string;
  /** что показать, если файл не загрузился */
  fallback?: React.ReactNode;
}

/* ——————————————————————————————————————————— */
export default function Emoji({
  name,
  alt = name,
  fallback,
  className = '',
  ...rest
}: EmojiProps) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <span
        aria-label={typeof fallback === 'string' ? fallback : alt}
        className={`inline-block align-baseline ${className}`}
      >
        {fallback ?? alt}
      </span>
    );
  }

  return (
    <Image
      src={emojiSrc[name]}
      alt={alt}
      width={24}                // базовый intrinsic-size
      height={24}
      className={`inline-block align-baseline w-[1em] h-[1em] ${className}`}
      onError={() => setBroken(true)}
      {...rest}
    />
  );
}
