const deckBiologia = [
  {
    id: 122,
    deck: "Biologia",
    topicoPrincipal: "Introdução à Biologia",
    subgrupo: "Características Gerais dos Seres Vivos",
    tag: "tag-biologia",
    topico: "Definição Biológica de Vida",
    q: "Do ponto de vista biológico e genético, o que melhor define a vida?",
    a: "A capacidade dos seres vivos de produzirem cópias de si mesmos (reprodução) e transmitirem material genético.",
    erradas: [
      "A existência de uma 'alma' ou princípio vital imaterial.",
      "A capacidade de realizar movimentos ativos e perceptíveis.",
      "Apenas a presença de nutrientes orgânicos capazes de gerar energia."
    ],
    explicacao: "Com a descoberta dos ácidos nucleicos, a definição biológica de vida passou a estar diretamente atrelada à capacidade de replicação e hereditariedade."
  },
  {
    id: 123,
    deck: "Biologia",
    topicoPrincipal: "Introdução à Biologia",
    subgrupo: "Características Gerais dos Seres Vivos",
    tag: "tag-biologia",
    topico: "Composição Química dos Seres Vivos",
    q: "Quais são os elementos químicos que os animais necessitam ingerir em maior quantidade?",
    a: "Oxigênio, carbono e hidrogênio.",
    erradas: [
      "Cálcio, fósforo e potássio.",
      "Sódio, cloreto e magnésio.",
      "Nitrogênio, cálcio e fósforo."
    ],
    explicacao: "O oxigênio, carbono e hidrogênio (juntamente com o nitrogênio) são os elementos mais abundantes nos seres vivos, formando a base das moléculas orgânicas."
  },
  {
    id: 124,
    deck: "Biologia",
    topicoPrincipal: "Introdução à Biologia",
    subgrupo: "Características Gerais dos Seres Vivos",
    tag: "tag-biologia",
    topico: "Vírus — Características",
    q: "Qual característica inerente aos seres vivos está AUSENTE nos vírus?",
    a: "Organização celular e metabolismo próprio.",
    erradas: [
      "Hereditariedade e mutação.",
      "Capacidade de reprodução (replicação).",
      "Presença de material genético."
    ],
    explicacao: "Os vírus são acelulares (não possuem células) e não têm metabolismo próprio. Eles são parasitas intracelulares obrigatórios, dependendo da maquinaria da célula hospedeira para se replicar."
  },
  {
    id: 125,
    deck: "Biologia",
    topicoPrincipal: "Introdução à Biologia",
    subgrupo: "Características Gerais dos Seres Vivos",
    tag: "tag-biologia",
    topico: "Homeostase",
    q: "O que é a homeostase e qual sua importância?",
    a: "É a capacidade de manter relativamente constante o meio interno do organismo, independentemente das variações externas.",
    erradas: [
      "É o processo de divisão celular que mantém o organismo vivo.",
      "É a capacidade de transmissão de informações genéticas ao longo das gerações.",
      "É a transformação dos seres vivos ao longo do tempo evolutivo."
    ],
    explicacao: "A homeostase (ex: controle da glicose pela insulina, ou suor para regular a temperatura) é essencial para manter as funções vitais em equilíbrio."
  },
  {
    id: 126,
    deck: "Biologia",
    topicoPrincipal: "Introdução à Biologia",
    subgrupo: "Características Gerais dos Seres Vivos",
    tag: "tag-biologia",
    topico: "Metabolismo — Anabolismo e Catabolismo",
    q: "Qual é a diferença entre anabolismo e catabolismo?",
    a: "Anabolismo sintetiza matéria orgânica consumindo energia (fotossíntese); catabolismo quebra matéria orgânica liberando energia (respiração).",
    erradas: [
      "Anabolismo quebra moléculas liberando energia; catabolismo constrói moléculas consumindo energia.",
      "Ambos constroem moléculas, mas o catabolismo não utiliza energia.",
      "Ambos quebram moléculas, mas o anabolismo ocorre apenas em plantas."
    ],
    explicacao: "Acelerar o emagrecimento significa acelerar o CATABOLISMO (quebra) das gorduras. Processos que liberam energia (exotérmicos) são catabólicos."
  },
  {
    id: 127,
    deck: "Biologia",
    topicoPrincipal: "Introdução à Biologia",
    subgrupo: "Características Gerais dos Seres Vivos",
    tag: "tag-biologia",
    topico: "Irritabilidade / Sensibilidade",
    q: "Qual característica dos seres vivos permite a captura de insetos pela planta carnívora (Dionaea muscipula)?",
    a: "Irritabilidade (ou sensibilidade), que é a capacidade de reagir a estímulos do ambiente.",
    erradas: [
      "Fototropismo, que é a busca por luz solar.",
      "Catabolismo, que é a quebra de nutrientes.",
      "Metabolismo, que é o conjunto de reações químicas."
    ],
    explicacao: "A irritabilidade é a resposta a um estímulo. No caso da planta carnívora, o estímulo é o toque do inseto, que desencadeia o fechamento da folha."
  },
  {
    id: 128,
    deck: "Biologia",
    topicoPrincipal: "Introdução à Biologia",
    subgrupo: "Características Gerais dos Seres Vivos",
    tag: "tag-biologia",
    topico: "Reprodução Sexuada vs Assexuada",
    q: "Por que a reprodução sexuada é vantajosa em ambientes em constante mudança?",
    a: "Porque gera variabilidade genética (novas combinações de genes), aumentando a chance de adaptação da espécie.",
    erradas: [
      "Porque demanda menor gasto de energia que a assexuada.",
      "Porque produz clones geneticamente idênticos e mais rápidos.",
      "Porque gera um número maior de descendentes por geração."
    ],
    explicacao: "A mistura de material genético dos pais (recombinação) gera indivíduos diferentes. Se o ambiente muda (ex: nova doença), alguns podem ter genes que garantem a sobrevivência."
  },
  {
    id: 129,
    deck: "Biologia",
    topicoPrincipal: "Introdução à Biologia",
    subgrupo: "Características Gerais dos Seres Vivos",
    tag: "tag-biologia",
    topico: "Reprodução Assexuada e Clones",
    q: "Qual a principal característica da reprodução assexuada (ex: divisão binária em bactérias)?",
    a: "Ocorre com um único progenitor, sem participação de gametas, gerando descendentes geneticamente idênticos (clones).",
    erradas: [
      "Ocorre apenas em seres humanos para gerar gêmeos.",
      "Envolve a união de gametas masculinos e femininos.",
      "Gera alta variabilidade genética por meio da meiose."
    ],
    explicacao: "Na reprodução assexuada, há a divisão por mitose (ou fissão). Por não haver troca de material genético, os descendentes são clones (a não ser que ocorra mutação)."
  },
  {
    id: 130,
    deck: "Biologia",
    topicoPrincipal: "Introdução à Biologia",
    subgrupo: "Características Gerais dos Seres Vivos",
    tag: "tag-biologia",
    topico: "Variabilidade Genética e Sobrevivência",
    q: "Em criadouros que impedem a entrada de animais de fora (evitando cruzamentos), qual o risco biológico a longo prazo?",
    a: "A diminuição da variabilidade genética, tornando a população mais vulnerável a patógenos.",
    erradas: [
      "O aumento da taxa de mutações genéticas espontâneas.",
      "A aceleração da evolução e criação de novas espécies.",
      "O aumento da frequência de variações fenotípicas vantajosas."
    ],
    explicacao: "Isso causa endogamia (cruzamento entre parentes). A falta de novos genes diminui a variabilidade, e se surgir uma doença, todos podem ser suscetíveis a ela."
  },
  {
    id: 131,
    deck: "Biologia",
    topicoPrincipal: "Introdução à Biologia",
    subgrupo: "Características Gerais dos Seres Vivos",
    tag: "tag-biologia",
    topico: "Aplicação da Reprodução na Agricultura",
    q: "Em plantações em escala industrial (ex: cana-de-açúcar), por que se prefere a reprodução assexuada?",
    a: "Para clonar e manter exatamente as características da planta original (padronização da produção).",
    erradas: [
      "Para gerar alta variabilidade genética e resistir a pragas.",
      "Para permitir que a espécie evolua rapidamente.",
      "Para produzir sementes mais resistentes ao clima."
    ],
    explicacao: "A reprodução assexuada garante que todas as plantas sejam cópias da variedade selecionada (as mais produtivas ou doces, no caso da cana)."
  },
  {
    id: 132,
    deck: "Biologia",
    topicoPrincipal: "Introdução à Biologia",
    subgrupo: "Características Gerais dos Seres Vivos",
    tag: "tag-biologia",
    topico: "Níveis de Organização Biológica",
    q: "Qual é a sequência correta dos níveis de organização dos seres vivos, do mais simples para o mais complexo?",
    a: "Célula ➔ Tecido ➔ Órgão ➔ Sistema ➔ Organismo ➔ População ➔ Comunidade ➔ Ecossistema.",
    erradas: [
      "Célula ➔ Órgão ➔ Tecido ➔ Sistema ➔ Organismo ➔ Comunidade.",
      "Tecido ➔ Célula ➔ Órgão ➔ Organismo ➔ População ➔ Ecossistema.",
      "Átomo ➔ Molécula ➔ Célula ➔ Órgão ➔ Tecido ➔ Sistema."
    ],
    explicacao: "Pegadinha clássica: um conjunto de indivíduos da MESMA espécie em um local é uma População. Indivíduos de ESPÉCIES DIFERENTES juntos formam uma Comunidade."
  },
  {
    id: 133,
    deck: "Biologia",
    topicoPrincipal: "Introdução à Biologia",
    subgrupo: "Características Gerais dos Seres Vivos",
    tag: "tag-biologia",
    topico: "Origem Comum da Vida",
    q: "Qual evidência apoia a hipótese de que todos os seres vivos têm uma origem comum?",
    a: "O fato de todos os organismos possuírem processos biológicos universais, como a síntese proteica e o mesmo código genético.",
    erradas: [
      "A presença de respiração aeróbica em todos os seres vivos.",
      "O fato de todos possuírem reprodução sexuada.",
      "A existência de sistema nervoso em todos os organismos."
    ],
    explicacao: "Nem todos têm respiração aeróbica (algumas bactérias são anaeróbias) ou reprodução sexuada. Mas o código genético e a síntese de proteínas são universais, apontando para um ancestral comum."
  },
  {
    id: 134,
    deck: "Biologia",
    topicoPrincipal: "Introdução à Biologia",
    subgrupo: "Método Científico",
    tag: "tag-biologia",
    topico: "Etapas do Método Científico",
    q: "Na construção do conhecimento científico, qual é a sequência lógica básica de etapas?",
    a: "Observação ➔ Formulação de Hipótese ➔ Dedução/Experimentação ➔ Conclusão.",
    erradas: [
      "Hipótese ➔ Conclusão ➔ Observação ➔ Experimento.",
      "Uso do senso comum ➔ Crença ➔ Publicação ➔ Lei.",
      "Experimento ➔ Teoria ➔ Observação ➔ Hipótese."
    ],
    explicacao: "A ciência começa com uma observação (fato), levanta-se uma suposição (hipótese), testa-se (experimento) para prever resultados (dedução) e tira-se a conclusão."
  },
  {
    id: 135,
    deck: "Biologia",
    topicoPrincipal: "Introdução à Biologia",
    subgrupo: "Método Científico",
    tag: "tag-biologia",
    topico: "Hipótese Científica",
    q: "O que é uma hipótese no método científico?",
    a: "Uma declaração ou suposição testável que antecipa a relação entre duas ou mais variáveis.",
    erradas: [
      "Uma verdade absoluta e incontestável comprovada pela ciência.",
      "Uma ideia baseada no senso comum que não precisa de testes.",
      "Um sinônimo de lei científica que descreve fenômenos naturais."
    ],
    explicacao: "A hipótese não é uma verdade (como no senso comum), ela é uma proposição que DEVE ser testada experimentalmente. Se confirmada muitas vezes, pode virar uma teoria."
  },
  {
    id: 136,
    deck: "Biologia",
    topicoPrincipal: "Introdução à Biologia",
    subgrupo: "Método Científico",
    tag: "tag-biologia",
    topico: "Teoria vs Lei Científica",
    q: "Sob o ponto de vista da ciência, o que é uma 'Teoria'?",
    a: "Uma ideia amplamente apoiada pelo conhecimento científico, que explica fenômenos naturais e permite previsões, mas nunca é uma verdade absoluta.",
    erradas: [
      "Uma suposição ainda sem comprovação experimental.",
      "Uma ideia sem base em observação, baseada no senso comum.",
      "Uma lei universal que já foi provada e não pode mais ser contestada."
    ],
    explicacao: "Pegadinha clássica! Na ciência, 'Teoria' é o mais alto nível de explicação (ex: Teoria da Evolução). Ela é baseada em evidências, mas a ciência é mutável, então nenhuma teoria é uma verdade absoluta."
  },
  {
    id: 137,
    deck: "Biologia",
    topicoPrincipal: "Introdução à Biologia",
    subgrupo: "Método Científico",
    tag: "tag-biologia",
    topico: "Variáveis (Independente e Dependente)",
    q: "Em um experimento, qual é a Variável Independente?",
    a: "É a variável que o pesquisador manipula ou altera intencionalmente para observar o efeito.",
    erradas: [
      "É o resultado que será medido pelo pesquisador.",
      "É o fator que precisa permanecer totalmente constante.",
      "É o grupo controle do experimento, que não recebe tratamento."
    ],
    explicacao: "No experimento sobre a Amazônia e CO2, a concentração de CO2 é a variável independente (o que o pesquisador mudou). O crescimento das árvores é a dependente (o que foi medido)."
  },
  {
    id: 138,
    deck: "Biologia",
    topicoPrincipal: "Introdução à Biologia",
    subgrupo: "Método Científico",
    tag: "tag-biologia",
    topico: "Grupo Controle",
    q: "Qual é a importância do Grupo Controle em um experimento científico?",
    a: "Servir como padrão de comparação para isolar o efeito da variável testada, garantindo a validade do experimento.",
    erradas: [
      "Garantir que todos os organismos testados recebam o tratamento principal.",
      "Aumentar a variabilidade genética dos resultados obtidos.",
      "Substituir a necessidade de repetição do experimento."
    ],
    explicacao: "Pegadinha clássica: se você testa um chá e todos morrem, foi o chá ou a doença? O grupo controle (que não toma o chá) serve para provar que a mudança foi causada pelo tratamento."
  },
  {
    id: 139,
    deck: "Biologia",
    topicoPrincipal: "Introdução à Biologia",
    subgrupo: "Método Científico",
    tag: "tag-biologia",
    topico: "Raciocínio Indutivo vs Dedutivo",
    q: "Qual a diferença entre os métodos indutivo e dedutivo?",
    a: "Indutivo vai do particular para o geral (observações criam uma lei); Dedutivo vai do geral para o particular (leis geram previsões).",
    erradas: [
      "Indutivo vai do geral para o particular; Dedutivo vai do particular para o geral.",
      "Indutivo ignora as observações; Dedutivo baseia-se apenas no senso comum.",
      "Indutivo usa apenas matemática; Dedutivo usa apenas experimentos físicos."
    ],
    explicacao: "A criança que testa vários objetos (pedrinhas, lápis) e conclui que 'todos os objetos cilíndricos queimam' usou o método INDUTIVO (do específico para a regra geral)."
  },
  {
    id: 140,
    deck: "Biologia",
    topicoPrincipal: "Introdução à Biologia",
    subgrupo: "Método Científico",
    tag: "tag-biologia",
    topico: "Limitações do Conhecimento Científico",
    q: "Após um cientista realizar uma dedução prevendo um resultado, o que deve acontecer em seguida?",
    a: "O cientista deve realizar novas observações ou experimentações para testar se a dedução está correta.",
    erradas: [
      "A dedução já é a conclusão final, não necessitando de mais testes.",
      "O cientista deve publicar a dedução em jornais locais para virar lei.",
      "A dedução deve ser ignorada caso contrarie o senso comum."
    ],
    explicacao: "A ciência não se baseia em achismos. A dedução nada mais é do que uma previsão lógica; ela precisa ser rigorosamente testada por experimentos para se tornar um fato ou teoria."
  },
  {
    id: 141,
    deck: "Biologia",
    topicoPrincipal: "Introdução à Biologia",
    subgrupo: "Método Científico",
    tag: "tag-biologia",
    topico: "Evidência Empírica e Observação",
    q: "Como a ciência lida com afirmações que não podem ser testadas por experimentos ou observações empíricas (ex: astrologia)?",
    a: "Não é considerada ciência, pois não pode ser testada/refutada por evidências observáveis.",
    erradas: [
      "É aceita como teoria científica, desde que muitas pessoas acreditem.",
      "Torna-se uma lei científica se o pesquisador tiver prestígio.",
      "Substitui a observação empírica por interpretações subjetivas."
    ],
    explicacao: "O método científico exige que as hipóteses sejam falseáveis (testáveis). Se você não pode coletar dados empíricos e analisar estatisticamente, foge do escopo da ciência."
  },
  {
    id: 142,
    deck: "Biologia",
    topicoPrincipal: "Introdução à Biologia",
    subgrupo: "Método Científico",
    tag: "tag-biologia",
    topico: "Experimento de Griffith e a Transformação",
    q: "O experimento de Griffith (1928) com camundongos e pneumococos testou e comprovou qual hipótese?",
    a: "A virulência de uma bactéria (capacidade de causar doença) pode ser transferida de uma bactéria morta para uma viva.",
    erradas: [
      "O calor é eficaz para esterilizar qualquer tipo de microrganismo.",
      "Os seres vivos adquirem mutações genéticas através do calor.",
      "A sobrevivência dos camundongos depende apenas da quantidade de bactérias."
    ],
    explicacao: "Griffith misturou bactérias mortas virulentas com vivas não-virulentas e os camundongos morreram. Ele descobriu o 'Princípio Transformante' (o DNA era transferido entre as bactérias)."
  },
  {
    id: 143,
    deck: "Biologia",
    topicoPrincipal: "Introdução à Biologia",
    subgrupo: "Características Gerais dos Seres Vivos",
    tag: "tag-biologia",
    topico: "Fragilidade Osmótica e Hemácias",
    q: "Em um teste de fragilidade osmótica, o que indica uma amostra que sofre hemólise em concentrações de NaCl mais altas (ex: 0,85%)?",
    a: "Indica que a amostra possui um maior número de hemácias esféricas (esferócitos) e, portanto, maior fragilidade.",
    erradas: [
      "Indica que a amostra é mais resistente e tem hemácias normais.",
      "Indica que as hemácias não sofrem influência da osmose.",
      "Indica que a solução é hipertônica em relação à célula."
    ],
    explicacao: "Os esferócitos são hemácias com formato alterado e membrana mais frágil. Em soluções hipotônicas (menos salinas), a água entra e eles rompem (hemólise) mais fácil do que as hemácias normais."
  },
  {
    id: 144,
    deck: "Biologia",
    topicoPrincipal: "Introdução à Biologia",
    subgrupo: "Características Gerais dos Seres Vivos",
    tag: "tag-biologia",
    topico: "Reprodução Sexuada — Fecundação Cruzada",
    q: "Por que a fecundação cruzada (troca de gametas entre diferentes indivíduos, como em minhocas) é vantajosa em relação à autofecundação?",
    a: "Porque garante maior variabilidade genética, aumentando a chance de adaptação da população.",
    erradas: [
      "Porque requer menos gasto de energia na produção de gametas.",
      "Porque permite o aumento da população de forma mais rápida.",
      "Porque impede a ocorrência de mutações genéticas."
    ],
    explicacao: "Mesmo organismos hermafroditas (que têm os dois sexos) podem realizar fecundação cruzada. Misturar genes de dois indivíduos diferentes gera mais diversidade do que usar apenas os próprios gametas."
  }
];