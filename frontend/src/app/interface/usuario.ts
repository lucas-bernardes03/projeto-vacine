export interface Usuario {
  id?: number
  nome?: string
  dataNascimento?: Date
  sexo?: string
  logradouro?: string
  numero?: number
  setor?: string
  cidade?: string
  uf?: string
}

export const usuarios: Usuario[] = [
  { id: 1, nome: "João Silva", dataNascimento: new Date('1990-01-15'), sexo: "M", logradouro: "Rua A", numero: 123, setor: "Centro", cidade: "São Paulo", uf: "SP" },
  { id: 2, nome: "Maria Oliveira", dataNascimento: new Date('1985-03-22'), sexo: "F", logradouro: "Avenida B", numero: 456, setor: "Jardins", cidade: "Rio de Janeiro", uf: "RJ" },
  { id: 3, nome: "Carlos Souza", dataNascimento: new Date('1992-07-10'), sexo: "M", logradouro: "Rua C", numero: 789, setor: "Barro Preto", cidade: "Belo Horizonte", uf: "MG" },
  { id: 4, nome: "Ana Costa", dataNascimento: new Date('1988-11-05'), sexo: "F", logradouro: "Rua D", numero: 101, setor: "Boa Vista", cidade: "Curitiba", uf: "PR" },
  { id: 5, nome: "Pedro Santos", dataNascimento: new Date('1995-02-17'), sexo: "M", logradouro: "Avenida E", numero: 202, setor: "Centro", cidade: "Porto Alegre", uf: "RS" },
  { id: 6, nome: "Juliana Lima", dataNascimento: new Date('1991-12-25'), sexo: "F", logradouro: "Rua F", numero: 303, setor: "Aflitos", cidade: "Salvador", uf: "BA" },
  { id: 7, nome: "Ricardo Pereira", dataNascimento: new Date('1980-06-18'), sexo: "M", logradouro: "Avenida G", numero: 404, setor: "Vila Velha", cidade: "Fortaleza", uf: "CE" },
  { id: 8, nome: "Mariana Alves", dataNascimento: new Date('1993-04-30'), sexo: "F", logradouro: "Rua H", numero: 505, setor: "Aeroporto", cidade: "Recife", uf: "PE" },
  { id: 9, nome: "Lucas Martins", dataNascimento: new Date('1996-08-23'), sexo: "M", logradouro: "Rua I", numero: 606, setor: "Ponta Negra", cidade: "Manaus", uf: "AM" },
  { id: 10, nome: "Fernanda Rocha", dataNascimento: new Date('1987-09-14'), sexo: "F", logradouro: "Avenida J", numero: 707, setor: "Centro", cidade: "Goiânia", uf: "GO" },
  { id: 11, nome: "Felipe Costa", dataNascimento: new Date('1994-02-20'), sexo: "M", logradouro: "Rua K", numero: 808, setor: "Cidade Baixa", cidade: "Brasília", uf: "DF" },
  { id: 12, nome: "Patrícia Silva", dataNascimento: new Date('1986-05-02'), sexo: "F", logradouro: "Avenida L", numero: 909, setor: "São Francisco", cidade: "São Luís", uf: "MA" },
  { id: 13, nome: "Renato Souza", dataNascimento: new Date('1992-01-11'), sexo: "M", logradouro: "Rua M", numero: 1234, setor: "Alvorada", cidade: "Natal", uf: "RN" },
  { id: 14, nome: "Sabrina Alves", dataNascimento: new Date('1990-03-05'), sexo: "F", logradouro: "Avenida N", numero: 5678, setor: "Serraria", cidade: "São José", uf: "SC" },
  { id: 15, nome: "André Pereira", dataNascimento: new Date('1983-07-15'), sexo: "M", logradouro: "Rua O", numero: 9101, setor: "Maracanaú", cidade: "Belém", uf: "PA" },
  { id: 16, nome: "Camila Rocha", dataNascimento: new Date('1994-12-30'), sexo: "F", logradouro: "Avenida P", numero: 1122, setor: "Santos Dumont", cidade: "Vitória", uf: "ES" },
  { id: 17, nome: "Marcos Lima", dataNascimento: new Date('1995-10-18'), sexo: "M", logradouro: "Rua Q", numero: 3344, setor: "Centro", cidade: "Florianópolis", uf: "SC" },
  { id: 18, nome: "Isabela Martins", dataNascimento: new Date('1993-09-22'), sexo: "F", logradouro: "Avenida R", numero: 5566, setor: "Coxipó", cidade: "Cuiabá", uf: "MT" },
  { id: 19, nome: "Gustavo Rocha", dataNascimento: new Date('1990-04-10'), sexo: "M", logradouro: "Rua S", numero: 7788, setor: "Vila Rica", cidade: "Campo Grande", uf: "MS" },
  { id: 20, nome: "Juliana Souza", dataNascimento: new Date('1991-11-28'), sexo: "F", logradouro: "Avenida T", numero: 9900, setor: "Corredor do Limoeiro", cidade: "Aracaju", uf: "SE" },
]

export const usuariosDropdown : Usuario[] = [
  { id: 1, nome: "João Silva" },
  { id: 2, nome: "Maria Oliveira" },
  { id: 3, nome: "Carlos Souza" },
  { id: 4, nome: "Ana Costa" },
  { id: 5, nome: "Pedro Santos" },
  { id: 6, nome: "Juliana Lima" },
  { id: 7, nome: "Ricardo Pereira" },
  { id: 8, nome: "Mariana Alves" },
  { id: 9, nome: "Lucas Martins" },
  { id: 10, nome: "Fernanda Rocha" },
  { id: 11, nome: "Felipe Costa" },
  { id: 12, nome: "Patrícia Silva" },
  { id: 13, nome: "Renato Souza" },
  { id: 14, nome: "Sabrina Alves" },
  { id: 15, nome: "André Pereira" },
  { id: 16, nome: "Camila Rocha" },
  { id: 17, nome: "Marcos Lima" },
  { id: 18, nome: "Isabela Martins" },
  { id: 19, nome: "Gustavo Rocha" },
  { id: 20, nome: "Juliana Souza" }
]
