package com.example.demo.repositories;

import com.example.demo.entities.Band;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BandReposiory extends JpaRepository<Band, Long> {
}
