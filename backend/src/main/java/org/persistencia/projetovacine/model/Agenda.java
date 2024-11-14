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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date data;
    private String situacao;
    private Date dataSituacao;
    private String observacoes;

    @ManyToOne
    @JoinColumn(name = "vacina_id")
    private Vacina vacina;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;
}
