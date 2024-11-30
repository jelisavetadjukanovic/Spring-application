package s.ac.singidunum.fakultetljudskiresursi.jpa;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Profesor {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;
    private String ime;
    private String prezime;
    private String titula;
    private String oblastSpecijalizacije;
    private int godineIskustva;

    public Integer getId() { return id; }

    public void setId(Integer id) {
        this.id = id;
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

    public String getTitula() {
        return titula;
    }

    public void setTitula(String titula) {
        this.titula = titula;
    }

    public String getOblastSpecijalizacije() {
        return oblastSpecijalizacije;
    }

    public void setOblastSpecijalizacije(String oblastSpecijalizacije) {
        this.oblastSpecijalizacije = oblastSpecijalizacije;
    }

    public int getGodineIskustva() {
        return godineIskustva;
    }

    public void setGodineIskustva(int godineIskustva) {
        this.godineIskustva = godineIskustva;
    }
}
