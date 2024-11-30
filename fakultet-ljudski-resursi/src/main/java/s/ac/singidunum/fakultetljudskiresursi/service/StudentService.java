package s.ac.singidunum.fakultetljudskiresursi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import s.ac.singidunum.fakultetljudskiresursi.jpa.Student;
import s.ac.singidunum.fakultetljudskiresursi.repository.StudentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    StudentRepository studentRepository;

    public List<Student> getStudents() {
        return studentRepository.findAll();
    }

    public Student getStudentById(Integer id) {
        Optional<Student> student = studentRepository.findById(id);
        return student.orElse(null);
    }

    public double getNajveciProsekNaFakultetu() {
        Student student =  studentRepository.findFirstByOrderByProsekDesc();
        if (student != null) {
            return Math.round(student.getProsek() * 100.0) / 100.0;
        } else {
            return 0;
        }
    }

    public void saveStudent(Student student) {
        studentRepository.save(student);
    }
}
