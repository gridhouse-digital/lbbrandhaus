import { useEffect, useState } from 'react'

type ImageCarouselProps = {
  images: string[]
}

function ImageCarousel({ images }: ImageCarouselProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [images.length])

  const previous = () => {
    setIndex((current) => (current - 1 + images.length) % images.length)
  }

  const next = () => {
    setIndex((current) => (current + 1) % images.length)
  }

  return (
    <section className='teal-slider'>
      <div className='teal-slider-head'>
        <p className='eyebrow'>- Studio atmosphere slider</p>
        <div className='teal-slider-controls'>
          <button type='button' onClick={previous}>
            Prev
          </button>
          <button type='button' onClick={next}>
            Next
          </button>
        </div>
      </div>

      <div className='teal-slider-frame'>
        <img src={images[index]} alt='LB Brand Haus studio' />
      </div>
    </section>
  )
}

export default ImageCarousel
