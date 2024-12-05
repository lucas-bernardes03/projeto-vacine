package org.persistencia.projetovacine.service;

import org.persistencia.projetovacine.model.Conta;
import org.persistencia.projetovacine.repository.IContaRepository;
import org.persistencia.projetovacine.security.BCryptHasher;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ContaServico {
    private final IContaRepository contaRepository;

    public ContaServico(IContaRepository contaRepository){
        this.contaRepository = contaRepository;
    }

    public Conta findByUsername(String username){
        Optional<Conta> conta = contaRepository.findByUsername(username);

        if (conta.isPresent()) {
            return conta.get();
        }
        throw new IllegalArgumentException("Conta não encotrada. Username: " + username);
    }

    public Conta salvar(Conta conta){
        if (contaExiste(conta.getUsername())) {
            throw new IllegalArgumentException("Username já cadastrado");
        }

        String passwordHash = new BCryptHasher().encode(conta.getPassword());

        Conta contaNova = new Conta();
        contaNova.setUsername(conta.getUsername());
        contaNova.setPassword(passwordHash);

        return this.contaRepository.save(contaNova);
    }

    public boolean contaExiste(String username) throws IllegalArgumentException{
        if (username == null) {
            throw new IllegalArgumentException("O parametro 'username' não pode ser nulo");
        }
        return contaRepository.existsByUsername(username);
    }
}
