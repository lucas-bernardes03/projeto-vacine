package org.persistencia.projetovacine.controller;

import org.persistencia.projetovacine.model.Usuario;
import org.persistencia.projetovacine.service.UsuarioServico;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping(value = "/usuario")
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
