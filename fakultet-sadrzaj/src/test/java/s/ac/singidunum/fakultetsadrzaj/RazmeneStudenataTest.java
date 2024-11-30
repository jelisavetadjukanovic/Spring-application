package s.ac.singidunum.fakultetsadrzaj;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import s.ac.singidunum.fakultetsadrzaj.service.RazmeneStudenataService;
import s.ac.singidunum.fakultetsadrzaj.jpa.RazmeneStudenata;
import s.ac.singidunum.fakultetsadrzaj.repository.RazmeneStudenataRepository;
import java.util.Optional;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class RazmeneStudenataServiceTest {

    @Mock
    private RazmeneStudenataRepository repository;

    private RazmeneStudenataService service;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        service = new RazmeneStudenataService();
    }

    @Test
    void testGetRazmenaById() {
        int razmenaId = 1;
        RazmeneStudenata razmena = new RazmeneStudenata();
        razmena.setId(razmenaId);

        when(repository.findById(razmenaId)).thenReturn(Optional.of(razmena));

        RazmeneStudenata result = service.getRazmenaById(razmenaId);

        assertEquals(razmena, result);
        verify(repository, times(1)).findById(razmenaId);
        verifyNoMoreInteractions(repository);
    }
}
