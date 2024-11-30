package s.ac.singidunum.fakultetsadrzaj;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import s.ac.singidunum.fakultetsadrzaj.controller.ProstorijeController;
import s.ac.singidunum.fakultetsadrzaj.jpa.Prostorije;
import s.ac.singidunum.fakultetsadrzaj.service.ProstorijeService;
import static org.mockito.Mockito.*;

class ProstorijeControllerTest {

    @Mock
    private ProstorijeService prostorijeService;

    @InjectMocks
    private ProstorijeController prostorijeController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    @Test
    void testSaveProstorija() {
        Prostorije prostorija = new Prostorije(1, "AMFITEATAR");

        prostorijeController.saveProstorija(prostorija);

        verify(prostorijeService, times(1)).saveProstorija(prostorija);
        verifyNoMoreInteractions(prostorijeService);
    }
}
