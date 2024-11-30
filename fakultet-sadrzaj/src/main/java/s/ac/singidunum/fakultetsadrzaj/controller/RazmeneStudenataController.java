package s.ac.singidunum.fakultetsadrzaj.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import s.ac.singidunum.fakultetsadrzaj.jpa.Prostorije;
import s.ac.singidunum.fakultetsadrzaj.jpa.RazmeneStudenata;
import s.ac.singidunum.fakultetsadrzaj.service.ProstorijeService;
import s.ac.singidunum.fakultetsadrzaj.service.RazmeneStudenataService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("razmene-studenata")
public class RazmeneStudenataController {
    @Autowired
    RazmeneStudenataService razmeneStudenataService;

    @GetMapping("")
    public List<RazmeneStudenata> getRazmene() {
        return razmeneStudenataService.getRazmene();
    }

    @GetMapping("{id}")
    public RazmeneStudenata getRazmenaById(@PathVariable int id) {
        return razmeneStudenataService.getRazmenaById(id);
    }

    @PostMapping("")
    public void saveRazmena(@RequestBody RazmeneStudenata razmeneStudenata) {
        razmeneStudenataService.saveRazmena(razmeneStudenata);
    }
}
