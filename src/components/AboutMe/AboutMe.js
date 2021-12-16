import React from 'react';
import './AboutMe.css';
import photo from '../../images/my__photo.jpg';
import Contacts from '../Contacts/Contacts';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe () {
  return ( 
    <section className='about-me' id='about-me'>
      <h2 className='app__section-title '>Студент</h2>
      <div className='about-me__student-info'>
        <div className='about-me__student-info-container'>
          <div>
            <h3 className='about-me__name'>Виталий</h3>
            <p className='about-me__capture'>
              Фронтенд-разработчик, 30 лет
            </p>
            <p className='about-me__text'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. 
            У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. 
            Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». 
            После того, как прошёл курс по веб-разработке, начал заниматься 
            фриланс-заказами и ушёл с постоянной работы.
            </p>
          </div>
          <Contacts parentClassName='about-me'/>
        </div>
        <img 
          className='about-me__photo'
          alt='фотография студента'
          src={photo}
        />
      </div>
      <Portfolio/>
    </section>
  );
}

export default AboutMe
