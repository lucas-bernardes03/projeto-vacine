package org.persistencia.projetovacine.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String nome;
    private Date dataNascimento;
    private String sexo;
    private String logradouro;
    private Integer numero;
    private String setor;
    private String cidade;
    private String uf;

    @ManyToMany
    private List<Alergia> alergias;
}
