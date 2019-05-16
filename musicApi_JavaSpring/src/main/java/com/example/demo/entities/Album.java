package com.example.demo.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "albums")
@Getter
@Setter
@NoArgsConstructor
public class Album {

    @Id
    @GeneratedValue
    private Long id;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String body;

    private String albumcoverurl;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "band_id")
    private Band band;

    @OneToMany(mappedBy = "album")
    private List<Track> tracks;

}
