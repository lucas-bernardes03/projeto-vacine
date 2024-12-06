package org.persistencia.projetovacine.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum SituacaoEnum {
    AGENDADO("agendado"),
    CANCELADO("cancelado"),
    REALIZADO("realizado");

    private final String situacao;
}
