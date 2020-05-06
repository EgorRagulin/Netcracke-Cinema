package com.netcracker.cinema.backend.enums;

import java.util.ArrayList;
import java.util.List;

public enum MovieGenre {
    action,
    adventure,
    comedy,
    creamAndGangster,
    drama,
    epicsAndHistorical,
    horror,
    musicalsAndDance,
    scienceAndFiction,
    war,
    westerns;

    public static String transformListToString(List<String> genresList) {
        String genresString = "";

        for (MovieGenre genre : MovieGenre.values()) {
            genresString += genresList.contains(genre.toString()) ? "1" : "0";
        }

        return genresString;
    }

    public static List<String> transformStringToList(String genresString) {
        List<String> genresList = new ArrayList<String>();

        char one = "1".toCharArray()[0];
        int i = 0;

        for (char genre : genresString.toCharArray()) {
            if (genre == one) {
                genresList.add(MovieGenre.values()[i].toString());
            }
            i++;
        }

        return genresList;
    }
}


