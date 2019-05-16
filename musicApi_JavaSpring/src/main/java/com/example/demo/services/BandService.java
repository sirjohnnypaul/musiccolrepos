package com.example.demo.services;

import com.example.demo.entities.Band;
import com.example.demo.exceptions.BandDoesNotExistException;
import com.example.demo.models.response.BandResponse;
import com.example.demo.repositories.BandReposiory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BandService {

    @Autowired
    private BandReposiory bandReposiory;

    public List<BandResponse> getBandList() {
        return bandReposiory.findAll()
                .stream()
                .map(band -> new BandResponse(band))
                .collect(Collectors.toList());
    }

    public BandResponse getBand(Long bandId) {
        Band band = bandReposiory.findById(bandId)
                .orElseThrow(() -> new BandDoesNotExistException(bandId));

        return new BandResponse(band);
    }

}
