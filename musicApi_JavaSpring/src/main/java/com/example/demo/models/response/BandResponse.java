package com.example.demo.models.response;

import com.example.demo.entities.Band;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@NoArgsConstructor
public class BandResponse {

    private Long id;
    private String name;
    private String bio;
    private String bandimageurl;

//    private List<AlbumResponse> albums;

    public BandResponse(Band band) {
        id = band.getId();
        name = band.getName();
        bio = band.getBio();
        bandimageurl = band.getBandImageUrl();

//        albums = band.getAlbums()
//                .stream()
//                .map(album -> new AlbumResponse(album))
//                .collect(Collectors.toList());
    }

}
