package org.persistencia.projetovacine.controller;

import org.persistencia.projetovacine.model.Vacina;
import org.persistencia.projetovacine.service.VacinaServico;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(value = "/vacina")
@CrossOrigin(value = "http://localhost:4200")
public class VacinaController {
    private final VacinaServico vacinaServico;

    public VacinaController(VacinaServico vacinaServico){
        this.vacinaServico = vacinaServico;
    }

    @GetMapping
    public ResponseEntity<List<Vacina>> getVacinas(){
        List<Vacina> vacinas = vacinaServico.getVacinas();
        return ResponseEntity.ok(vacinas);
    }

    @PostMapping
    public ResponseEntity<Vacina> criarVacina(@RequestBody Vacina vacina){
        Vacina vacinaCriada = vacinaServico.criarVacina(vacina);
        return ResponseEntity.ok(vacinaCriada);
    }
}
