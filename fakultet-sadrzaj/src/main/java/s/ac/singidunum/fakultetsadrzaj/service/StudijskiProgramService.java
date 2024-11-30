package s.ac.singidunum.fakultetsadrzaj.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import s.ac.singidunum.fakultetsadrzaj.jpa.StudijskiProgram;
import s.ac.singidunum.fakultetsadrzaj.repository.StudijskiProgramRepository;

import java.util.List;
import java.util.Optional;

@Service
public class StudijskiProgramService {

    @Autowired
    StudijskiProgramRepository studijskiProgramRepository;

    public List<StudijskiProgram> getStudijskiProgrami() {
        return studijskiProgramRepository.findAll();
    }

    public StudijskiProgram getStudijskiProgramById(Integer id) {
        Optional<StudijskiProgram> studijskiProgram = studijskiProgramRepository.findById(id);
        return studijskiProgram.orElse(null);
    }

    public void saveStudijskiProgram(StudijskiProgram studijskiProgram) {
        studijskiProgramRepository.save(studijskiProgram);
    }

}
