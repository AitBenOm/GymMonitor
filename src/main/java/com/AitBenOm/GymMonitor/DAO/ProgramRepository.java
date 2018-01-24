package com.AitBenOm.GymMonitor.DAO;

import com.AitBenOm.GymMonitor.entities.Program;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ProgramRepository extends JpaRepository<Program,Long> {
    @Override
    default List<Program> findAll() {
        return null;
    }
}
