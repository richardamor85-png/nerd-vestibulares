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
  },
{
    id: "RES-BIO-01",
    disciplina: "Biologia",
    topico: "Bioquímica",
    subtopico: "Constituintes Inorgânicos da Célula",
    tituloModulo: "Água e Sais Minerais: Os Alicerces da Vida",
    conteudo: [
      {
        tipo: "texto",
        corpo: "A água é a substância mais abundante nos seres vivos (cerca de 70% a 75% do corpo). Sua estrutura molecular é polar (possui polos positivos e negativos), o que lhe confere propriedades únicas. Devido a essa polaridade, a água é o 'solvente universal', capaz de dissolver a maioria das substâncias (hidrofílicas) e interagir com as gorduras (hidrofóbicas) através de emulsões. As pontes de hidrogênio entre as moléculas de água geram a coesão (tensão superficial) e a adesão (capilaridade), permitindo que a seiva suba nas plantas e que insetos andem sobre a água."
      },
      {
        tipo: "texto",
        corpo: "Os sais minerais são reguladores e estruturais. O Cálcio (Ca) é vital para a coagulação sanguínea, contração muscular e formação óssea. O Ferro (Fe) compõe a hemoglobina (transporte de O2). O Iodo (I) é essencial para a tireoide (T3 e T4). O Magnésio (Mg) compõe a clorofila. O Fósforo (P) forma o ATP, DNA e RNA. A falta desses minerais causa doenças graves, como anemia (ferro) e bócio (iodo). O excesso de Sódio (Na), por outro lado, provoca retenção hídrica, elevando a pressão arterial (hipertensão)."
      },
      {
        tipo: "texto",
        corpo: "Uma análise crítica sobre a água revela seu papel crucial na termorregulação. O alto calor específico da água faz com que ela absorva muito calor sem variar bruscamente sua temperatura, protegendo o organismo contra choques térmicos. Seu alto calor latente de vaporização permite que o suor resfrie o corpo. Além disso, a água atua como veículo de excreção (urina) e lubrificante. O equilíbrio osmótico (entrada e saída de água das células) é rigorosamente controlado para evitar a plasmoptise (lise celular) ou a crenação (murchamento)."
      },
      {
        tipo: "bizu",
        corpo: "⚠️ BIZU DE PROVA: O Sódio retém líquido (aumenta pressão). O Ferro é da hemoglobina (anemia). O Iodo é da tireoide. O Magnésio é da clorofila. O Cálcio é da coagulação e músculos. Cuidado com o excesso de fibras (fitatos): eles 'grudam' nos minerais e impedem sua absorção no intestino."
      },
      {
        tipo: "questao_fixar",
        estilo: "Banca",
        enunciado: "A Lei brasileira obriga a adição de iodo ao sal de cozinha. Essa medida visa prevenir problemas em qual glândula e qual mineral atua na contração muscular, respectivamente?",
        alternativas: [
          "A) Pâncreas e Ferro.",
          "B) Tireoide e Cálcio.",
          "C) Hipófise e Magnésio.",
          "D) Suprarrenal e Sódio.",
          "E) Paratireoide e Fósforo."
        ],
        gabarito: "B",
        justificativa: "O iodo é essencial para a síntese dos hormônios tireoidianos (T3 e T4), prevenindo o bócio. O cálcio é o mineral chave para a contração muscular e coagulação."
      }
    ]
  },
  {
    id: "RES-BIO-02",
    disciplina: "Biologia",
    topico: "Bioquímica",
    subtopico: "Glicídios",
    tituloModulo: "Glicídios: A Energia e a Estrutura dos Seres Vivos",
    conteudo: [
      {
        tipo: "texto",
        corpo: "Os glicídios (carboidratos) são moléculas formadas por carbono, hidrogênio e oxigênio (CH2O)n. São classificados em monossacarídeos (glicose, frutose, galactose), dissacarídeos (sacarose, lactose, maltose) e polissacarídeos (amido, glicogênio, celulose, quitina). A glicose é o monossacarídeo central, sendo a principal fonte de energia para as células através da respiração celular. A união de dois monossacarídeos forma um dissacarídeo através de uma ligação glicosídica, com liberação de água (síntese por desidratação)."
      },
      {
        tipo: "texto",
        corpo: "As funções dos polissacarídeos dividem-se em dois eixos: reserva energética e estrutura. O amido é a reserva das plantas, formado por amilose e amilopectina. O glicogênio é a reserva animal, armazenado no fígado e músculos. A celulose é o principal componente da parede celular vegetal, e a quitina forma o exoesqueleto dos artrópodes e a parede dos fungos. O ser humano não digere a celulose (falta a enzima celulase), por isso ela atua como fibra alimentar, auxiliando o trânsito intestinal."
      },
      {
        tipo: "texto",
        corpo: "A análise crítica envolve o metabolismo e a saúde. O índice glicêmico mede a velocidade com que um carboidrato eleva a glicose no sangue. Alimentos com carboidratos complexos (fibras, amido) têm digestão lenta, evitando picos de insulina. A intolerância à lactose ocorre pela falta da enzima lactase, o que faz a lactose acumular no intestino, atraindo água (diarreia osmótica) e fermentando com bactérias, gerando gases. Já os herbívoros conseguem digerir a celulose porque possuem bactérias simbiontes em seus intestinos que produzem a celulase."
      },
      {
        tipo: "bizu",
        corpo: "⚠️ BIZU DE PROVA: Carboidrato é a PRIMEIRA fonte de energia. Ligações glicosídicas liberam água. Celulose = fibra (não digerimos). Amido = planta, Glicogênio = animal. Cuidado com a pegadinha de dizer que a celulose é digerida por humanos (é falso!)."
      },
      {
        tipo: "questao_fixar",
        estilo: "Banca",
        enunciado: "Um indivíduo com intolerância à lactose ingere leite e apresenta diarreia e gases. A explicação biológica correta para esse quadro é:",
        alternativas: [
          "A) A lactose é absorvida intacta pela corrente sanguínea, causando intoxicação.",
          "B) A falta de lactase faz a lactose fermentar e atrair água para o intestino por osmose.",
          "C) A lactase em excesso quebra a parede do intestino delgado.",
          "D) A lactose é convertida em ácido lático nos músculos lisos do intestino."
        ],
        gabarito: "B",
        justificativa: "Sem a lactase para quebrar a lactose em glicose e galactose, ela permanece no intestino. Por ser osmoticamente ativa, atrai água (diarreia) e é fermentada por bactérias (gases)."
      }
    ]
  },
  {
    id: "RES-BIO-03",
    disciplina: "Biologia",
    topico: "Bioquímica",
    subtopico: "Lipídios",
    tituloModulo: "Lipídios: Reserva, Isolamento e Estrutura",
    conteudo: [
      {
        tipo: "texto",
        corpo: "Os lipídios são moléculas orgânicas insolúveis em água (hidrofóbicas) e solúveis em solventes orgânicos. A classe mais comum são os triglicerídeos (gorduras e óleos), formados por uma molécula de glicerol e três ácidos graxos. Eles podem ser saturados (apenas ligações simples, geralmente sólidos em temperatura ambiente, de origem animal) ou insaturados (possuem ligações duplas, geralmente líquidos, de origem vegetal). Os lipídios são a reserva energética mais eficiente, pois liberam o dobro de energia por grama em relação aos carboidratos."
      },
      {
        tipo: "texto",
        corpo: "Além da reserva, possuem outras funções: isolamento térmico (tecido adiposo), proteção de órgãos, transporte de vitaminas lipossolúveis (A, D, E, K) e composição de membranas (fosfolipídios). Os esteroides são lipídios especiais formados por quatro anéis de carbono, sendo o colesterol o principal representante. O colesterol é essencial para a membrana plasmática, para a síntese de hormônios sexuais, vitamina D e sais biliares."
      },
      {
        tipo: "texto",
        corpo: "A análise crítica foca na saúde cardiovascular. Como o colesterol é insolúvel no sangue, ele é transportado por lipoproteínas. O LDL (baixa densidade) transporta o colesterol para as artérias, podendo causar aterosclerose (placas de gordura) e infarto. O HDL (alta densidade) é o 'bom', pois remove o colesterol das artérias e leva ao fígado. As gorduras trans (hidrogenadas) são as mais perigosas, pois aumentam o LDL e diminuem o HDL. Medicamentos como o Orlistate inibem a lipase, impedindo a absorção de gordura, mas causam deficiência de vitaminas lipossolúveis."
      },
      {
        tipo: "bizu",
        corpo: "⚠️ BIZU DE PROVA: Lipídio é a reserva mais energética (armazena sem água). HDL = bom (remove), LDL = ruim (deposita). Gorduras trans = vilãs. O colesterol é precursor de hormônios esteroides. Os anabolizantes são derivados de esteroides."
      },
      {
        tipo: "questao_fixar",
        estilo: "Banca",
        enunciado: "Os medicamentos que inibem a enzima lipase, usados para emagrecer, podem causar quais efeitos colaterais relacionados às vitaminas?",
        alternativas: [
          "A) Deficiência de vitaminas hidrossolúveis (complexo B e C).",
          "B) Excesso de absorção de vitamina D.",
          "C) Deficiência de vitaminas lipossolúveis (A, D, E, K).",
          "D) Deficiência de proteínas, pois a lipase digere proteínas."
        ],
        gabarito: "C",
        justificativa: "Sem a digestão e absorção de gorduras (bloqueada pela inibição da lipase), as vitaminas lipossolúveis (A, D, E, K), que dependem de lipídios para serem absorvidas, deixam de ser absorvidas adequadamente."
      }
    ]
  },
  {
    id: "RES-BIO-04",
    disciplina: "Biologia",
    topico: "Bioquímica",
    subtopico: "Proteínas e Enzimas",
    tituloModulo: "Proteínas e Enzimas: Estrutura e Catálise",
    conteudo: [
      {
        tipo: "texto",
        corpo: "As proteínas são polímeros de aminoácidos unidos por ligações peptídicas. A estrutura primária é a sequência de aminoácidos. A secundária envolve dobras (alfa-hélice, beta-folha). A terciária é a forma 3D, e a quaternária é a união de várias cadeias. Cada aminoácido tem um grupo amina e um carboxila ligados a um carbono alfa, que também se liga a um radical (R) variável. Existem aminoácidos essenciais que não produzimos e devemos obter pela dieta. A anemia falciforme é causada pela troca de um único aminoácido (ácido glutâmico por valina) na hemoglobina, alterando sua forma e função."
      },
      {
        tipo: "texto",
        corpo: "As enzimas são proteínas catalisadoras. Elas aceleram as reações diminuindo a energia de ativação, sem serem consumidas. Cada enzima atua sobre um substrato específico (modelo chave-fechadura). Fatores como temperatura e pH ótimos são cruciais. A desnaturação (calor, pH extremo) quebra as ligações fracas e destrói a forma 3D da enzima, inativando-a permanentemente. É importante saber que a estrutura primária (sequência) não é rompida na desnaturação, apenas a forma espacial."
      },
      {
        tipo: "texto",
        corpo: "A análise crítica foca na inibição enzimática. Os inibidores são substâncias que reduzem a atividade. O inibidor competitivo se liga ao sítio ativo, competindo com o substrato; o efeito é revertido aumentando a concentração do substrato. O inibidor não competitivo liga-se a outro local (alostérico), mudando a forma da enzima; aumentar o substrato não resolve, pois o sítio ativo está deformado. Muitos medicamentos (como anti-inflamatórios) são inibidores enzimáticos (inibem a COX-1 e COX-2)."
      },
      {
        tipo: "bizu",
        corpo: "⚠️ BIZU DE PROVA: Desnaturação NÃO quebra ligações peptídicas (primária fica intacta), apenas a estrutura 3D. Inibidor competitivo = briga pelo sítio ativo. Inibidor não competitivo = muda a forma da enzima. Queratina (cabelo) é rica em pontes dissulfeto."
      },
      {
        tipo: "questao_fixar",
        estilo: "Banca",
        enunciado: "Um pesquisador deseja reverter o efeito de um inibidor enzimático adicionado a um meio, desde que ele seja competitivo. A estratégia correta é:",
        alternativas: [
          "A) Aumentar a temperatura do meio.",
          "B) Aumentar a concentração do substrato.",
          "C) Aumentar a concentração do inibidor.",
          "D) Remover o pH ótimo da reação."
        ],
        gabarito: "B",
        justificativa: "No inibidor competitivo, a disputa é pelo sítio ativo. Aumentando muito a quantidade de substrato, ele 'ganha a corrida' e se liga à enzima, revertendo a inibição."
      }
    ]
  },
  {
    id: "RES-BIO-05",
    disciplina: "Biologia",
    topico: "Bioquímica",
    subtopico: "Vitaminas",
    tituloModulo: "Vitaminas: Os Micronutrientes Essenciais",
    conteudo: [
      {
        tipo: "texto",
        corpo: "As vitaminas são compostos orgânicos essenciais que o corpo não produz (ou produz em quantidade insuficiente), devendo ser obtidos pela dieta. Não fornecem energia (calorias), atuando como coenzimas (complexo B) ou reguladores (A, D, E, K). Dividem-se em hidrossolúveis (complexo B e C) e lipossolúveis (A, D, E, K). A solubilidade define a absorção e excreção: as hidrossolúveis são excretadas na urina e exigem consumo diário; as lipossolúveis são armazenadas no fígado e no tecido adiposo, e o excesso pode ser tóxico."
      },
      {
        tipo: "texto",
        corpo: "As funções específicas são cobradas exaustivamente. Vitamina A (retinol): visão (rodopsina). Sua falta causa cegueira noturna. Vitamina D (calciferol): sintetizada pela pele com raios UV, promove absorção de cálcio. Falta = raquitismo. Vitamina E (tocoferol): potente antioxidante. Vitamina K: coagulação sanguínea (protrombina). Falta = hemorragias. Vitamina C (ácido ascórbico): síntese de colágeno e antioxidante. Falta = escorbuto (gengivas sangrando). B1 (tiamina): falta = beribéri (danos neurológicos). B12: falta = anemia perniciosa."
      },
      {
        tipo: "texto",
        corpo: "A análise crítica envolve a suplementação e a dieta. A vitamina D é um caso especial, pois é a única que nosso corpo sintetiza (com sol). Pessoas vegetarianas estritas (veganas) têm risco de deficiência de B12, pois essa vitamina é encontrada quase exclusivamente em produtos de origem animal. A vitamina C é termolábil e hidrossolúvel, sendo facilmente perdida no cozimento e na urina. Antioxidantes (C e E) doam elétrons para neutralizar radicais livres gerados pelo metabolismo, prevenindo o envelhecimento celular."
      },
      {
        tipo: "bizu",
        corpo: "⚠️ BIZU DE PROVA: A, D, E, K = Lipossolúveis (armazenam). C e B = Hidrossolúveis (excretam). Falta de A = cegueira noturna. Falta de C = escorbuto. Falta de D = raquitismo. Falta de K = hemorragia. Falta de B12 = anemia perniciosa."
      },
      {
        tipo: "questao_fixar",
        estilo: "Banca",
        enunciado: "Um paciente apresenta sangramentos frequentes e dificuldade na coagulação. A deficiência de qual vitamina e qual alimento poderia ser indicado, respectivamente?",
        alternativas: [
          "A) Vitamina C; frutas cítricas.",
          "B) Vitamina K; vegetais de folhas verdes (couve, espinafre).",
          "C) Vitamina A; cenoura e fígado.",
          "D) Vitamina D; peixes e leite."
        ],
        gabarito: "B",
        justificativa: "A vitamina K é essencial para a síntese de protrombina (coagulação). Sua deficiência causa hemorragias. É encontrada em vegetais de folhas verdes."
      }
    ]
  },
  {
    id: "RES-BIO-06",
    disciplina: "Biologia",
    topico: "Bioquímica",
    subtopico: "Metabolismo",
    tituloModulo: "Metabolismo Energético: Anabolismo, Catabolismo e Reservas",
    conteudo: [
      {
        tipo: "texto",
        corpo: "O metabolismo é o conjunto de reações químicas celulares. O Anabolismo (síntese) constrói moléculas complexas a partir de simples, consumindo energia (endergônico). Ex: fotossíntese e síntese de proteínas. O Catabolismo (degradação) quebra moléculas complexas em simples, liberando energia (exergônico). Ex: respiração celular e digestão. A molécula que captura a energia do catabolismo e a transporta para as reações anabólicas é o ATP."
      },
      {
        tipo: "texto",
        corpo: "O corpo humano utiliza as reservas na seguinte ordem: primeiro carboidratos (glicogênio hepático e muscular), depois lipídios (tecido adiposo) e, em último caso, proteínas (músculos). O cérebro depende de glicose. Em jejum prolongado, quando o glicogênio acaba, o corpo realiza a gliconeogênese: transforma aminoácidos e glicerol em glicose para sobreviver, causando perda de massa muscular. A quebra excessiva de proteínas gera amônia (tóxica), que o fígado converte em ureia para ser excretada na urina."
      },
      {
        tipo: "texto",
        corpo: "A análise crítica abrange as doenças metabólicas. A gota ocorre pelo acúmulo de ácido úrico (resíduo nitrogenado da quebra de purinas do DNA/RNA e de proteínas animais). A diabetes melito é a falha na insulina (hormônio anabólico que coloca a glicose para dentro da célula). Sem insulina, a glicose fica no sangue (hiperglicemia) e o corpo começa a queimar gordura e proteína (catabolismo excessivo), gerando perda de peso e corpos cetônicos. A respiração anaeróbia (fermentação) no músculo gera ácido lático e fadiga."
      },
      {
        tipo: "bizu",
        corpo: "⚠️ BIZU DE PROVA: Anabolismo = CONSTRÓI (gasta energia). Catabolismo = QUEBRA (libera energia). Emagrecer = catabolismo. Primeira reserva = glicogênio. Última reserva = proteína. Excesso de proteína (sem carboidrato) = queima de proteína, gera ureia e gota."
      },
      {
        tipo: "questao_fixar",
        estilo: "Banca",
        enunciado: "Durante uma atividade física intensa e prolongada, o corpo usa o glicogênio muscular. O processo de quebra do glicogênio para gerar energia é classificado como:",
        alternativas: [
          "A) Anabolismo, pois há síntese de ATP.",
          "B) Catabolismo, pois há degradação com liberação de energia.",
          "C) Anabolismo, pois consome oxigênio.",
          "D) Homeostase, pois mantém o músculo estável."
        ],
        gabarito: "B",
        justificativa: "A quebra (degradação) de uma molécula complexa (glicogênio) em moléculas mais simples para a produção de energia (ATP) é um processo de catabolismo (exergônico)."
      }
    ]
  }
];