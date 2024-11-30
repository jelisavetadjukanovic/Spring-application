package s.ac.singidunum.fakultetsadrzaj.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import s.ac.singidunum.fakultetsadrzaj.jpa.Prostorije;
import s.ac.singidunum.fakultetsadrzaj.repository.ProstorijeRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProstorijeService {

    @Autowired
    private ProstorijeRepository prostorijeRepository;

    public ProstorijeService(ProstorijeRepository prostorijeRepository) {

    }

    public List<Prostorije> getProstorije() {
        return prostorijeRepository.findAll();
    }

    public Prostorije getProstorijaById(Integer id) {
        Optional<Prostorije> prostorija = prostorijeRepository.findById(id);
        return prostorija.orElse(null);
    }

    public void saveProstorija(Prostorije prostorija) {
        prostorijeRepository.save(prostorija);
    }

}
