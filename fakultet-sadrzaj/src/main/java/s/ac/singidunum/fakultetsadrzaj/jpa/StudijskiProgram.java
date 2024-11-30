package s.ac.singidunum.fakultetsadrzaj.jpa;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class StudijskiProgram {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;
    private String naziv;
    private int godineTrajanja;
    private int ESPBodovi;
    private String oblastiSpecijalizacije;
    private String opis;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNaziv() {
        return naziv;
    }

    public void setNaziv(String naziv) {
        this.naziv = naziv;
    }

    public int getGodineTrajanja() {
        return godineTrajanja;
    }

    public void setGodineTrajanja(int godineTrajanja) {
        this.godineTrajanja = godineTrajanja;
    }

    public int getESPBodovi() {
        return ESPBodovi;
    }

    public void setESPBodovi(int ESPBodovi) {
        this.ESPBodovi = ESPBodovi;
    }

    public String getOblastiSpecijalizacije() {
        return oblastiSpecijalizacije;
    }

    public void setOblastiSpecijalizacije(String oblastiSpecijalizacije) {
        this.oblastiSpecijalizacije = oblastiSpecijalizacije;
    }

    public String getOpis() {
        return opis;
    }

    public void setOpis(String opis) {
        this.opis = opis;
    }
}
