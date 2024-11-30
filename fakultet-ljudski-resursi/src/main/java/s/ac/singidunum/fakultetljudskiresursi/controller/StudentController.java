package s.ac.singidunum.fakultetljudskiresursi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import s.ac.singidunum.fakultetljudskiresursi.jpa.Student;
import s.ac.singidunum.fakultetljudskiresursi.service.StudentService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("studenti")
public class StudentController {

    @Autowired
    StudentService studentService;

    @GetMapping("")
    public List<Student> getStudenti() {
        return studentService.getStudents();
    }

    @GetMapping("{id}")
    public Student getStudentById(@PathVariable int id) {
        return studentService.getStudentById(id);
    }

    @GetMapping("najveci-prosek")
    public double getNajveciProsek() {
        return studentService.getNajveciProsekNaFakultetu();
    }

    @PostMapping("")
    public void saveStudent(@RequestBody Student student) {
        studentService.saveStudent(student);
    }
}
