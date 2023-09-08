"use strict";

import { api_key, imageBaseURL, fetchDataFromServer } from "./api";
import { sidebar } from "./sidebar";
import { createMovieCard } from "./movie-card";

const pageContent = document.querySelector("[page-content]");

sidebar();
