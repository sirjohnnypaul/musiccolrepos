package com.example.demo.controllers;

import com.example.demo.models.response.AlbumResponse;
import com.example.demo.services.AlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AlbumController {

    @Autowired
    private AlbumService albumService;

    @GetMapping("albums")
    public List<AlbumResponse> getAlbumList() {
        return albumService.getAlbumList();
    }

    @GetMapping("albums/{albumId}")
    public AlbumResponse getAlbum(@PathVariable long albumId) {
        return albumService.getAlbum(albumId);
    }

    @GetMapping("bands/{bandId}/albums")
    public List<AlbumResponse> getAlbumListByBand(@PathVariable Long bandId) {
        return albumService.getAlbumListByBand(bandId);
    }

}
