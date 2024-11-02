import React from 'react'
import './cards.css'

const cards = () => {
  return (
    <div className="cards-container">
        {data.map((d) => (
          <div>
            <div>
              <img src={d.image} />
            </div>

            <div>
                <p>{d.title}</p>
                <p>{d.description}</p>
                <button>Read More</button>
            </div>
          </div>
        ))}
    </div>
  )
}

const data = [
    {
        title: 'Article1',
        description:'description1',
        image:'../../images/Logo.svg'
    },
    {
        title:'Article2',
        description:'description2',
        image:'../../images/logo-jpg.jpg'
    },
    {
        title:'Article3',
        description:'description3',
        image:'../../images/logo-jpg.jpg'
    },
    {
        title:'Article4',
        description:'description4',
        image:'../../images/logo-jpg.jpg'
    },
]

export default cards