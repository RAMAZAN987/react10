import React from 'react'
import Hero from './src/components/Hero/Hero'
import img1 from './src/components/assets/pexels-iamloe-707377.jpg'
const db = () => {
    const data = [
      {
        image: img1,
        h1: 'First slide label',
        p: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      },
      {
        image: img1,
        h1: 'Second slide label',
         p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        image: img1,
        h1: 'Third slide label',
        p: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
      }
    ]
  return (
    <div>
      {
        data.map(data => (
          <Hero
         h1 = {data.h1} 
         p = {data.p}
         />
        ))
      }
    </div>
  )
}

export default db
