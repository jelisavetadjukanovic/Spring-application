package s.ac.singidunum.fakultetsadrzaj.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import s.ac.singidunum.fakultetsadrzaj.jpa.RazmeneStudenata;
import s.ac.singidunum.fakultetsadrzaj.jpa.StudijskiProgram;
import s.ac.singidunum.fakultetsadrzaj.repository.RazmeneStudenataRepository;

import java.util.List;
import java.util.Optional;

@Service
public class RazmeneStudenataService {

    @Autowired
    private RazmeneStudenataRepository repository;

    public List<RazmeneStudenata> getRazmene() {
        return repository.findAll();
    }

    public RazmeneStudenata getRazmenaById(Integer id) {
        Optional<RazmeneStudenata> razmeneStudenata = repository.findById(id);
        return razmeneStudenata.orElse(null);
    }

    public void saveRazmena(RazmeneStudenata razmenaStudenata) {
        repository.save(razmenaStudenata);
    }
}
