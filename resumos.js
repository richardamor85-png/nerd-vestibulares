const moduloResumoDirecionado = [
  ...(typeof deckResumoHistoria !== 'undefined' ? deckResumoHistoria : []),
  ...(typeof deckResumoBiologia !== 'undefined' ? deckResumoBiologia : [])
];