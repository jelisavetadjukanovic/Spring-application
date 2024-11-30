package s.ac.singidunum.fakultetsadrzaj.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import s.ac.singidunum.fakultetsadrzaj.jpa.Prostorije;
import s.ac.singidunum.fakultetsadrzaj.service.ProstorijeService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("prostorije")
public class ProstorijeController {

    @Autowired
    ProstorijeService prostorijeService;

    @GetMapping("")
    public List<Prostorije> getProstorije() {
        return prostorijeService.getProstorije();
    }

    @GetMapping("{id}")
    public Prostorije getProstorijaById(@PathVariable int id) {
        return prostorijeService.getProstorijaById(id);
    }

    @PostMapping("")
    public void saveProstorija(@RequestBody Prostorije prostorija) {
        prostorijeService.saveProstorija(prostorija);
    }

}
