package com.example.demo.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "bands")
@Getter
@Setter
@NoArgsConstructor
public class Band {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @Column(columnDefinition = "TEXT")
    private String bio;

    @Column(name = "bandimageurl")
    private String bandImageUrl;

    @OneToMany(mappedBy = "band")
    private List<Album> albums;

}
