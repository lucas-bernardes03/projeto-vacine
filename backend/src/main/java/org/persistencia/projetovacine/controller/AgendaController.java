package org.persistencia.projetovacine.controller;

import org.persistencia.projetovacine.model.Agenda;
import org.persistencia.projetovacine.service.AgendaServico;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(value = "/agenda")
@CrossOrigin(value = "http://localhost:4200")
public class AgendaController {
    private final AgendaServico agendaServico;

    public AgendaController(AgendaServico agendaServico){
        this.agendaServico = agendaServico;
    }

    @GetMapping
    public ResponseEntity<List<Agenda>> getAgendas(){
        List<Agenda> agendas = agendaServico.getAgendas();
        return ResponseEntity.ok(agendas);
    }

    @PostMapping
    public ResponseEntity<Agenda> criarAgenda(@RequestBody Agenda agenda){
        Agenda agendaCriada = agendaServico.criarAgenda(agenda);
        return ResponseEntity.ok(agendaCriada);
    }
}
