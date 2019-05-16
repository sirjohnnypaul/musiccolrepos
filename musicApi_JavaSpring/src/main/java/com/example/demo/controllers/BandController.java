package com.example.demo.controllers;

import com.example.demo.models.response.BandResponse;
import com.example.demo.services.BandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("bands")
public class BandController {

        @Autowired
        private BandService bandService;

        @GetMapping
        public List<BandResponse> getAlbumList() {
            return bandService.getBandList();
        }

        @GetMapping("{bandId}")
        public BandResponse getBand(@PathVariable long bandId) {
            return bandService.getBand(bandId);
        }
}
