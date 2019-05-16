package com.example.demo.controllers;

import com.example.demo.models.response.TrackResponse;
import com.example.demo.services.TrackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("tracks")
public class TrackController {

    @Autowired
    private TrackService trackService;

    @GetMapping
    public List<TrackResponse> getTracksList() {
        return trackService.getTrackList();
    }

}
