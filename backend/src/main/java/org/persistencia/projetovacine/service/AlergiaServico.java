package org.persistencia.projetovacine.service;

import org.persistencia.projetovacine.model.Alergia;
import org.persistencia.projetovacine.repository.IAlergiaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlergiaServico {

    private final IAlergiaRepository alergiaRepository;

    public AlergiaServico(IAlergiaRepository alergiaRepository){
        this.alergiaRepository = alergiaRepository;
    }

    public List<Alergia> getAlergias(){
        return alergiaRepository.findAll();
    }

    public Alergia criarAlergia(Alergia alergia){
        return alergiaRepository.save(alergia);
    }
}
