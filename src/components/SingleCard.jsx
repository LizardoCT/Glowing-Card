import { forwardRef } from 'react'

// eslint-disable-next-line react/display-name, react/prop-types
const Card = forwardRef(({ icon, title, text, link }, ref) => (
  <div className='card_item' ref={ref}>
    <div className='card_border'></div>
    <span className='icon'>{icon}</span>
    <h2 className='title'>{title}</h2>
    <p className='info'>{text}</p>
    <a href={link} className='card_btn'>
      See more
    </a>
  </div>
))

export default Card
