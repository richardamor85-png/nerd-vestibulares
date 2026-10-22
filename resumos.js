const moduloResumoDirecionado = [
  // História Geral (aceita tanto resumoHistoriaGeral quanto resumoHistoria ou deckResumoHistoria)
  ...(typeof resumoHistoriaGeral !== 'undefined' ? resumoHistoriaGeral : 
     (typeof resumoHistoria !== 'undefined' ? resumoHistoria : 
     (typeof deckResumoHistoria !== 'undefined' ? deckResumoHistoria : []))),
  
  // Biologia (aceita deckResumoBiologia ou resumoBiologia)
  ...(typeof deckResumoBiologia !== 'undefined' ? deckResumoBiologia : 
     (typeof resumoBiologia !== 'undefined' ? resumoBiologia : [])),
  
  // Demais disciplinas
  ...(typeof resumoHistoriaBrasil !== 'undefined' ? resumoHistoriaBrasil : []),
  ...(typeof resumoGeografia !== 'undefined' ? resumoGeografia : []),
  ...(typeof resumoFilosofia !== 'undefined' ? resumoFilosofia : []),
  ...(typeof resumoSociologia !== 'undefined' ? resumoSociologia : []),
  ...(typeof resumoLiteratura !== 'undefined' ? resumoLiteratura : []),
  ...(typeof resumoQuimica !== 'undefined' ? resumoQuimica : []),
  ...(typeof resumoFisica !== 'undefined' ? resumoFisica : []),
  ...(typeof resumoMatematica !== 'undefined' ? resumoMatematica : []),
  ...(typeof resumoLinguagens !== 'undefined' ? resumoLinguagens : [])
];