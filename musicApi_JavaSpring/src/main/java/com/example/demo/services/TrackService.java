package com.example.demo.services;

import com.example.demo.models.response.TrackResponse;
import com.example.demo.repositories.TrackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TrackService {

    @Autowired
    private TrackRepository trackRepository;

    public List<TrackResponse> getTrackList() {
        return trackRepository.findAll()
                .stream()
                .map(track -> new TrackResponse(track))
                .collect(Collectors.toList());
    }

}
