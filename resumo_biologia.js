const deckResumoBiologia = [
  {
    id: "RES-BIO-01",
    disciplina: "Biologia",
    topico: "Introdução à Biologia",
    subtopico: "Características dos Seres Vivos e Vírus",
    tituloModulo: "A Lógica da Vida: Características Universais, Metabolismo e o Enigma dos Vírus",
    conteudo: [
      {
        tipo: "texto",
        corpo: "A definição de 'vida' evoluiu do pensamento filosófico (alma) para o critério biológico. Atualmente, o que define um ser vivo é um conjunto de características: organização celular (todos são formados por células), metabolismo (reações químicas de síntese e quebra), capacidade de reprodução, hereditariedade (transmissão de DNA), evolução (adaptação ao meio) e homeostase (equilíbrio interno). Essas características são universais, provando a origem comum de todos os organismos."
      },
      {
        tipo: "texto",
        corpo: "O aprofundamento dessa definição nos leva aos limites da vida: os vírus. Eles são entidades biológicas acelulares (não possuem célula), formadas por material genético (DNA ou RNA) envolto por uma cápsula proteica. Os vírus não possuem metabolismo próprio; são inertes fora de uma célula. Por isso, são chamados de parasitas intracelulares obrigatórios. Eles precisam injetar seu material genético na célula hospedeira e usar a 'maquinaria' (ribossomos e enzimas) dela para se replicar."
      },
      {
        tipo: "texto",
        corpo: "A análise crítica sobre os vírus reside na sua classificação. A ausência de célula e de metabolismo próprio faz com que muitos cientistas não os considerem seres vivos, apesar de sofrerem mutações e evoluírem. A homeostase, por sua vez, é vital para os organismos complexos: manter o pH do sangue, a temperatura e a glicose estáveis é essencial para que as reações enzimáticas (metabolismo) ocorram de forma otimizada."
      },
      {
        tipo: "bizu",
        corpo: "⚠️ BIZU DE PROVA: Se a questão perguntar o que os vírus NÃO possuem, procure 'célula', 'metabolismo próprio' e 'síntese proteica'. Se perguntar o que eles TÊM em comum com os seres vivos, a resposta é 'material genético (DNA/RNA)' e 'capacidade de mutação/evolução'."
      },
      {
        tipo: "questao_fixar",
        estilo: "Banca Modelo",
        enunciado: "A comunidade científica debate se os vírus são ou não seres vivos. A principal característica biológica que impede a classificação unânime dos vírus como organismos vivos é a:",
        alternativas: [
          "A) Presença de material genético instável.",
          "B) Ausência de organização celular e de metabolismo próprio.",
          "C) Capacidade de sofrer mutações genéticas aceleradas.",
          "D) Presença de uma membrana plasmática rígida.",
          "E) Incapacidade de parasitar células eucariontes."
        ],
        gabarito: "B",
        justificativa: "Os vírus não têm organização celular e não possuem metabolismo. Eles não geram energia nem produzem proteínas sozinhos, dependendo totalmente de uma célula hospedeira, o que os coloca na fronteira da definição de vida."
      }
    ]
  },
  {
    id: "RES-BIO-02",
    disciplina: "Biologia",
    topico: "Método Científico",
    subtopico: "Hipóteses, Variáveis e Grupos Controle",
    tituloModulo: "O Rigor da Ciência: Etapas do Método, Variáveis Experimentais e a Busca pela Validação",
    conteudo: [
      {
        tipo: "texto",
        corpo: "A ciência não é baseada no senso comum, mas no Método Científico, um processo sistemático. Ele começa com a Observação de um fenômeno, que gera um Questionamento. A partir daí, o cientista formula uma Hipótese (uma suposição testável). Se a hipótese for confirmada repetidamente por experimentos, ela pode se tornar uma Teoria (explicação ampla e aceita, mas passível de revisão). Uma hipótese testada gera deduções (previsões do que deve acontecer se a hipótese for verdadeira)."
      },
      {
        tipo: "texto",
        corpo: "O aprofundamento exige o domínio das Variáveis Experimentais. Para testar um remédio, você precisa manipular uma Variável Independente (ex: a dose do medicamento) e observar o efeito na Variável Dependente (ex: a melhora do paciente). Fatores externos que poderiam mascarar o resultado (idade, alimentação, temperatura) devem ser mantidos iguais (Variáveis Controladas). Além disso, o experimento deve ter um Grupo Controle (que recebe um placebo) e um Grupo Experimental (que recebe o remédio)."
      },
      {
        tipo: "texto",
        corpo: "A análise crítica foca no termo 'Teoria'. No senso comum, teoria é um 'achismo'. Na ciência, uma Teoria (como a da Evolução ou a da Gravidade) é o mais alto grau de confiança científica, sendo baseada em milhões de evidências. A ciência não busca verdades absolutas, mas sim a falseabilidade: uma teoria deve poder ser testada e, se refutada por novas evidências, deve ser reformulada."
      },
      {
        tipo: "bizu",
        corpo: "⚠️ BIZU DE PROVA: A Variável Independente é a que VOCÊ altera (ex: a temperatura). A Variável Dependente é o RESULTADO que você mede (ex: o crescimento do fungo). O Grupo Controle é a base de comparação sem a intervenção (ex: o grupo que não toma o remédio)."
      },
      {
        tipo: "questao_fixar",
        estilo: "Banca Modelo",
        enunciado: "Um pesquisador quer testar o efeito de três tipos de fertilizantes no crescimento da soja. Ele divide as sementes em quatro grupos: três recebem fertilizantes diferentes e um não recebe fertilizante algum, mas todos são regados igualmente e ficam na mesma temperatura. O grupo que não recebeu fertilizante é chamado de:",
        alternativas: [
          "A) Variável Independente.",
          "B) Grupo Experimental.",
          "C) Grupo Controle.",
          "D) Hipótese.",
          "E) Teoria."
        ],
        gabarito: "C",
        justificativa: "O Grupo Controle não recebe a variável testada (o fertilizante). Ele existe para mostrar o que aconteceria naturalmente, permitindo comparar o efeito real do fertilizante nos outros grupos."
      }
    ]
  },
  {
    id: "RES-BIO-03",
    disciplina: "Biologia",
    topico: "Metabolismo Celular",
    subtopico: "Anabolismo, Catabolismo e Homeostase",
    tituloModulo: "A Química da Vida: As Vias Metabólicas de Construção e Destruição e o Equilíbrio Interno",
    conteudo: [
      {
        tipo: "texto",
        corpo: "O Metabolismo é a soma de todas as reações químicas celulares. Ele é dividido em duas vias interdependentes. O Anabolismo (via de síntese) constrói moléculas complexas a partir de moléculas simples. Esse processo consome energia (reações endergônicas). Exemplos incluem a fotossíntese (construção de glicose) e a síntese de proteínas. O Catabolismo (via de degradação) quebra moléculas complexas em simples, liberando a energia contida (reações exergônicas), como na respiração celular."
      },
      {
        tipo: "texto",
        corpo: "O aprofundamento prático é fundamental: quando alguém busca emagrecer, o objetivo biológico é acelerar o Catabolismo das gorduras (quebrar a gordura para gerar energia). Por outro lado, ao fazer musculação, o atleta busca o Anabolismo proteico (construir músculos). As células capturam a energia liberada pelo catabolismo e a armazenam na molécula de ATP, que é a 'moeda energética' usada em todas as atividades celulares."
      },
      {
        tipo: "texto",
        corpo: "A análise crítica conecta o metabolismo à Homeostase. O corpo precisa manter um equilíbrio interno rigoroso para que as enzimas metabólicas funcionem. A temperatura corporal, a concentração de glicose no sangue (controlada pela insulina e glucagon) e o pH do sangue são rigorosamente regulados. Se a homeostase falha (ex: hiperglicemia severa), o metabolismo se desregula, levando a patologias como o diabetes."
      },
      {
        tipo: "bizu",
        corpo: "⚠️ BIZU DE PROVA: ANABOLISMO = CONSTRUIR (Gasta energia / fotossíntese). CATABOLISMO = QUEBRAR (Libera energia / digestão e respiração). Nunca confunda: quebrar gordura para emagrecer é catabolismo."
      },
      {
        tipo: "questao_fixar",
        estilo: "Banca Modelo",
        enunciado: "Durante uma atividade física intensa, o corpo utiliza as reservas de glicogênio para gerar energia, quebrando essa molécula em glicose e, posteriormente, em CO2 e água. Esse processo de degradação, que libera energia, é um exemplo de:",
        alternativas: [
          "A) Anabolismo, pois ocorre a síntese de ATP.",
          "B) Catabolismo, pois há quebra de moléculas complexas com liberação de energia.",
          "C) Anabolismo, pois consome energia para manter o corpo ativo.",
          "D) Homeostase, pois interrompe a respiração celular.",
          "E) Fotossíntese, pois converte energia luminosa em química."
        ],
        gabarito: "B",
        justificativa: "A quebra do glicogênio e da glicose para liberar energia para a contração muscular é um processo de degradação (catabolismo/exergônico). O anabolismo seria a síntese de novas moléculas, como a formação de músculo."
      }
    ]
  }
];