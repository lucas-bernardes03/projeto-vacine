package org.persistencia.projetovacine.enums;

import lombok.Getter;

@Getter
public enum PeriodicidadeEnum {
    DIA(1),
    SEMANA(2),
    MES(3),
    ANO(4);

    private final int valor;

    PeriodicidadeEnum(int valor){
        this.valor = valor;
    }

}
