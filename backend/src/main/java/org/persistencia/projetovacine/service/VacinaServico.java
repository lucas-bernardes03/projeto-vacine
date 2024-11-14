package org.persistencia.projetovacine.service;

import org.persistencia.projetovacine.model.Vacina;
import org.persistencia.projetovacine.repository.IVacinaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VacinaServico {
    private final IVacinaRepository vacinaRepository;

    public VacinaServico(IVacinaRepository vacinaRepository){
        this.vacinaRepository = vacinaRepository;
    }

    public List<Vacina> getVacinas(){
        return vacinaRepository.findAll();
    }

    public Vacina criarVacina(Vacina vacina){
        return vacinaRepository.save(vacina);
    }
}
