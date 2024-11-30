package s.ac.singidunum.fakultetsadrzaj.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import s.ac.singidunum.fakultetsadrzaj.jpa.Prostorije;
import s.ac.singidunum.fakultetsadrzaj.jpa.StudijskiProgram;
import s.ac.singidunum.fakultetsadrzaj.service.ProstorijeService;
import s.ac.singidunum.fakultetsadrzaj.service.StudijskiProgramService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("studijski-programi")
public class StudijskiProgramController {

    @Autowired
    StudijskiProgramService studijskiProgramService;

    @GetMapping("")
    public List<StudijskiProgram> getStudijskiProgrami() {
        return studijskiProgramService.getStudijskiProgrami();
    }

    @GetMapping("{id}")
    public StudijskiProgram getProgramById(@PathVariable int id) {
        return studijskiProgramService.getStudijskiProgramById(id);
    }

    @PostMapping("")
    public void saveProgram(@RequestBody StudijskiProgram studijskiProgram) {
        studijskiProgramService.saveStudijskiProgram(studijskiProgram);
    }

}
