package com.example.demo.services;

import com.example.demo.entities.Album;
import com.example.demo.entities.Band;
import com.example.demo.exceptions.AlbumDoesNotExistException;
import com.example.demo.exceptions.BandDoesNotExistException;
import com.example.demo.models.response.AlbumResponse;
import com.example.demo.repositories.AlbumRepository;
import com.example.demo.repositories.BandReposiory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AlbumService {

    @Autowired
    private AlbumRepository albumRepository;

    @Autowired
    private BandReposiory bandReposiory;


    public List<AlbumResponse> getAlbumList() {
        return albumRepository.findAll()
                .stream()
                .map(album -> new AlbumResponse(album))
                .collect(Collectors.toList());
    }

    public AlbumResponse getAlbum(Long albumId) {
        Album album = albumRepository.findById(albumId)
                .orElseThrow(() -> new AlbumDoesNotExistException(albumId));

        return new AlbumResponse(album);
    }

    public List<AlbumResponse> getAlbumListByBand(Long bandId) {
        Band band = bandReposiory.findById(bandId)
                .orElseThrow(() -> new BandDoesNotExistException(bandId));

        return albumRepository.findByBand(band)
                .stream()
                .map(album -> new AlbumResponse(album))
                .collect(Collectors.toList());
    }

}
