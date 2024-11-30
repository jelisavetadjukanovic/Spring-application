package s.ac.singidunum.fakultetsadrzaj.jpa;

import javax.persistence.*;

@Entity
public class Prostorije {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;
    private String oznaka;
    @Enumerated(EnumType.STRING)
    private TipProsotrije tip;
    private int kapacitet;
    @Enumerated(EnumType.STRING)
    private ProstorijaStatus status;

    public Prostorije () {
    }
    public Prostorije(int i, String s) {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getOznaka() {
        return oznaka;
    }

    public void setOznaka(String oznaka) {
        this.oznaka = oznaka;
    }

    public TipProsotrije getTip() {
        return tip;
    }

    public void setTip(TipProsotrije tip) {
        this.tip = tip;
    }

    public int getKapacitet() {
        return kapacitet;
    }

    public void setKapacitet(int kapacitet) {
        this.kapacitet = kapacitet;
    }

    public ProstorijaStatus getStatus() {
        return status;
    }

    public void setStatus(ProstorijaStatus status) {
        this.status = status;
    }
}
