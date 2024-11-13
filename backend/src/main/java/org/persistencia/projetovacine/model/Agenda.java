package org.persistencia.projetovacine.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Agenda {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Date data;
    private String situacao;
    private Date dataSituacao;
    private String observacoes;

    @ManyToOne
    private Vacina vacina;

    @ManyToOne
    private Usuario usuario;
}
