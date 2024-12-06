package org.persistencia.projetovacine.service;

import org.persistencia.projetovacine.enums.SituacaoEnum;
import org.persistencia.projetovacine.model.Agenda;
import org.persistencia.projetovacine.repository.IAgendaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgendaServico {
    private final IAgendaRepository agendaRepository;

    public AgendaServico(IAgendaRepository agendaRepository) {
        this.agendaRepository = agendaRepository;
    }

    public List<Agenda> getAgendas() {
        return agendaRepository.findAll();
    }

    public Agenda criarAgenda(Agenda agenda) {
        return agendaRepository.save(agenda);
    }

    public void updateSituacao(long id, String situacao, String observacoes) throws IllegalArgumentException {
        Agenda agenda = agendaRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Agenda " + id +" não encontrada"));
        agenda.setSituacao(SituacaoEnum.valueOf(situacao.toUpperCase()));
        agenda.setObservacoes(observacoes);
        agendaRepository.save(agenda);
    }

    public void deletarAgenda(Agenda agenda) {
        agendaRepository.delete(agenda);
    }
}
