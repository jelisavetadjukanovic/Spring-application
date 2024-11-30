package s.ac.singidunum.fakultetsadrzaj.jpa;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
public class RazmeneStudenata {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;
    private Date datumPocetka;
    private Date datumKraja;
    private String drzava;
    private String grad;
    private String nazivUniverziteta;
    private String nazivFakulteta;
    private String oblast;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getDatumPocetka() {
        return datumPocetka;
    }

    public void setDatumPocetka(Date datumPocetka) {
        this.datumPocetka = datumPocetka;
    }

    public Date getDatumKraja() {
        return datumKraja;
    }

    public void setDatumKraja(Date datumKraja) {
        this.datumKraja = datumKraja;
    }

    public String getDrzava() {
        return drzava;
    }

    public void setDrzava(String drzava) {
        this.drzava = drzava;
    }

    public String getGrad() {
        return grad;
    }

    public void setGrad(String grad) {
        this.grad = grad;
    }

    public String getNazivUniverziteta() {
        return nazivUniverziteta;
    }

    public void setNazivUniverziteta(String nazivUniverziteta) {
        this.nazivUniverziteta = nazivUniverziteta;
    }

    public String getNazivFakulteta() {
        return nazivFakulteta;
    }

    public void setNazivFakulteta(String nazivFakulteta) {
        this.nazivFakulteta = nazivFakulteta;
    }

    public String getOblast() {
        return oblast;
    }

    public void setOblast(String oblast) {
        this.oblast = oblast;
    }
}
