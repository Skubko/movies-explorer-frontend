import React from 'react';
import './Portfolio.css';

function Portfolio () {
  return ( 
    <section className='portfolio'>
      <h3 className='portfolio__heading'>Портфолио</h3>
      <ul className='portfolio__links'>
        <li className='portfolio__links-item'>
          <a 
            className='portfolio__link'
            href='https://github.com/Skubko/how-to-learn'
            target='_blank'
            rel='noreferrer nofollow'
          >
            Статичный сайт
            <span className='portfolio__link-arrow'>&#8599;</span>
          </a>
        </li>
        <li className='portfolio__links-item'>
          <a 
            className='portfolio__link'
            href='https://skubko.github.io/russian-travel/index.html'
            target='_blank'
            rel='noreferrer nofollow'
          >
            Адаптивный сайт 
            <span className='portfolio__link-arrow'>&#8599;</span>
          </a>
        </li>
        <li className='portfolio__links-item'>
          <a 
            className='portfolio__link'
            href='https://https://skubko1.sprint15.nomoredomains.xyz/'
            target='_blank'
            rel='noreferrer nofollow'
          >
            Одностраничное приложение
            <span className='portfolio__link-arrow'>&#8599;</span>
          </a>
        </li>
      </ul>    
    </section>
  );
}

export default Portfolio
