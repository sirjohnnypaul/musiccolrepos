package com.example.demo.models.response;

import com.example.demo.entities.Album;
import com.example.demo.entities.Track;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@NoArgsConstructor
public class AlbumResponse {

    private Long id;
    private String title;
    private String body;
    private String albumcoverurl;

    private Long bandId;
    private String bandName;
    private List<TrackResponse> tracks;

    public  AlbumResponse(Album album) {
        id = album.getId();
        title = album.getTitle();
        body = album.getBody();
        albumcoverurl = album.getAlbumcoverurl();

        bandId = album.getBand().getId();
        bandName = album.getBand().getName();

        tracks = album.getTracks()
                .stream()
                .map(track -> new TrackResponse(track))
                .collect(Collectors.toList());
    }

}
