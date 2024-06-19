import { forwardRef } from 'react'

// eslint-disable-next-line react/display-name, react/prop-types
const Card = forwardRef(({ icon, title, text, link }, ref) => (
  <div className='card' ref={ref}>
    <div className='card-border'></div>
    <span className='span'>{icon}</span>
    <hgroup>
      <h2 className='h2'>{title}</h2>
      <p className='p'>{text}</p>
    </hgroup>
    <a href={link} className='card-btn'>
      See more
    </a>
  </div>
))

export default Card
