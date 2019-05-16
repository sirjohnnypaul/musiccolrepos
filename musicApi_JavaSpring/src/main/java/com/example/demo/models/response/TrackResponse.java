package com.example.demo.models.response;

import com.example.demo.entities.Track;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
public class TrackResponse {

    private Long id;
    private String title;
    private String time;
    private String youtubeurl;

    public TrackResponse(Track track) {
        id = track.getId();
        title = track.getTitle();
        time = track.getTime();
        youtubeurl = track.getYoutubeurl();
    }

}
