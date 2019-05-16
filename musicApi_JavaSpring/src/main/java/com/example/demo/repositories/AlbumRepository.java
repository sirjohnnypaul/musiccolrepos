package com.example.demo.repositories;

import com.example.demo.entities.Album;
import com.example.demo.entities.Band;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AlbumRepository extends JpaRepository<Album, Long> {
    List<Album> findByBand(Band band);
}
