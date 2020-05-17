package com.netcracker.cinema.backend.models.all.movie.genres;

import java.util.List;

public class AllMovieGenreModel {
    private List<String> genres;

    public AllMovieGenreModel(List<String> genres) {
        this.genres = genres;
    }

    public List<String> getGenres() {
        return genres;
    }

    public void setGenres(List<String> genres) {
        this.genres = genres;
    }
}
