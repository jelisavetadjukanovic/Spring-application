package s.ac.singidunum.fakultetljudskiresursi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import s.ac.singidunum.fakultetljudskiresursi.jpa.Student;

import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

    Student findFirstByOrderByProsekDesc();
}
