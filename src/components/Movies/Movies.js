import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';
import { MoviesApi } from '../../utils/MoviesApi';
import { MainApi } from '../../utils/MainApi';

const baseUrl = 'https://api.nomoreparties.co';

function Movies({ onError }) {
  const [results, setResults] = useState(null);
  const [films, setFilms] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [params, setParams] = useState(null);

  const savedMovies = [
    {
      country: "США",
      director: "Антуан Фукуа",
      duration: "2ч 0м",
      year: "2013",
      description: "Когда на Белый Дом нападают террористы, а президента берут в заложники, дискредитированный бывший охранник главы государства Майк Бэннинг оказывается внутри захваченного здания. И теперь он единственный, кто сможет спасти президента…",
      image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/647c4b08-6e64-402c-bda2-5d45251608b9/1920x",
      trailer: "https://www.kinopoisk.ru/film/673427/video/75230/",
      thumbnail: "https://www.kinopoisk.ru/film/673427/video/75230/",
      movieId: 1,
      nameRU: "Падение Олимпа",
      nameEN: "Olympus Has Falle",
    },
    {
      country: "США",
      director: "Антуан Фукуа",
      duration: "2ч 0м",
      year: "2013",
      description: "Когда на Белый Дом нападают террористы, а президента берут в заложники, дискредитированный бывший охранник главы государства Майк Бэннинг оказывается внутри захваченного здания. И теперь он единственный, кто сможет спасти президента…",
      image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/647c4b08-6e64-402c-bda2-5d45251608b9/1920x",
      trailer: "https://www.kinopoisk.ru/film/673427/video/75230/",
      thumbnail: "https://www.kinopoisk.ru/film/673427/video/75230/",
      movieId: 2,
      nameRU: "Падение Олимпа",
      nameEN: "Olympus Has Falle",
    },
    {
      country: "США",
      director: "Антуан Фукуа",
      duration: "2ч 0м",
      year: "2013",
      description: "Когда на Белый Дом нападают террористы, а президента берут в заложники, дискредитированный бывший охранник главы государства Майк Бэннинг оказывается внутри захваченного здания. И теперь он единственный, кто сможет спасти президента…",
      image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/647c4b08-6e64-402c-bda2-5d45251608b9/1920x",
      trailer: "https://www.kinopoisk.ru/film/673427/video/75230/",
      thumbnail: "https://www.kinopoisk.ru/film/673427/video/75230/",
      movieId: 3,
      nameRU: "Падение Олимпа",
      nameEN: "Olympus Has Falle",
    },
    {
      country: "США",
      director: "Антуан Фукуа",
      duration: "2ч 0м",
      year: "2013",
      description: "Когда на Белый Дом нападают террористы, а президента берут в заложники, дискредитированный бывший охранник главы государства Майк Бэннинг оказывается внутри захваченного здания. И теперь он единственный, кто сможет спасти президента…",
      image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/647c4b08-6e64-402c-bda2-5d45251608b9/1920x",
      trailer: "https://www.kinopoisk.ru/film/673427/video/75230/",
      thumbnail: "https://www.kinopoisk.ru/film/673427/video/75230/",
      movieId: 4,
      nameRU: "Падение Олимпа",
      nameEN: "Olympus Has Falle",
    },
    {
      country: "США",
      director: "Антуан Фукуа",
      duration: "2ч 0м",
      year: "2013",
      description: "Когда на Белый Дом нападают террористы, а президента берут в заложники, дискредитированный бывший охранник главы государства Майк Бэннинг оказывается внутри захваченного здания. И теперь он единственный, кто сможет спасти президента…",
      image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/647c4b08-6e64-402c-bda2-5d45251608b9/1920x",
      trailer: "https://www.kinopoisk.ru/film/673427/video/75230/",
      thumbnail: "https://www.kinopoisk.ru/film/673427/video/75230/",
      movieId: 5,
      nameRU: "Падение Олимпа",
      nameEN: "Olympus Has Falle",
    },
    {
      country: "США",
      director: "Антуан Фукуа",
      duration: "2ч 0м",
      year: "2013",
      description: "Когда на Белый Дом нападают террористы, а президента берут в заложники, дискредитированный бывший охранник главы государства Майк Бэннинг оказывается внутри захваченного здания. И теперь он единственный, кто сможет спасти президента…",
      image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/647c4b08-6e64-402c-bda2-5d45251608b9/1920x",
      trailer: "https://www.kinopoisk.ru/film/673427/video/75230/",
      thumbnail: "https://www.kinopoisk.ru/film/673427/video/75230/",
      movieId: 6,
      nameRU: "Падение Олимпа",
      nameEN: "Olympus Has Falle",
    },
  ];

  useEffect(() => {
    const SearchHistory = localStorage.getItem('SearchHistory');
    if (SearchHistory) {
      const savedSearch = JSON.parse(SearchHistory)
      console.log(savedSearch)
      setParams(savedSearch.params);
      setFilms(savedSearch.data);
      changeIsShort(savedSearch.params, savedSearch.data);
    }
  }, [])

  function changeIsShort(params, Films = films) {
    setIsLoading(true)
    if (Films) {
      setResults(null);
      const { isShort = false } = params;
      const data = Films.filter(({ duration }) => {
        if (isShort && duration > 40) return false;
        return true;
      });
      saveResults(Films, params);
      checkSaved(data, params);
    }
    setIsLoading(false)
  }

  function saveResults(data, params) {
    localStorage.removeItem('SearchHistory')
    console.log(params)
    localStorage.setItem('SearchHistory', JSON.stringify({data, params}));
  }

  function findInName(name, request) {
    if (!name || !request) return 0;

    name = name.toLowerCase();
    request = request.toLowerCase();
    name = name.trim();
    request = request.trim();

    return name.indexOf(request) !== -1
  }

  function checkSaved(films, params) {
    //MainApi.getMovies()
    //  .then((savedMovies) => {
        const data = films.map((item) => {
          const movie = savedMovies.find(({ movieId, _id }) => movieId === item.id);
          if (movie) {
            item.isSaved = true;
            item.savedId = movie._id;
          } else item.isSaved = false;
          return item;
        });
        setResults(data);
   //   })
   //   .catch((err) => err.then(({ message }) => onError(message)));
  }

  async function handleSearch(params) {
    setIsLoading(true);
    setParams(params);
    setResults(null);

    let films
    try {
      films = await MoviesApi.getMovies();
    } catch({ message }) {
      onError(message);
      setIsLoading(false);
    }

    const { request, isShort } = params;

    let data = films.filter(({ duration, nameRU, nameEN }) => {

      if (findInName(nameRU, request)) return true;
      else if (findInName(nameEN, request)) return true;

      return false;
    });
    setFilms(data);
    saveResults(data, params);
    data = data.filter(({ duration }) => {
      if (isShort && duration > 40) return false;
      return true;
    });

    checkSaved(data, params);
    setIsLoading(false)
  }

  function addMovie(data) {
    const { country, director, duration, year, description, image: { url }, trailerLink, id: movieId, nameRU, nameEN } = data;
    MainApi.addMovie({ country, director, duration, year, description, image: `${baseUrl}${url}`, trailerLink, movieId, nameRU, nameEN })
      .then((movie) => {
        if (movie) {
          checkSaved(results, params)
        }
      })
      .catch((err) => err.then(({ message }) => onError(message)))
  }

  function deleteMovie(id) {
    MainApi.deleteMovie(id)
      .then((movie) => {
        if (movie) {
          checkSaved(results, params)
        }
      })
      .catch((err) => err.then(({ message }) => onError(message)))
  }

  return (
    <section className="movis">
      <SearchForm onSubmit={handleSearch} onChecked={changeIsShort} />
      {isLoading ? (<Preloader />) : null}
      {results && !isLoading ? (<MoviesCardList cards={results} onDelete={deleteMovie} onAdd={addMovie} />) : null}
    </section>
  );
}

export default Movies;


//function checkSaved(films, params) {
//  MainApi.getMovies()
//    .then((savedMovies) => {
//      const data = films.map((item) => {
//        const movie = savedMovies.find(({ movieId, _id }) => movieId === item.id);
//        if (movie) {
//          item.isSaved = true;
//          item.savedId = movie._id;
//        } else item.isSaved = false;
//        return item;
//      });
//      setResults(data);
//    })
//    .catch((err) => err.then(({ message }) => onError(message)));
//}
