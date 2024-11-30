package s.ac.singidunum.fakultetsadrzaj;

import s.ac.singidunum.fakultetsadrzaj.jpa.TipProsotrije;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class TipProsotrijeTest {

    @Test
    void testTipProstorije() {
        assertEquals(TipProsotrije.UCIONICA, TipProsotrije.valueOf("UCIONICA"));
        assertEquals(TipProsotrije.AMFITEATAR, TipProsotrije.valueOf("AMFITEATAR"));
        assertEquals(TipProsotrije.KANCELARIJA, TipProsotrije.valueOf("KANCELARIJA"));
        assertEquals(TipProsotrije.OSTALO, TipProsotrije.valueOf("OSTALO"));

        TipProsotrije tip = TipProsotrije.UCIONICA;
        assertTrue(tip instanceof Enum);
        assertTrue(tip instanceof TipProsotrije);
    }
}
