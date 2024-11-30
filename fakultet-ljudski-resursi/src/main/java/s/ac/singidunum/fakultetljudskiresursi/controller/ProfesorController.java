package s.ac.singidunum.fakultetljudskiresursi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import s.ac.singidunum.fakultetljudskiresursi.jpa.Profesor;
import s.ac.singidunum.fakultetljudskiresursi.service.ProfesorService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("profesori")
public class ProfesorController {

    @Autowired
    ProfesorService profesorService;

    @GetMapping("")
    public List<Profesor> getProfesori() {
        return profesorService.getProfesori();
    }

    @GetMapping("{id}")
    public Profesor getProfesorById(@PathVariable int id) {
        return profesorService.getProfesorById(id);
    }

    @GetMapping("ime")
    public List<Profesor> getProfesorByName(@RequestParam String ime) {
        return profesorService.getProfesorByName(ime);
    }

    @PostMapping("")
    public void saveProfesor(@RequestBody Profesor profesor) {
        profesorService.saveProfesor(profesor);
    }

}
