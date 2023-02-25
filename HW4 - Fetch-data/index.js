"use strict";

const FILMS_URL = "https://ajax.test-danit.com/api/swapi/films";
const root = document.querySelector("#root");
const listCards = document.createElement("ul");

const getData = (url) => {
  return fetch(url).then((response) => response.json());
};

getData(FILMS_URL).then((res) => {
  renderFilms(res);
});

const renderFilms = (data) => {
  data.forEach(({ episodeId, name, openingCrawl, characters }, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<h1>Star Wars. Episode ${episodeId}. ${name}</h1><p>${openingCrawl}</p><h3>Actors:</h3>`;
    
    const preloader = document.createElement("span");
    preloader.classList.add("loader",`loader-${i}`);
    li.appendChild(preloader);

    listCards.append(li);

    const charactersList = characters.map((url) => {
      return getData(url);
    });
    
    Promise.allSettled(charactersList).then((list) => {
      const loader = document.querySelector(`.loader-${i}`);
      loader.style.display = "none";
      list.forEach((el) => {
        if (el.status === "fulfilled") {
          const {value: { name }} = el;
          li.innerHTML += `${name}<br>`;
        }
      });
    }).catch(err=>console.warn(err));
  });

  root.append(listCards);
};
