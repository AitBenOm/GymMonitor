package com.AitBenOm.GymMonitor.DAO;

import com.AitBenOm.GymMonitor.entities.Program;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProgramRepository extends JpaRepository<Program,Long> {
}
