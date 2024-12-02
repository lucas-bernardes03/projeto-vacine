package org.persistencia.projetovacine.controller;

import org.persistencia.projetovacine.model.Alergia;
import org.persistencia.projetovacine.service.AlergiaServico;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(value = "/alergia")
@CrossOrigin(value = "http://localhost:4200")
public class AlergiaController {

    private final AlergiaServico alergiaServico;

    public AlergiaController(AlergiaServico alergiaServico){
        this.alergiaServico = alergiaServico;
    }

    @GetMapping
    public ResponseEntity<List<Alergia>> getAlergias(){
        List<Alergia> alergias = alergiaServico.getAlergias();
        return ResponseEntity.ok(alergias);
    }

    @PostMapping
    public ResponseEntity<Alergia> criarAlergia(@RequestBody Alergia alergia){
        Alergia alergiaCriada = alergiaServico.criarAlergia(alergia);
        return ResponseEntity.ok(alergiaCriada);
    }
}
