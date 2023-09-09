"use strict";

import { api_key, fetchDataFromServer } from "./api.js";

export function sidebar() {
  const genreList = {};

  fetchDataFromServer(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`,
    function ({ genres }) {
      for (const { id, name } of genres) {
        genreList[id] = name;
      }

      genreLink();
    }
  );

  const sidebarInner = document.createElement("div");
  sidebarInner.classList.add("sidebar-inner");

  sidebarInner.innerHTML = `
    <div class="sidebar-list">
      <p class="title">Genre</p>
    </div>

    <div class="sidebar-list">
      <p class="title">Language</p>

      <a href="./movie-list.html" menu-close class="sidebar-link">English</a>

      <a href="./movie-list.html" menu-close class="sidebar-link">Hindi</a>

      <a href="./movie-list.html" menu-close class="sidebar-link">French</a>

      <a href="./movie-list.html" menu-close class="sidebar-link">German</a>

      <a href="./movie-list.html" menu-close class="sidebar-link">Spansish</a>

      <a href="./movie-list.html" menu-close class="sidebar-link">Chinese</a>

      <a href="./movie-list.html" menu-close class="sidebar-link">Bengali</a>
    </div>

    <div class="sidebar-footer">
      <p class="copyright">Copyright 2023 <span>AmolShelke</span></p>

      <img
        src="./assets/images/tmdb-logo.png"
        height="17"
        width="130"
        alt="tmdb movie database logo" />
    </div>
  `;

  const genreLink = function () {
    for (const [genreID, genreName] of Object.entries(genreList)) {
      const link = document.createElement("a");
      link.classList.add("sidebar-link");
      link.setAttribute("href", "./movie-list.html");
      link.setAttribute("menu-close", "");
      // link.setAttribute(
      //   "onclick",
      //   `getMovieList("with_genres=${genreId}"), "${$genreName}"`
      // );
      link.textContent = genreName;

      sidebarInner.querySelectorAll(".sidebar-list")[0].appendChild(link);
    }

    const sidebar = document.querySelector("[sidebar]");
    sidebar.appendChild(sidebarInner);
    togglerSidebar(sidebar);
  };

  const togglerSidebar = function (sidebar) {
    // Toggle sidebar
    const sidebarBtn = document.querySelector("[menu-btn]");
    const sidebarTogglers = document.querySelectorAll("[menu-toggler]");
    const sidebarClose = document.querySelector("[menu-close]");
    const overlay = document.querySelector("[overlay]");

    addEventOnElements(sidebarTogglers, "click", function () {
      sidebar.classList.toggle("active");
      sidebarBtn.classList.toggle("active");
      overlay.classList.toggle("active");
    });

    addEventOnElements(sidebarClose, "click", function () {
      sidebar.classList.remove("active");
      sidebarBtn.classList.remove("active");
      overlay.classList.remove("active");
    });
  };
}
