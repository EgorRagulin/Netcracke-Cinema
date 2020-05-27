package com.netcracker.cinema.backend.enums;

import com.netcracker.cinema.backend.models.all.movie.genres.AllMovieGenreModel;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public enum MovieGenre {
    action,
    adventure,
    comedy,
    cream,
    gangster,
    drama,
    epics,
    historical,
    horror,
    musicals,
    dance,
    science,
    fiction,
    war,
    westerns;

    public static String transformListToString(List<String> genresList) {
        if (genresList != null) {
            String genresString = "";

            if (genresList.isEmpty()) {
                for (MovieGenre genre : MovieGenre.values()) {
                    genresString += "0";
                }
            }
            else {
                for (MovieGenre genre : MovieGenre.values()) {
                    genresString += genresList.contains(genre.toString()) ? "1" : "0";
                }
            }

            return genresString;
        }
        else return "0";
    }

    public static List<String> transformStringToList(String genresString) {
        List<String> genresList = new ArrayList<String>();
        if (genresString != "" && genresString != null ) {
            char one = '1';
            int i = 0;

            for (char genre : genresString.toCharArray()) {
                if (genre == one) {
                    genresList.add(MovieGenre.values()[i].toString());
                }
                i++;
            }

            return genresList;
        } else return Collections.emptyList();
    }

    public static AllMovieGenreModel getAllGenres() {
        List<String> allGenres = new ArrayList<String>();;

        for (MovieGenre genre : MovieGenre.values()) {
            allGenres.add(genre.toString());
        }

        return new AllMovieGenreModel(allGenres);
    }
}


