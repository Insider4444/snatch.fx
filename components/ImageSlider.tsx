'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageSliderProps {
  images: string[]
  showThumbnails?: boolean
}

export default function ImageSlider({ images, showThumbnails = true }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="space-y-4">
      <div className="relative h-[400px] w-full max-w-[800px] mx-auto group">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`Product image ${currentIndex + 1}`}
          fill
          className="object-cover rounded-lg"
        />
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition-colors hover:bg-black/40">
          <ChevronLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition-colors hover:bg-black/40">
          <ChevronRight onClick={nextSlide} size={30} />
        </div>
      </div>
      {showThumbnails && (
        <div className="flex justify-center space-x-2 overflow-x-auto">
          {images.map((img, index) => (
            <div
              key={index}
              className={`cursor-pointer ${index === currentIndex ? 'border-2 border-accent' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={img || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                width={80}
                height={80}
                className="object-cover rounded"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

