package com.gymmonitor.gymmonitor;

import com.AitBenOm.GymMonitor.DAO.ProgramRepository;
import com.AitBenOm.GymMonitor.entities.Exercise;

import com.AitBenOm.GymMonitor.entities.Program;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.List;

@SpringBootApplication
@ComponentScan("com.AitBenOm.GymMonitor")
public class GymmonitorApplication implements CommandLineRunner {


	private ProgramRepository programRepository;
	public List<Exercise> exercises;


	public static void main(String[] args) {
		SpringApplication.run(GymmonitorApplication.class, args);
	}
	@Override
	public void run(String... strings) throws Exception {
		DateFormat df = new SimpleDateFormat(("dd/MM/yyyy"));
		programRepository.save(
				new Program("pec",
						df.parse("24/01/2018"),
						df.parse("24/01/2018"),
						exercises
				)
		);
	}

}
