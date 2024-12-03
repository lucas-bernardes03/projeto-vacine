package org.persistencia.projetovacine.config;

import org.persistencia.projetovacine.model.Agenda;
import org.persistencia.projetovacine.model.Alergia;
import org.persistencia.projetovacine.model.Usuario;
import org.persistencia.projetovacine.model.Vacina;
import org.persistencia.projetovacine.repository.IAgendaRepository;
import org.persistencia.projetovacine.repository.IAlergiaRepository;
import org.persistencia.projetovacine.repository.IUsuarioRepository;
import org.persistencia.projetovacine.repository.IVacinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.util.*;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {
    @Autowired
    private IAgendaRepository agendaRepository;

    @Autowired
    private IVacinaRepository vacinaRepository;

    @Autowired
    private IAlergiaRepository alergiaRepository;

    @Autowired
    private IUsuarioRepository usuarioRepository;

    @Override
    public void run(String... args) throws Exception {
        Alergia a1 = new Alergia(null, "A1");
        Alergia a2 = new Alergia(null, "a2");
        Alergia a3 = new Alergia(null, "a3");
        Alergia a4 = new Alergia(null, "a4");
        Alergia a5 = new Alergia(null, "a5");

        alergiaRepository.saveAll(Arrays.asList(a1,a2,a3,a4,a5));

        Usuario u1 = new Usuario(null, "marco", new Date(), "M", "rua a", 1, "101", "morrinhos", "GO", Set.of(a1));
        Usuario u2 = new Usuario(null, "paulo", new Date(), "M", "rua b", 2, "102", "uniao", "AM", new HashSet<>(Arrays.asList(a1,a4,a5)));
        Usuario u3 = new Usuario(null, "ana", new Date(), "F", "rua c", 3, "331", "cascavel", "RR",new HashSet<>(Arrays.asList(a1,a2,a3)));
        Usuario u4 = new Usuario(null, "luiz", new Date(), "M", "rua d", 4, "12312", "nomi", "MA", new HashSet<>(Arrays.asList(a2,a3,a4)));
        Usuario u5 = new Usuario(null, "hannah", new Date(), "F", "rua h", 5, "tste", "juazeiro", "CE", Set.of(a4));

        usuarioRepository.saveAll(Arrays.asList(u1,u2,u3,u4,u5));

        Vacina v1 = new Vacina(null, "vacina 1", "teste", 2, Vacina.PERIODICIDADE_MES, 2);
        Vacina v2 = new Vacina(null, "vacina 2", "bola", 2, Vacina.PERIODICIDADE_DIA, 15);
        Vacina v3 = new Vacina(null, "vacina 3", "quadrado", 2, Vacina.PERIODICIDADE_ANO, 3);
        Vacina v4 = new Vacina(null, "vacina 4", "hieroglifo", 2, Vacina.PERIODICIDADE_SEMANA, 7);
        Vacina v5 = new Vacina(null, "vacina 5", "corte", 2, Vacina.PERIODICIDADE_MES, 4);

        vacinaRepository.saveAll(Arrays.asList(v1,v2,v3,v4,v5));

        Agenda ag1 = new Agenda(null, new Date(), "Agendado", new Date(), "obs", v1, u1);
        Agenda ag2 = new Agenda(null, new Date(), "Cancelado", new Date(), "obs", v2, u4);
        Agenda ag3 = new Agenda(null, new Date(), "Realizado", new Date(), "obs", v3, u5);
        Agenda ag4 = new Agenda(null, new Date(), "Cancelado", new Date(), "obs", v2, u1);
        Agenda ag5 = new Agenda(null, new Date(), "Agendado", new Date(), "obs", v4, u3);

        agendaRepository.saveAll(Arrays.asList(ag1, ag2, ag3, ag4, ag5));
    }
}
