import { useEffect, useRef } from 'react'
import './glowingCards.css'
import Card from './SingleCard'
import { dataCards } from './dataCards'

function GlowingCards() {
  const cardsRef = useRef([])
  useEffect(() => {
    const handleMouseMove = (e) => {
      cardsRef.current.forEach((card) => {
        if (card) {
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          card.style.setProperty('--mouse-x', `${x}px`)
          card.style.setProperty('--mouse-y', `${y}px`)
        }
      })
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className='cards_section'>
      <div className='cards_container'>
        {dataCards.map((card, index) => (
          <Card
            key={card.id}
            ref={(el) => (cardsRef.current[index] = el)}
            icon={card.icon}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    </div>
  )
}

export default GlowingCards
