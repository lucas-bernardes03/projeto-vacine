package org.persistencia.projetovacine.repository;

import org.persistencia.projetovacine.model.Agenda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAgendaRepository extends JpaRepository<Agenda, Long> {
}
