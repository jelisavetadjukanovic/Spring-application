package s.ac.singidunum.fakultetsadrzaj;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import s.ac.singidunum.fakultetsadrzaj.jpa.Prostorije;
import s.ac.singidunum.fakultetsadrzaj.repository.ProstorijeRepository;
import s.ac.singidunum.fakultetsadrzaj.service.ProstorijeService;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

class ProstorijeServiceTest {

    @Mock
    private ProstorijeRepository prostorijeRepository;

    private ProstorijeService prostorijeService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        prostorijeService = new ProstorijeService(prostorijeRepository);
    }

    @Test
    void testGetProstorije() {
        List<Prostorije> prostorijeList = new ArrayList<>();
        prostorijeList.add(new Prostorije(1, "Prostorija 1"));
        prostorijeList.add(new Prostorije(2, "Prostorija 2"));

        when(prostorijeRepository.findAll()).thenReturn(prostorijeList);

        List<Prostorije> result = prostorijeService.getProstorije();

        assertEquals(prostorijeList, result);
        verify(prostorijeRepository, times(1)).findAll();
        verifyNoMoreInteractions(prostorijeRepository);
    }
}