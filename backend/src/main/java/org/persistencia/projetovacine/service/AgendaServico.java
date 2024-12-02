package org.persistencia.projetovacine.service;

import org.persistencia.projetovacine.model.Agenda;
import org.persistencia.projetovacine.repository.IAgendaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgendaServico {
    private final IAgendaRepository agendaRepository;

    public AgendaServico(IAgendaRepository agendaRepository){
        this.agendaRepository = agendaRepository;
    }

    public List<Agenda> getAgendas(){
        return agendaRepository.findAll();
    }

    public Agenda criarAlterarAgenda(Agenda agenda){
        return agendaRepository.save(agenda);
    }

    public Agenda darBaixa(Agenda agenda){
        Agenda agendaAtual = agendaRepository.findById(agenda.getId()).get();
        agendaAtual.setDataSituacao(agenda.getDataSituacao());
        agendaAtual.setSituacao(agenda.getSituacao());
        agendaAtual.setObservacoes(agenda.getObservacoes());
        return agendaRepository.save(agendaAtual);
    }

    public void excluirAgenda(Agenda agenda) { agendaRepository.delete(agenda); }
}
