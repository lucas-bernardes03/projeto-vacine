package org.persistencia.projetovacine.service;

import org.persistencia.projetovacine.model.Usuario;
import org.persistencia.projetovacine.repository.IUsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioServico {

    private final IUsuarioRepository usuarioRepository;

    public UsuarioServico(IUsuarioRepository usuarioRepository){
        this.usuarioRepository = usuarioRepository;
    }

    public List<Usuario> getUsuarios(){
        return usuarioRepository.findAll();
    }

    public Usuario criarUsuario(Usuario usuario){
        return usuarioRepository.save(usuario);
    }
}
