import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <div className="portfolio__links">
          <a href="https://github.com/Skubko/how-to-learn" className="portfolio__link">Статичный сайт</a>
          <a href="https://skubko.github.io/russian-travel/index.html" className="portfolio__link">Адаптивный сайт</a>
          <a href="https://github.com/Skubko/mesto-react" className="portfolio__link">Одностраничное приложение</a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
