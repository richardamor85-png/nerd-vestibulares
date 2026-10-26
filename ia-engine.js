/**
 * Nerd Vestibulares — Motor de Inteligência Artificial OPENROUTER
 * Utiliza o modelo deepseek/deepseek-chat para respostas ultrarrápidas.
 */

function obterChaveOpenRouter() {
    let chave = localStorage.getItem('nerd_vestibulares_openrouter_key') || '';
    return chave.replace(/[^\x20-\x7E]/g, '').trim();
}

function salvarChaveOpenRouter(chave) {
    let limpa = chave ? chave.replace(/[^\x20-\x7E]/g, '').trim() : '';
    localStorage.setItem('nerd_vestibulares_openrouter_key', limpa);
}

// 1. EXPLICAÇÃO CURTA E DIRETA (IA)
async function gerarExplicacaoCurtaIA(contextoQuestao) {
    const apiKey = obterChaveOpenRouter();
    if (!apiKey) throw new Error("Chave de API do OpenRouter não encontrada. Cole a sua chave nas Configurações Gerais.");

    const endpoint = "https://openrouter.ai/api/v1/chat/completions";

    const bodyData = {
        model: "deepseek/deepseek-chat",
        messages: [
            {
                role: "system",
                content: "Você é um Professor especialista para vestibulares de elite (ENEM/Vestibulares). Forneça explicações CURTAS, DIRETAS e OBJETIVAS em até 2 parágrafos simples."
            },
            {
                role: "user",
                content: `Analise e explique esta questão de vestibular: ${contextoQuestao}`
            }
        ],
        max_tokens: 300,
        temperature: 0.2
    };

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
            'HTTP-Referer': 'https://nerdvestibulares.app',
            'X-Title': 'Nerd Vestibulares'
        },
        body: JSON.stringify(bodyData)
    });

    if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error?.message || "Erro na API do OpenRouter.");
    }

    const data = await response.json();
    return data.choices[0].message.content;
}

// 2. CONVERSAR COM O TUTOR IA (Chat Rápido)
async function consultarTutorIA(contextoQuestao, duvidaAluno) {
    const apiKey = obterChaveOpenRouter();
    if (!apiKey) throw new Error("Chave de API do OpenRouter não encontrada nas Configurações.");

    const endpoint = "https://openrouter.ai/api/v1/chat/completions";

    const bodyData = {
        model: "deepseek/deepseek-chat",
        messages: [
            {
                role: "system",
                content: "Você é um Tutor especialista em vestibulares. Responda de forma rápida, didática e direta em até 2 parágrafos."
            },
            {
                role: "user",
                content: `Questão: "${contextoQuestao}"\nDúvida do aluno: "${duvidaAluno}"`
            }
        ],
        max_tokens: 350,
        temperature: 0.2
    };

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
            'HTTP-Referer': 'https://nerdvestibulares.app',
            'X-Title': 'Nerd Vestibulares'
        },
        body: JSON.stringify(bodyData)
    });

    if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error?.message || "Erro na API do OpenRouter.");
    }

    const data = await response.json();
    return data.choices[0].message.content;
}

// 3. GERADOR AUTOMÁTICO DE CARDS COM IA
async function gerarCardsComIA(textoFonte, formato) {
    const apiKey = obterChaveOpenRouter();
    if (!apiKey) throw new Error("Chave de API do OpenRouter não encontrada nas Configurações.");

    const endpoint = "https://openrouter.ai/api/v1/chat/completions";

    const promptJSON = `
        Analise o texto abaixo e crie 3 questões de vestibular no formato "${formato}".
        Responda EXCLUSIVAMENTE com um array JSON válido sem marcações extras.

        Estrutura se "cebrape":
        [{"id": ${Date.now()}, "deck": "História", "topicoPrincipal": "Geral", "subgrupo": "Assunto", "topico": "Tópico", "estilo": "cebrape", "q": "Pergunta", "gabarito": "CERTO", "explicacao": "Fundamentação"}]

        Estrutura se "multipla":
        [{"id": ${Date.now()}, "deck": "História", "topicoPrincipal": "Geral", "subgrupo": "Assunto", "topico": "Tópico", "estilo": "multipla", "q": "Pergunta", "a": "Correta", "erradas": ["E1","E2","E3"], "explicacao": "Fundamentação"}]

        Texto: "${textoFonte}"
    `;

    const bodyData = {
        model: "deepseek/deepseek-chat",
        messages: [{ role: "user", content: promptJSON }],
        max_tokens: 700,
        temperature: 0.2
    };

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
            'HTTP-Referer': 'https://nerdvestibulares.app',
            'X-Title': 'Nerd Vestibulares'
        },
        body: JSON.stringify(bodyData)
    });

    if (!response.ok) throw new Error("Falha ao gerar cards com o OpenRouter.");

    const data = await response.json();
    let rawText = data.choices[0].message.content;
    rawText = rawText.replace(/```json/gi, '').replace(/```/g, '').trim();

    return JSON.parse(rawText);
}