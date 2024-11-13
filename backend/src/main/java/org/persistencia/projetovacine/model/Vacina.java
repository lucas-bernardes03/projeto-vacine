package org.persistencia.projetovacine.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.persistencia.projetovacine.enums.PeriodicidadeEnum;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Vacina {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;
    private String descricao;
    private int doses;
    private PeriodicidadeEnum periodicidade;
    private int intervalo;
}
