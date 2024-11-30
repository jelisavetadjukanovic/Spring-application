package s.ac.singidunum.fakultetljudskiresursi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import s.ac.singidunum.fakultetljudskiresursi.jpa.Profesor;
import s.ac.singidunum.fakultetljudskiresursi.repository.ProfesorRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProfesorService {

    @Autowired
    ProfesorRepository profesorRepository;

    public List<Profesor> getProfesori() {
        return profesorRepository.findAll();
    }

    public Profesor getProfesorById(Integer id) {
        Optional<Profesor> profesor = profesorRepository.findById(id);
        return profesor.orElse(null);
    }

    public void saveProfesor(Profesor profesor)
    {
        profesorRepository.save(profesor);
    }

    public List<Profesor> getProfesorByName(String ime) {
        return profesorRepository.findByImeContainingIgnoreCase(ime);
    }


}
