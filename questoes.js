const masterDeck = [
  ...typeof deckHistoriaGeral !== 'undefined' ? deckHistoriaGeral : (typeof deckHistoria !== 'undefined' ? deckHistoria : []),
  ...typeof deckBiologia !== 'undefined' ? deckBiologia : [],
  ...typeof deckHistoriaBrasil !== 'undefined' ? deckHistoriaBrasil : [],
  ...typeof deckGeografia !== 'undefined' ? deckGeografia : [],
  ...typeof deckFilosofia !== 'undefined' ? deckFilosofia : [],
  ...typeof deckSociologia !== 'undefined' ? deckSociologia : [],
  ...typeof deckLiteratura !== 'undefined' ? deckLiteratura : [],
  ...typeof deckQuimica !== 'undefined' ? deckQuimica : [],
  ...typeof deckFisica !== 'undefined' ? deckFisica : [],
  ...typeof deckMatematica !== 'undefined' ? deckMatematica : [],
  ...typeof deckLinguagens !== 'undefined' ? deckLinguagens : []
];