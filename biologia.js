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
  },
  // ==========================================
  // ÁGUA E SAIS MINERAIS
  // ==========================================
  {
    id: 146,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Constituintes Inorgânicos da Célula",
    tag: "tag-biologia",
    topico: "Água — Coesão e Tensão Superficial",
    q: "Qual propriedade da água permite que insetos andem sobre sua superfície?",
    a: "A coesão entre as moléculas, causada pelas pontes de hidrogênio, que gera alta tensão superficial.",
    erradas: ["O alto calor específico.", "A capilaridade.", "O poder solvente."],
    explicacao: "As pontes de hidrogênio mantêm as moléculas de água unidas (coesão), criando uma 'película' resistente na superfície."
  },
  {
    id: 147,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Constituintes Inorgânicos da Célula",
    tag: "tag-biologia",
    topico: "Água — Regulação Térmica",
    q: "Por que o alto calor específico e o alto calor latente da água são vitais para os seres vivos?",
    a: "Permitem a regulação térmica do organismo, evitando mudanças bruscas de temperatura e auxiliando no resfriamento pela transpiração.",
    erradas: ["Aumentam a velocidade das reações enzimáticas.", "Impedem a evaporação da água em dias quentes.", "Tornam a água um solvente universal."],
    explicacao: "O alto calor específico exige muita energia para variar a temperatura da água. O calor latente permite perder muito calor na evaporação (suor)."
  },
  {
    id: 148,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Constituintes Inorgânicos da Célula",
    tag: "tag-biologia",
    topico: "Sais Minerais — Funções Vitais",
    q: "Quais são as funções do Ferro, Cálcio, Iodo e Magnésio, respectivamente?",
    a: "Ferro: transporte de O2; Cálcio: coagulação e contração; Iodo: hormônios da tireoide; Magnésio: clorofila.",
    erradas: ["Ferro: coagulação; Cálcio: tireoide; Iodo: clorofila; Magnésio: transporte de O2.", "Ferro: clorofila; Cálcio: transporte de O2; Iodo: coagulação; Magnésio: tireoide.", "Ferro: tireoide; Cálcio: clorofila; Iodo: coagulação; Magnésio: transporte de O2."],
    explicacao: "Ferro compõe a hemoglobina. Cálcio atua na coagulação e músculos. Iodo é essencial para T3 e T4. Magnésio compõe a clorofila."
  },
  {
    id: 149,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Constituintes Inorgânicos da Célula",
    tag: "tag-biologia",
    topico: "Sais Minerais — Sódio e Hipertensão",
    q: "Qual a relação entre o excesso de sódio na dieta e a hipertensão?",
    a: "O sódio provoca retenção de água (aumento da volemia), elevando a pressão arterial.",
    erradas: ["O sódio causa desnaturação das proteínas do sangue.", "O sódio impede a absorção de cálcio.", "O sódio obstrui fisicamente as artérias."],
    explicacao: "Por osmose, o sódio retém água nos vasos. Mais líquido no vaso = maior pressão nas paredes das artérias."
  },
  {
    id: 150,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Constituintes Inorgânicos da Célula",
    tag: "tag-biologia",
    topico: "Fibras Alimentares — Fitato",
    q: "Qual o efeito negativo do consumo excessivo de fibras (fitatos) na dieta?",
    a: "Podem reduzir a absorção de sais minerais (como cálcio, zinco e ferro) ao se ligarem a eles no intestino.",
    erradas: ["Aumentam a absorção de vitaminas lipossolúveis.", "Impedem a digestão de proteínas no estômago.", "Aumentam a glicemia rapidamente."],
    explicacao: "O fitato (presente em cereais) quelam os minerais, impedindo sua absorção. A enzima fitase quebra o fitato."
  },

  // ==========================================
  // GLICÍDIOS
  // ==========================================
  {
    id: 151,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Glicídios",
    tag: "tag-biologia",
    topico: "Glicídios — Classificação Química",
    q: "Qual a diferença entre aldoses e cetoses?",
    a: "Aldoses possuem grupo aldeído (ex: glicose); cetoses possuem grupo cetona (ex: frutose).",
    erradas: ["Aldoses são dissacarídeos; cetoses são polissacarídeos.", "Aldoses são de origem animal; cetoses de origem vegetal.", "Aldoses são digeríveis; cetoses são fibras."],
    explicacao: "Ambos são monossacarídeos. A diferença está na posição do grupo carbonila (C=O): na ponta (aldeído) ou no meio (cetona)."
  },
  {
    id: 152,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Glicídios",
    tag: "tag-biologia",
    topico: "Glicídios — Polissacarídeos Estruturais",
    q: "Quais são os dois principais polissacarídeos estruturais e onde são encontrados?",
    a: "Celulose (parede celular de plantas) e Quitina (exoesqueleto de artrópodes e parede de fungos).",
    erradas: ["Amido e Glicogênio.", "Sacarose e Lactose.", "Pectina e Lignina."],
    explicacao: "Celulose e quitina são polímeros de glicose (ou derivados) que conferem rigidez e proteção estrutural."
  },
  {
    id: 153,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Glicídios",
    tag: "tag-biologia",
    topico: "Glicídios — Reserva Vegetal e Animal",
    q: "Quais são as reservas energéticas de plantas e animais, respectivamente?",
    a: "Amido (plantas) e Glicogênio (animais).",
    erradas: ["Glicogênio (plantas) e Amido (animais).", "Celulose (plantas) e Quitina (animais).", "Sacarose (plantas) e Lactose (animais)."],
    explicacao: "Amido é a reserva vegetal. Glicogênio é a reserva animal, armazenado no fígado e músculos."
  },
  {
    id: 154,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Glicídios",
    tag: "tag-biologia",
    topico: "Glicídios — Digestão da Celulose",
    q: "Como os herbívoros (como bois e cupins) digerem a celulose se não produzem a enzima celulase?",
    a: "Através de micro-organismos simbiontes presentes em seu intestino, que produzem a celulase.",
    erradas: ["Produzindo amilase pancreática em grande quantidade.", "Pela ação do ácido clorídrico do estômago.", "Absorvendo a celulose intacta na corrente sanguínea."],
    explicacao: "O ser humano não digere celulose (é fibra). Os herbívoros dependem de bactérias que quebram as ligações beta da celulose."
  },
  {
    id: 155,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Glicídios",
    tag: "tag-biologia",
    topico: "Glicídios — Índice Glicêmico",
    q: "Por que alimentos ricos em carboidratos complexos (fibras, amido) têm menor índice glicêmico que os açúcares simples?",
    a: "Porque sua digestão e absorção são mais lentas, liberando a glicose gradualmente no sangue.",
    erradas: ["Porque não são transformados em glicose.", "Porque aumentam a produção de insulina rapidamente.", "Porque são absorvidos diretamente no estômago."],
    explicacao: "Carboidratos complexos demoram mais para serem quebrados, evitando picos de glicose e insulina."
  },
  {
    id: 156,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Glicídios",
    tag: "tag-biologia",
    topico: "Glicídios — Intolerância à Lactose",
    q: "Por que a intolerância à lactose causa diarreia osmótica?",
    a: "Porque a lactose não digerida acumula-se no intestino, atraindo água por osmose e fermentando com bactérias.",
    erradas: ["Porque a lactase destrói a parede do intestino.", "Porque a lactose se transforma em ácido lático nos músculos.", "Porque ocorre uma reação alérgica grave à proteína do leite."],
    explicacao: "Sem lactase, a lactose fica no intestino, puxa água (osmose) e é fermentada por bactérias, causando gases e diarreia."
  },

  // ==========================================
  // LIPÍDIOS
  // ==========================================
  {
    id: 157,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Lipídios",
    tag: "tag-biologia",
    topico: "Lipídios — Reserva Energética",
    q: "Por que os lipídios são uma reserva energética mais eficiente que os carboidratos?",
    a: "Porque são moléculas mais reduzidas (mais hidrogênio), liberando o dobro de energia, e são armazenados de forma anidra (sem água).",
    erradas: ["Porque possuem mais oxigênio em sua estrutura.", "Porque são hidrofílicos e fáceis de quebrar.", "Porque são digeridos mais rapidamente no estômago."],
    explicacao: "A alta quantidade de ligações C-H libera muita energia. Além disso, não precisam de água para armazenamento, economizando peso."
  },
  {
    id: 158,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Lipídios",
    tag: "tag-biologia",
    topico: "Lipídios — Saturados vs Insaturados",
    q: "Qual a diferença estrutural entre gorduras saturadas e insaturadas?",
    a: "Saturadas possuem apenas ligações simples (sólidas); insaturadas possuem ligações duplas (líquidas, como os óleos).",
    erradas: ["Saturadas são vegetais; insaturadas são animais.", "Saturadas têm duplas ligações; insaturadas são lineares.", "Saturadas são solúveis em água; insaturadas não."],
    explicacao: "As ligações duplas (insaturadas) criam dobras na cadeia, impedindo que se empacotem firmemente. Por isso os óleos são líquidos."
  },
  {
    id: 159,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Lipídios",
    tag: "tag-biologia",
    topico: "Lipídios — Esteroides e Anabolizantes",
    q: "O que são os hormônios esteroides (como testosterona e colesterol)?",
    a: "São lipídios derivados do colesterol, com estrutura de quatro anéis carbônicos.",
    erradas: ["São proteínas formadas por cadeias de aminoácidos.", "São carboidratos de reserva energética.", "São enzimas que catalisam a digestão de gorduras."],
    explicacao: "O colesterol é precursor dos hormônios esteroides, vitamina D e sais biliares. Os anabolizantes são derivados sintéticos da testosterona."
  },
  {
    id: 160,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Lipídios",
    tag: "tag-biologia",
    topico: "Lipídios — HDL vs LDL",
    q: "Qual é a diferença funcional entre HDL e LDL?",
    a: "HDL (bom) remove o colesterol das artérias para o fígado; LDL (ruim) transporta e deposita o colesterol nas artérias.",
    erradas: ["HDL deposita colesterol; LDL remove.", "Ambos são exclusivamente ruins e causam infarto.", "HDL transporta triglicerídeos; LDL transporta vitaminas."],
    explicacao: "HDL é a lipoproteína de alta densidade que faz o transporte reverso. LDL é a de baixa densidade, que causa aterosclerose em excesso."
  },
  {
    id: 161,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Lipídios",
    tag: "tag-biologia",
    topico: "Lipídios — Gorduras Trans",
    q: "Por que as gorduras trans são prejudiciais à saúde?",
    a: "Porque aumentam o LDL (colesterol ruim) e diminuem o HDL (colesterol bom), elevando o risco de doenças cardíacas.",
    erradas: ["Porque são sempre de origem vegetal e não têm colesterol.", "Porque são rapidamente digeridas pelo corpo.", "Porque aumentam o HDL e diminuem o LDL."],
    explicacao: "A gordura trans (hidrogenada) altera o perfil lipídico de forma negativa, sendo pior que a saturada para o sistema cardiovascular."
  },
  {
    id: 162,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Lipídios",
    tag: "tag-biologia",
    topico: "Lipídios — Aterosclerose",
    q: "O que é a aterosclerose?",
    a: "O acúmulo de placas de colesterol (ateromas) nas paredes das artérias, reduzindo o fluxo sanguíneo.",
    erradas: ["A dilatação das artérias para aumentar o fluxo.", "O aumento do número de hemácias no sangue.", "A quebra das gorduras no fígado."],
    explicacao: "O excesso de LDL se deposita nas artérias, causando inflamação, endurecimento (arteriosclerose) e risco de infarto/AVC."
  },

  // ==========================================
  // PROTEÍNAS
  // ==========================================
  {
    id: 163,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Proteínas",
    tag: "tag-biologia",
    topico: "Proteínas — Estrutura do Aminoácido",
    q: "O que diferencia um aminoácido de outro?",
    a: "O radical (R) ligado ao carbono alfa, que varia em estrutura e propriedade (polar, apolar, ácido, básico).",
    erradas: ["A quantidade de grupos amina.", "A presença de ligações peptídicas.", "O tipo de carboidrato que o compõe."],
    explicacao: "Todos os aminoácidos têm um carbono alfa central ligado a um grupo amina, um carboxila, um hidrogênio e um radical R variável."
  },
  {
    id: 164,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Proteínas",
    tag: "tag-biologia",
    topico: "Proteínas — Ligação Peptídica",
    q: "Como são formadas as ligações peptídicas entre aminoácidos?",
    a: "Por reações de desidratação (síntese por desidratação), com liberação de uma molécula de água por ligação.",
    erradas: ["Por hidrólise, com consumo de água.", "Por ligações de hidrogênio entre os radicais.", "Pela união dos grupos amino, sem liberar água."],
    explicacao: "O grupo carboxila de um aminoácido reage com o grupo amina de outro, liberando água e formando o peptídeo."
  },
  {
    id: 165,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Proteínas",
    tag: "tag-biologia",
    topico: "Proteínas — Desnaturação",
    q: "O que ocorre na desnaturação de uma proteína pelo calor ou pH extremo?",
    a: "Há a perda da estrutura tridimensional (secundária e terciária) e da função biológica, mas a estrutura primária é mantida.",
    erradas: ["As ligações peptídicas são quebradas, formando aminoácidos livres.", "A estrutura primária é destruída, mas a 3D é mantida.", "A proteína se torna mais ativa e resistente."],
    explicacao: "A desnaturação quebra as ligações fracas (pontes de H, forças de Van der Waals). A sequência de aminoácidos (primária) não é afetada."
  },
  {
    id: 166,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Proteínas",
    tag: "tag-biologia",
    topico: "Proteínas — Anemia Falciforme",
    q: "Qual a alteração molecular que causa a anemia falciforme?",
    a: "Substituição do aminoácido ácido glutâmico (polar) por valina (apolar) na cadeia beta da hemoglobina.",
    erradas: ["Falta de ferro na estrutura do grupo heme.", "Aumento na produção de cadeias alfa.", "Perda da estrutura primária da proteína."],
    explicacao: "A troca de um aminoácido polar por um apolar faz a hemoglobina se agregar (cristalizar), deformando a hemácia em forma de foice."
  },
  {
    id: 167,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Proteínas",
    tag: "tag-biologia",
    topico: "Proteínas — Aminoácidos Essenciais",
    q: "O que são aminoácidos essenciais?",
    a: "Aminoácidos que o organismo não consegue sintetizar e precisam ser obtidos pela dieta.",
    erradas: ["Aminoácidos produzidos em grande quantidade pelo corpo.", "Aminoácidos que não participam da síntese proteica.", "Aminoácidos encontrados apenas em proteínas vegetais."],
    explicacao: "Nos humanos, existem 9 aminoácidos essenciais (ex: leucina, valina, triptofano) que devem vir da alimentação."
  },

  // ==========================================
  // ENZIMAS
  // ==========================================
  {
    id: 168,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Enzimas",
    tag: "tag-biologia",
    topico: "Enzimas — Catálise",
    q: "Como as enzimas aceleram as reações químicas?",
    a: "Diminuindo a energia de ativação necessária para que a reação ocorra, sem alterar o produto final.",
    erradas: ["Aumentando a temperatura local.", "Fornecendo energia extra para os reagentes.", "Consumindo-se na reação para formar o produto."],
    explicacao: "As enzimas são catalisadores biológicos. Elas reduzem a barreira energética (energia de ativação) para a reação acontecer mais rápido."
  },
  {
    id: 169,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Enzimas",
    tag: "tag-biologia",
    topico: "Enzimas — Inibidor Competitivo",
    q: "Como atua o inibidor competitivo e como reverter seu efeito?",
    a: "Ele se liga ao sítio ativo da enzima, competindo com o substrato; o efeito é revertido aumentando-se a concentração de substrato.",
    erradas: ["Ele se liga ao sítio alostérico, alterando a forma da enzima permanentemente.", "Ele destrói o substrato, impedindo a reação.", "Ele aumenta a energia de ativação da reação."],
    explicacao: "O inibidor competitivo tem formato semelhante ao substrato. Aumentar o substrato aumenta a chance de ele 'ganhar a disputa' pelo sítio ativo."
  },
  {
    id: 170,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Enzimas",
    tag: "tag-biologia",
    topico: "Enzimas — Inibidor Não Competitivo",
    q: "Como atua o inibidor não competitivo?",
    a: "Liga-se a um sítio alostérico (diferente do sítio ativo), alterando a conformação da enzima e impedindo a catálise.",
    erradas: ["Liga-se ao sítio ativo, competindo diretamente com o substrato.", "É revertido apenas aumentando a concentração de substrato.", "Acelera a reação sem ser consumido."],
    explicacao: "Ele não disputa o sítio ativo. Ele muda a forma da enzima, de modo que o substrato não se encaixa mais. Aumentar o substrato não resolve."
  },
  {
    id: 171,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Enzimas",
    tag: "tag-biologia",
    topico: "Enzimas — Fatores de Atividade (pH e Temperatura)",
    q: "Como o pH e a temperatura afetam a atividade enzimática?",
    a: "Cada enzima tem um pH e temperatura ótimos; valores extremos causam desnaturação e perda de atividade.",
    erradas: ["A atividade sempre aumenta com o aumento da temperatura.", "O pH não interfere na catálise enzimática.", "A temperatura só afeta enzimas de origem animal."],
    explicacao: "Ex: a pepsina atua em pH ácido (estômago). A tripsina em pH básico (intestino). Fora das condições ótimas, a enzima desnatura."
  },
  {
    id: 172,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Enzimas",
    tag: "tag-biologia",
    topico: "Enzimas — Feedback Negativo",
    q: "O que é a retroinibição (feedback negativo) em uma via metabólica?",
    a: "O produto final da via inibe a primeira enzima da sequência, evitando acúmulo desnecessário.",
    erradas: ["O substrato inicial inibe as enzimas finais.", "A enzima 1 ativa a enzima 2 em cascata contínua.", "O excesso de produto destrói o substrato."],
    explicacao: "É um mecanismo de economia. Quando há muito produto, ele sinaliza para a célula parar de produzi-lo, inibindo a enzima do início da via."
  },

  // ==========================================
  // VITAMINAS
  // ==========================================
  {
    id: 173,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Vitaminas",
    tag: "tag-biologia",
    topico: "Vitaminas — Antioxidantes (C e E)",
    q: "Qual é a função das vitaminas C e E no organismo?",
    a: "Atuam como antioxidantes, neutralizando radicais livres que causam envelhecimento e doenças.",
    erradas: ["Atuam como principal fonte de energia.", "São precursoras dos hormônios esteroides.", "Atuam na coagulação do sangue."],
    explicacao: "Doam elétrons para estabilizar os radicais livres, prevenindo danos celulares e doenças degenerativas."
  },
  {
    id: 174,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Vitaminas",
    tag: "tag-biologia",
    topico: "Vitaminas — Lipossolúveis vs Hidrossolúveis",
    q: "Qual a diferença entre vitaminas lipossolúveis e hidrossolúveis em relação à absorção e excreção?",
    a: "Lipossolúveis (A, D, E, K) precisam de gorduras para absorção e são armazenadas; hidrossolúveis (B, C) são absorvidas com água e excretadas na urina.",
    erradas: ["Lipossolúveis são excretadas facilmente; hidrossolúveis acumulam no fígado.", "Ambas são armazenadas por longos períodos.", "Hidrossolúveis precisam de bile para absorção."],
    explicacao: "O excesso de lipossolúveis pode ser tóxico (acumulam). Hidrossolúveis exigem consumo diário, pois o excesso é excretado."
  },
  {
    id: 175,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Vitaminas",
    tag: "tag-biologia",
    topico: "Vitaminas — Vitamina A",
    q: "Qual a principal função e a doença causada pela deficiência de Vitamina A?",
    a: "Formação de pigmentos visuais (rodopsina); a deficiência causa cegueira noturna (nictalopia) e xeroftalmia.",
    erradas: ["Coagulação sanguínea; causa hemorragias.", "Absorção de cálcio; causa raquitismo.", "Síntese de colágeno; causa escorbuto."],
    explicacao: "A vitamina A (retinol) é essencial para a retina. Carotenoides (cenoura) são precursores."
  },
  {
    id: 176,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Vitaminas",
    tag: "tag-biologia",
    topico: "Vitaminas — Vitamina D",
    q: "Como a vitamina D é obtida e qual sua principal função?",
    a: "É sintetizada na pele pela ação do sol (UV) e atua na absorção de cálcio; sua falta causa raquitismo.",
    erradas: ["É obtida apenas de frutas cítricas e atua na coagulação.", "É sintetizada no fígado e atua na visão.", "Atua na síntese de colágeno e tem ação antioxidante."],
    explicacao: "O sol converte o colesterol da pele em vitamina D, que estimula a absorção de cálcio no intestino, fortalecendo os ossos."
  },
  {
    id: 177,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Vitaminas",
    tag: "tag-biologia",
    topico: "Vitaminas — Vitamina C",
    q: "Qual a principal função da Vitamina C (ácido ascórbico) e qual doença sua falta causa?",
    a: "Atua na síntese de colágeno e é antioxidante; a falta causa o escorbuto.",
    erradas: ["Atua na coagulação; a falta causa raquitismo.", "Atua na visão; a falta causa cegueira noturna.", "Atua no metabolismo de carboidratos; a falta causa beribéri."],
    explicacao: "A vitamina C é essencial para a hidroxilação da prolina na formação do colágeno. Sem ela, as paredes dos vasos ficam frágeis (escorbuto)."
  },
  {
    id: 178,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Vitaminas",
    tag: "tag-biologia",
    topico: "Vitaminas — Vitamina K",
    q: "Qual a principal função da Vitamina K?",
    a: "Atua na coagulação sanguínea, sendo essencial para a síntese de protrombina pelo fígado.",
    erradas: ["Atua na absorção de cálcio nos ossos.", "É essencial para a visão noturna.", "Atua na síntese de colágeno."],
    explicacao: "A vitamina K é fundamental na cascata de coagulação. Sua deficiência causa hemorragias frequentes."
  },
  {
    id: 179,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Vitaminas",
    tag: "tag-biologia",
    topico: "Vitaminas — Complexo B (B1 e B12)",
    q: "Quais as doenças causadas pela deficiência de Vitamina B1 e B12, respectivamente?",
    a: "B1: beribéri (distúrbios neurológicos); B12: anemia perniciosa (maturação de hemácias).",
    erradas: ["B1: escorbuto; B12: raquitismo.", "B1: cegueira noturna; B12: beribéri.", "B1: anemia perniciosa; B12: pelagra."],
    explicacao: "A B1 é vital para o metabolismo de carboidratos nos neurônios. A B12 é essencial para a divisão celular e formação de hemácias."
  },

  // ==========================================
  // METABOLISMO
  // ==========================================
  {
    id: 180,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Metabolismo",
    tag: "tag-biologia",
    topico: "Metabolismo — Anabolismo vs Catabolismo",
    q: "Qual a diferença entre anabolismo e catabolismo?",
    a: "Anabolismo constrói moléculas consumindo energia (endergônico); catabolismo quebra moléculas liberando energia (exergônico).",
    erradas: ["Anabolismo quebra e libera energia; catabolismo constrói e consome.", "Ambos consomem energia para construir tecidos.", "Ambos liberam energia pela quebra de glicose."],
    explicacao: "Fotossíntese é anabolismo (gasta luz para fazer glicose). Respiração celular é catabolismo (quebra glicose e libera ATP)."
  },
  {
    id: 181,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Metabolismo",
    tag: "tag-biologia",
    topico: "Metabolismo — Respiração Celular (Ácido Lático)",
    q: "Na falta de oxigênio, o que acontece com a glicose nas células musculares?",
    a: "Ocorre fermentação lática, convertendo o piruvato em ácido lático, que causa fadiga muscular.",
    erradas: ["Ocorre fermentação alcoólica, produzindo etanol e CO2.", "A glicose é completamente quebrada em CO2 e água.", "A glicose é armazenada como glicogênio no músculo."],
    explicacao: "Sem O2, a cadeia respiratória para. A célula usa a fermentação para gerar ATP rápido, acumulando ácido lático nos músculos."
  },
  {
    id: 182,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Metabolismo",
    tag: "tag-biologia",
    topico: "Metabolismo — Gliconeogênese",
    q: "O que é a gliconeogênese e quando ela ocorre?",
    a: "É a síntese de glicose a partir de aminoácidos e gorduras, ocorrendo em jejum prolongado.",
    erradas: ["É a quebra de glicose para gerar energia.", "É a síntese de proteínas a partir de glicose.", "É a conversão de glicose em glicogênio."],
    explicacao: "Para manter a glicemia no jejum, o fígado produz glicose a partir de outras fontes (como proteínas musculares e gorduras)."
  },
  {
    id: 183,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Metabolismo",
    tag: "tag-biologia",
    topico: "Metabolismo — Reservas Energéticas",
    q: "Qual é a ordem de utilização das reservas energéticas pelo corpo em jejum?",
    a: "Primeiro carboidratos (glicogênio), depois lipídios (gordura) e, por último, proteínas (músculos).",
    erradas: ["Primeiro lipídios, depois proteínas, depois carboidratos.", "Primeiro proteínas, depois carboidratos, depois lipídios.", "Todas as reservas são utilizadas simultaneamente."],
    explicacao: "O corpo prefere usar glicose (carboidrato). Quando acaba, usa gordura (catabolismo lipídico) para poupar as proteínas estruturais."
  },
  {
    id: 184,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Metabolismo",
    tag: "tag-biologia",
    topico: "Metabolismo — Ciclo da Ureia e Gota",
    q: "O que causa a gota e qual sua relação com a dieta?",
    a: "O acúmulo de ácido úrico nas articulações, causado pelo excesso de proteínas ricas em purinas (carnes).",
    erradas: ["O acúmulo de colesterol, causado por dietas ricas em gorduras.", "O excesso de glicose, causado por dietas ricas em açúcar.", "A falta de cálcio, causada pela falta de laticínios."],
    explicacao: "A quebra de purinas (DNA/RNA) gera ácido úrico. Dietas ricas em carnes e frutos do mar aumentam a produção, causando gota."
  },
  {
    id: 185,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Metabolismo",
    tag: "tag-biologia",
    topico: "Metabolismo — Insulina e Glucagon",
    q: "Qual o papel da insulina e do glucagon na regulação da glicemia?",
    a: "Insulina reduz a glicose (estimula entrada nas células e síntese de glicogênio); glucagon aumenta a glicose (quebra glicogênio).",
    erradas: ["Insulina aumenta a glicose; glucagon reduz.", "Ambos aumentam a glicose no sangue.", "Ambos diminuem a glicose no sangue."],
    explicacao: "São hormônios pancreáticos antagônicos. A insulina é hipoglicemiante; o glucagon é hiperglicemiante."
  },
  {
    id: 186,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Glicídios",
    tag: "tag-biologia",
    topico: "Glicídios — Função de Reserva vs Estrutural",
    q: "Qual a diferença entre os polissacarídeos de reserva e os estruturais?",
    a: "Reserva (amido e glicogênio) armazenam energia; estruturais (celulose e quitina) conferem rigidez e proteção.",
    erradas: ["Reserva (celulose e quitina) dão estrutura; estruturais (amido e glicogênio) guardam energia.", "Ambos só existem em animais.", "Ambos são digeridos facilmente pelo ser humano."],
    explicacao: "Amido (vegetal) e glicogênio (animal) são fontes de energia. Celulose (vegetal) e quitina (artrópodes/fungos) são estruturais."
  },
  {
    id: 187,
    deck: "Biologia",
    topicoPrincipal: "Bioquímica",
    subgrupo: "Proteínas",
    tag: "tag-biologia",
    topico: "Proteínas — Kwashiorkor",
    q: "O que é o Kwashiorkor e qual sua principal causa?",
    a: "É uma desnutrição proteica grave que causa edema (inchaço) abdominal, pois a falta de proteínas reduz a pressão osmótica do sangue.",
    erradas: ["É a falta de carboidratos, causando perda de peso rápida.", "É o excesso de vitaminas lipossolúveis.", "É uma doença genética que altera a hemoglobina."],
    explicacao: "Sem proteínas (albumina) no plasma, a água extravasa para os tecidos (edema). Ao tratar com dieta adequada, o edema diminui, causando perda de peso inicial."
  },
  {
    id: 217,
    deck: "Biologia",
    topicoPrincipal: "Origem da Vida",
    subgrupo: "Origem da Vida I",
    tag: "tag-biologia",
    topico: "Abiogênese vs Biogênese — Experimentos",
    q: "Qual foi a importância dos experimentos de Redi, Spallanzani e Pasteur para a Origem da Vida?",
    a: "Refutaram a Abiogênese (geração espontânea) e provaram a Biogênese (a vida surge de outra vida pré-existente).",
    erradas: ["Provaram que a vida surgiu de matéria inanimada.", "Demonstraram a teoria da Panspermia.", "Comprovaram a geração espontânea em caldos nutritivos."],
    explicacao: "Redi (carne e moscas), Spallanzani (frascos fechados) e Pasteur (frascos pescoço de cisne) provaram que microrganismos vêm do ar, e não da 'força vital' da matéria."
  },
  {
    id: 218,
    deck: "Biologia",
    topicoPrincipal: "Origem da Vida",
    subgrupo: "Origem da Vida I",
    tag: "tag-biologia",
    topico: "Teoria da Panspermia",
    q: "O que defende a teoria da Panspermia?",
    a: "Que a vida na Terra não se originou aqui, mas foi trazida de outros planetas ou do espaço (ex: meteoritos, cometas).",
    erradas: ["Que a vida surgiu a partir de coacervados nos mares primitivos.", "Que a vida surgiu espontaneamente em caldos nutritivos.", "Que a vida se originou de reações químicas na atmosfera primitiva."],
    explicacao: "Panspermia é a hipótese extraterrestre. Defensores como Arrhenius e Thomson acreditavam que a vida é universal e foi disseminada pelo cosmos."
  },
  {
    id: 219,
    deck: "Biologia",
    topicoPrincipal: "Origem da Vida",
    subgrupo: "Origem da Vida I",
    tag: "tag-biologia",
    topico: "Evolução Química — Oparin e Haldane",
    q: "Qual é a base da hipótese da Evolução Química (ou Molecular) proposta por Oparin e Haldane?",
    a: "A vida surgiu a partir de reações químicas entre compostos inorgânicos na atmosfera primitiva, formando compostos orgânicos e depois os primeiros seres vivos.",
    erradas: ["A vida foi criada por um ser divino na Terra primitiva.", "A vida veio de outro planeta em forma de esporos.", "A vida surgiu a partir de seres pluricelulares complexos."],
    explicacao: "Oparin e Haldane propuseram que a atmosfera primitiva era redutora (sem oxigênio, com metano e amônia). As descargas elétricas e radiação formaram moléculas orgânicas, que se acumularam no oceano formando a 'sopa primordial'."
  },
  {
    id: 220,
    deck: "Biologia",
    topicoPrincipal: "Origem da Vida",
    subgrupo: "Origem da Vida I",
    tag: "tag-biologia",
    topico: "Experimento de Miller e Urey",
    q: "O que o experimento de Stanley Miller e Harold Urey (1953) conseguiu comprovar?",
    a: "Que é possível sintetizar moléculas orgânicas (como aminoácidos) a partir de gases da atmosfera primitiva e descargas elétricas.",
    erradas: ["Que a vida pode ser gerada espontaneamente em laboratório.", "Que o RNA foi a primeira molécula a surgir no planeta.", "Que a atmosfera primitiva já possuía grandes quantidades de oxigênio."],
    explicacao: "Simulando a Terra primitiva em um aparelho com água, metano, amônia, hidrogênio e eletricidade, Miller obteve aminoácidos. Isso provou a primeira etapa da evolução química, mas não a origem da vida em si."
  },
  {
    id: 221,
    deck: "Biologia",
    topicoPrincipal: "Origem da Vida",
    subgrupo: "Origem da Vida I",
    tag: "tag-biologia",
    topico: "Coacervados",
    q: "O que eram os coacervados na teoria de Oparin?",
    a: "Aglomerados de proteínas e outras moléculas orgânicas envolvidos por uma película de água, que seriam precursores das primeiras células.",
    erradas: ["As primeiras bactérias já com material genético e metabolismo.", "Moléculas de RNA capazes de se autoduplicar.", "Membranas plasmáticas primitivas formadas apenas por lipídios."],
    explicacao: "Os coacervados não eram seres vivos, mas estruturas coloidais capazes de trocar matéria com o meio. Isolavam o ambiente interno do externo, sendo um passo crucial para a formação da célula."
  },
  {
    id: 222,
    deck: "Biologia",
    topicoPrincipal: "Origem da Vida",
    subgrupo: "Origem da Vida I",
    tag: "tag-biologia",
    topico: "Hipótese Heterotrófica",
    q: "Segundo a Hipótese Heterotrófica, qual era a sequência metabólica dos primeiros seres vivos?",
    a: "Fermentação → Fotossíntese → Respiração Aeróbica.",
    erradas: ["Fotossíntese → Respiração → Fermentação.", "Respiração Aeróbica → Fotossíntese → Fermentação.", "Quimiossíntese → Fermentação → Respiração."],
    explicacao: "Os primeiros seres eram heterótrofos anaeróbios (fermentadores), pois não havia O2. Com a fotossíntese das cianobactérias, o O2 acumulou-se na atmosfera, permitindo o surgimento da respiração aeróbica."
  },
  {
    id: 223,
    deck: "Biologia",
    topicoPrincipal: "Origem da Vida",
    subgrupo: "Origem da Vida II",
    tag: "tag-biologia",
    topico: "Atmosfera Primitiva e Cianobactérias",
    q: "Qual foi a consequência do surgimento das cianobactérias na Terra primitiva?",
    a: "Elas realizaram fotossíntese, liberando oxigênio (O2) na atmosfera, alterando a composição do planeta.",
    erradas: ["Elas consumiram todo o metano e amônia, esterilizando o planeta.", "Elas criaram a camada de ozônio instantaneamente, sem O2.", "Elas provocaram a extinção dos coacervados por competição."],
    explicacao: "As cianobactérias (algas verde-azuladas) foram os primeiros seres fotossintetizantes. O acúmulo de O2 na atmosfera causou o 'Holocausto do Oxigênio', matando muitas formas de vida anaeróbias, mas abrindo caminho para a respiração aeróbica."
  },
  {
    id: 224,
    deck: "Biologia",
    topicoPrincipal: "Origem da Vida",
    subgrupo: "Origem da Vida II",
    tag: "tag-biologia",
    topico: "Evolução das Células — Endossimbiose",
    q: "O que propõe a Teoria da Endossimbiose, de Lynn Margulis?",
    a: "Que mitocôndrias e cloroplastos surgiram pela incorporação de bactérias procariontes por uma célula eucarionte ancestral.",
    erradas: ["Que o núcleo celular surgiu a partir da invaginação da membrana plasmática.", "Que os vírus foram os precursores das primeiras células eucariontes.", "Que as células procariontes evoluíram diretamente de coacervados sem organelas."],
    explicacao: "A simbiose obrigatória entre procariontes (bactérias aeróbias e cianobactérias) e uma célula hospedeira resultou nas organelas energéticas (mitocôndrias e cloroplastos)."
  },
  {
    id: 225,
    deck: "Biologia",
    topicoPrincipal: "Origem da Vida",
    subgrupo: "Origem da Vida II",
    tag: "tag-biologia",
    topico: "Evidências da Endossimbiose",
    q: "Quais são as principais evidências que sustentam a Teoria da Endossimbiose?",
    a: "Mitocôndrias e cloroplastos possuem DNA circular próprio, ribossomos do tipo procarionte e membrana dupla.",
    erradas: ["Possuem DNA linear e ribossomos 80S, típicos de eucariontes.", "São capazes de se autoduplicar por meiose independente.", "Não possuem membranas internas e nem material genético próprio."],
    explicacao: "O DNA circular e a presença de ribossomos 70S (iguais aos de bactérias) provam a origem procariótica dessas organelas. A membrana dupla indica a fagocitose original."
  },
  {
    id: 226,
    deck: "Biologia",
    topicoPrincipal: "Origem da Vida",
    subgrupo: "Origem da Vida II",
    tag: "tag-biologia",
    topico: "RNA — O Mundo do RNA",
    q: "Por que o RNA é considerado por muitos cientistas como a primeira molécula biológica a surgir na evolução?",
    a: "Porque ele tem a capacidade de armazenar informações genéticas (como o DNA) e também de catalisar reações químicas (como as enzimas).",
    erradas: ["Porque é uma molécula mais estável e resistente que o DNA.", "Porque o RNA possui dupla hélice e se autorreplica sem enzimas.", "Porque foi a primeira molécula a ser encontrada nos meteoritos."],
    explicacao: "O RNA possui dupla função: carrega a informação genética e atua como enzima (ribozima), o que resolve o dilema do 'ovo ou da galinha' sobre a origem das proteínas e do material genético."
  },
  {
    id: 227,
    deck: "Biologia",
    topicoPrincipal: "Origem da Vida",
    subgrupo: "Origem da Vida II",
    tag: "tag-biologia",
    topico: "Tempo Geológico e Eras",
    q: "Em qual Era geológica ocorreu a grande diversificação dos mamíferos e o aparecimento dos primeiros hominídeos?",
    a: "Era Cenozoica.",
    erradas: ["Era Paleozoica.", "Era Mesozoica.", "Era Pré-Cambriana."],
    explicacao: "A Era Mesozoica é marcada pelos dinossauros. Após a extinção deles, a Era Cenozoica (Terciário e Quaternário) é caracterizada pelo apogeu dos mamíferos e o surgimento da espécie humana."
  },
  {
    id: 228,
    deck: "Biologia",
    topicoPrincipal: "Origem da Vida",
    subgrupo: "Origem da Vida II",
    tag: "tag-biologia",
    topico: "Extinção dos Dinossauros",
    q: "Segundo a teoria mais aceita, qual foi a principal causa da extinção dos dinossauros há 65 milhões de anos?",
    a: "A queda de um asteroide que gerou uma nuvem de poeira, bloqueando a luz solar e afetando o fluxo energético das teias tróficas.",
    erradas: ["A caça predatória realizada pelos primeiros hominídeos.", "A competição direta com os mamíferos carnívoros.", "O aumento excessivo de oxigênio na atmosfera, que intoxicou os répteis."],
    explicacao: "A poeira levantada pelo impacto bloqueou a fotossíntese das plantas. Sem produtores, a cadeia alimentar colapsou, levando à extinção de grandes herbívoros e, consequentemente, dos carnívoros."
  },
  {
    id: 229,
    deck: "Biologia",
    topicoPrincipal: "Origem da Vida",
    subgrupo: "Origem da Vida II",
    tag: "tag-biologia",
    topico: "Fixismo e Evolução (Pegadinha)",
    q: "Qual é a incoerência biológica presente na imagem de humanos e dinossauros convivendo juntos?",
    a: "Humanos e dinossauros estão separados pelo tempo geológico: dinossauros viveram na Era Mesozoica e os humanos na Era Cenozoica.",
    erradas: ["Humanos e dinossauros estavam isolados geograficamente pela divisão da Pangeia.", "Os dinossauros eram herbívoros e não poderiam caçar humanos.", "Os dinossauros foram extintos pelo homem primitivo, por isso não coexistiram."],
    explicacao: "Os dinossauros foram extintos há cerca de 65 milhões de anos. Os primeiros ancestrais humanos só surgiram muito depois, no final do período Terciário e no Quaternário (Era Cenozoica)."
  }
];