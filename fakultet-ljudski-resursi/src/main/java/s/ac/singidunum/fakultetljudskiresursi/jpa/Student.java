package s.ac.singidunum.fakultetljudskiresursi.jpa;

import java.io.Serializable;
import javax.persistence.*;
import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
public class Student {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private String brojIndeksa;
	private String ime;
	private String prezime;
	private String srednjaSkola;
	private float prosek;


	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getBrojIndeksa() {
		return brojIndeksa;
	}

	public void setBrojIndeksa(String brojIndeksa) {
		this.brojIndeksa = brojIndeksa;
	}

	public String getIme() {
		return ime;
	}

	public void setIme(String ime) {
		this.ime = ime;
	}

	public String getPrezime() {
		return prezime;
	}

	public void setPrezime(String prezime) {
		this.prezime = prezime;
	}

	public String getSrednjaSkola() {
		return srednjaSkola;
	}

	public void setSrednjaSkola(String srednjaSkola) {
		this.srednjaSkola = srednjaSkola;
	}

	public float getProsek() {
		return prosek;
	}

	public void setProsek(float prosek) {
		this.prosek = prosek;
	}

	public Student() {
	}

	public Student(Integer id, String brojIndeksa, String ime, String prezime, String srednjaSkola, float prosek) {
		this.id = id;
		this.brojIndeksa = brojIndeksa;
		this.ime = ime;
		this.prezime = prezime;
		this.srednjaSkola = srednjaSkola;
		this.prosek = prosek;
	}
}