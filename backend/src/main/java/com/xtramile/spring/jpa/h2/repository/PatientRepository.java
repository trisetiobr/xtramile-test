package com.xtramile.spring.jpa.h2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xtramile.spring.jpa.h2.model.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> {
  List<Patient> findByFirstNameContaining(String firstName);
  
}
