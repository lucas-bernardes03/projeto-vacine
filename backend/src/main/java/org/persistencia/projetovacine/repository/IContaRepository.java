package org.persistencia.projetovacine.repository;

import org.persistencia.projetovacine.model.Conta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IContaRepository extends JpaRepository<Conta, Long> {
    Optional<Conta> findByUsername(String username);

    boolean existsByUsername(String username);
}
