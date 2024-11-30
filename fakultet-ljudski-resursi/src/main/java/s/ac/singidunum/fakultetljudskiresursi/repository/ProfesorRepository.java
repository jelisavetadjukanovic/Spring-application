package s.ac.singidunum.fakultetljudskiresursi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import s.ac.singidunum.fakultetljudskiresursi.jpa.Profesor;

import java.util.List;

@Repository
public interface ProfesorRepository extends JpaRepository<Profesor, Integer> {
    List<Profesor> findByImeContainingIgnoreCase(String ime);
}
