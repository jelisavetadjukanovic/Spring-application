package s.ac.singidunum.fakultetljudskiresursi;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import s.ac.singidunum.fakultetljudskiresursi.jpa.Student;

public class StudentTest {

    @Test
    public void testGettersAndSetters() {
        // Testiranje gettera i settera

        Integer id = 1;
        String brojIndeksa = "12345";
        String ime = "John";
        String prezime = "Doe";
        String srednjaSkola = "Srednja škola";
        float prosek = 4.5f;

        Student student = new Student(id, brojIndeksa, ime, prezime, srednjaSkola, prosek);
        student.setId(id);
        student.setBrojIndeksa(brojIndeksa);
        student.setIme(ime);
        student.setPrezime(prezime);
        student.setSrednjaSkola(srednjaSkola);
        student.setProsek(prosek);

        assertEquals(id, student.getId());
        assertEquals(brojIndeksa, student.getBrojIndeksa());
        assertEquals(ime, student.getIme());
        assertEquals(prezime, student.getPrezime());
        assertEquals(srednjaSkola, student.getSrednjaSkola());
        assertEquals(prosek, student.getProsek(), 0.01); // 0.01 je tolerancija za poređenje float brojeva
    }

    @Test
    public void testConstructor() {
        // Testiranje konstruktora

        Integer id = 1;
        String brojIndeksa = "12345";
        String ime = "John";
        String prezime = "Doe";
        String srednjaSkola = "Srednja škola";
        float prosek = 4.5f;

        Student student = new Student(id, brojIndeksa, ime, prezime, srednjaSkola, prosek);

        assertEquals(id, student.getId());
        assertEquals(brojIndeksa, student.getBrojIndeksa());
        assertEquals(ime, student.getIme());
        assertEquals(prezime, student.getPrezime());
        assertEquals(srednjaSkola, student.getSrednjaSkola());
        assertEquals(prosek, student.getProsek(), 0.01); // 0.01 je tolerancija za usporedbu float brojeva
    }
}