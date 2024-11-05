import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import one from '../../images/pic1.jpg'
import two from '../../images/pic2.jpg'
import three from '../../images/pic3.webp'
import four from '../../images/pic4.jpg'

const Slider = ({ slides, options }) => {
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <img src={slide.image} alt={slide.title} />
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const App = () => {
  const slides = [
    {
      image: one,
      title: 'Article one',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ad iure. Quis, culpa. Magnam commodi aliquid alias labore inventore at obcaecati odit quam expedita qui numquam, veritatis culpa impedit rem!'
    },
    {
      image: two,
      title: 'Article two',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus deserunt dolorem unde explicabo ipsa placeat quas, odit odio alias soluta sapiente ut hic tempora, voluptatum illum cupiditate ullam earum ipsum!'
    },
    {
      image: three,
      title: 'Article three',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ut dolore autem, explicabo ab fugiat eligendi sapiente sit, laudantium tempore quam! Voluptatibus numquam explicabo consectetur alias distinctio corrupti quis dignissimos!'
    },
    {
      image: four,
      title: 'Article four',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit error exercitationem doloribus deserunt facere obcaecati fuga corrupti in, non odit id, repudiandae nostrum aliquam? Eligendi ipsam veniam sunt illum perspiciatis'
    }
  ]

  return (
    <div>
      <Slider slides={slides} options={{ loop: true }} />
    </div>
  )
}

export default App
