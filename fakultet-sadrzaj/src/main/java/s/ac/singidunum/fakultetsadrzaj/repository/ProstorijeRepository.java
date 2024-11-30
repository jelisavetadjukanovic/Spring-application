package s.ac.singidunum.fakultetsadrzaj.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import s.ac.singidunum.fakultetsadrzaj.jpa.Prostorije;

@Repository
public interface ProstorijeRepository extends JpaRepository<Prostorije, Integer> {
}
