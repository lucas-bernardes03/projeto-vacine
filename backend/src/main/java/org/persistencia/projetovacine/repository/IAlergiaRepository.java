package org.persistencia.projetovacine.repository;

import org.persistencia.projetovacine.model.Alergia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAlergiaRepository extends JpaRepository<Alergia, Long> {
}
