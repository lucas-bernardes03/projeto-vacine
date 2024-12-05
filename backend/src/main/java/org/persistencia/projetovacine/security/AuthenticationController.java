package org.persistencia.projetovacine.security;

import org.persistencia.projetovacine.model.Conta;
import org.persistencia.projetovacine.service.ContaServico;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/auth")
@CrossOrigin(value = "http://localhost:4200")
public class AuthenticationController {
    private final ContaServico contaServico;
    private final AuthenticationManager authenticationManager;
    private final TokenService tokenService;

    public AuthenticationController(ContaServico contaServico, AuthenticationManager authenticationManager, TokenService tokenService){
        this.contaServico = contaServico;
        this.authenticationManager = authenticationManager;
        this.tokenService = tokenService;
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody Conta conta) {
        UsernamePasswordAuthenticationToken usernamePassword = new UsernamePasswordAuthenticationToken(conta.getUsername(), conta.getPassword());
        Authentication authentication = this.authenticationManager.authenticate(usernamePassword);

        String token = tokenService.generateToken((Login) authentication.getPrincipal());

        Conta contaBanco = contaServico.findByUsername(conta.getUsername());

        Long usuarioID = contaBanco.getId();

        return ResponseEntity.ok(new LoginResponse(token, usuarioID));
    }

    @PostMapping("/register")
    public ResponseEntity<Conta> register(@RequestBody Conta conta) {
        try{
            Conta contaNova = contaServico.salvar(conta);
            return ResponseEntity.ok(contaNova);
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body(conta);
        }
    }
}
