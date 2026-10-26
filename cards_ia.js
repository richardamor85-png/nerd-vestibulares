/**
 * Nerd Vestibulares — Repositório Dedicado de Cards Gerados por I.A.
 */
let cardsGeradosIA = JSON.parse(localStorage.getItem('nerd_vestibulares_cards_ia_dedicado') || '[]');

function salvarCardsIAStorage() {
    localStorage.setItem('nerd_vestibulares_cards_ia_dedicado', JSON.stringify(cardsGeradosIA));
}

function adicionarCardsIA(novosCards) {
    novosCards.forEach(card => {
        cardsGeradosIA.push(card);
    });
    salvarCardsIAStorage();
}

function atualizarCardIA(idCard, novosDados) {
    let index = cardsGeradosIA.findIndex(c => c.id == idCard);
    if (index !== -1) {
        cardsGeradosIA[index] = { ...cardsGeradosIA[index], ...novosDados };
        salvarCardsIAStorage();
    }
}

function removerCardIA(idCard) {
    cardsGeradosIA = cardsGeradosIA.filter(c => c.id != idCard);
    salvarCardsIAStorage();
}