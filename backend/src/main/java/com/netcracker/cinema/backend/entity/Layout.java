package com.netcracker.cinema.backend.entity;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Layout {
    private Long id;
    private Long placesInRow;
    private Long numberOfRow;

    @Id
    @Column(name = "id")
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Basic
    @Column(name = "places_in_row")
    public Long getPlacesInRow() {
        return placesInRow;
    }

    public void setPlacesInRow(Long placesInRow) {
        this.placesInRow = placesInRow;
    }

    @Basic
    @Column(name = "number_of_row")
    public Long getNumberOfRow() {
        return numberOfRow;
    }

    public void setNumberOfRow(Long numberOfRow) {
        this.numberOfRow = numberOfRow;
    }
}
