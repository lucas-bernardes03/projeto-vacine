package org.persistencia.projetovacine.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Vacina {
    public static Integer PERIODICIDADE_DIA = 1;
    public static Integer PERIODICIDADE_SEMANA = 2;
    public static Integer PERIODICIDADE_MES = 3;
    public static Integer PERIODICIDADE_ANO = 4;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;
    private String descricao;
    private int doses;
    private Integer periodicidade;
    private int intervalo;
}
