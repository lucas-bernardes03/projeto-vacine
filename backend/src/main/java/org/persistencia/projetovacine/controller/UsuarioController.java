package org.persistencia.projetovacine.controller;

import org.persistencia.projetovacine.model.Usuario;
import org.persistencia.projetovacine.service.UsuarioServico;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(value = "/usuario")
@CrossOrigin(value = "http://localhost:4200")
public class UsuarioController {

    private final UsuarioServico usuarioServico;

    public UsuarioController(UsuarioServico usuarioServico){
        this.usuarioServico = usuarioServico;
    }

    @GetMapping
    public ResponseEntity<List<Usuario>> getUsarios(){
        List<Usuario> usuarios = usuarioServico.getUsuarios();
        return ResponseEntity.ok(usuarios);
    }

    @PostMapping
    public ResponseEntity<Usuario> criarUsuario(@RequestBody Usuario usuario){
        Usuario usuarioCriado = usuarioServico.criarUsuario(usuario);
        return ResponseEntity.ok(usuarioCriado);
    }
}
