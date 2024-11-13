package org.persistencia.projetovacine.repository;

import org.persistencia.projetovacine.model.Vacina;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IVacinaRepository extends JpaRepository<Vacina, Long> {
}
