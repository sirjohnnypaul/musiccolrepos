package com.example.demo.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class AlbumDoesNotExistException extends RuntimeException {
    public AlbumDoesNotExistException(Long albumId) {
        super(String.format("Album with id %s does not exist", albumId));
    }
}
