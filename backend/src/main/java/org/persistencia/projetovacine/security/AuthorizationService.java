package org.persistencia.projetovacine.security;

import org.persistencia.projetovacine.model.Conta;
import org.persistencia.projetovacine.repository.IContaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthorizationService implements UserDetailsService {

    private final IContaRepository contaRepository;

    public AuthorizationService(IContaRepository contaRepository) {
        this.contaRepository = contaRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Conta> conta = contaRepository.findByUsername(username);
        if (conta.isEmpty()) {
            throw new UsernameNotFoundException("Conta não encontrada");
        }
        return Conta.contaToLogin(conta.get());
    }
}
