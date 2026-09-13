/**
 * Backend do "Café com IA" usando Google Sheets como banco de dados.
 *
 * Como publicar:
 * 1. Crie uma planilha nova no Google Sheets.
 * 2. Extensões > Apps Script.
 * 3. Apague o conteúdo padrão e cole este arquivo inteiro.
 * 4. Implantar > Nova implantação > tipo "Aplicativo da web".
 *    - Executar como: Eu
 *    - Quem pode acessar: Qualquer pessoa
 * 5. Copie a URL gerada e cole em API_URL no index.html.
 *
 * As abas "Respostas" e "Perguntas" são criadas automaticamente na primeira
 * chamada, não precisa preparar nada na planilha.
 */

function getOrCreateSheet_(name, headers) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
  }
  return sheet;
}

function doPost(e) {
  var data = JSON.parse(e.postData.contents);

  if (data.action === 'clear') {
    var respostasSheet = getOrCreateSheet_('Respostas', ['Timestamp', 'Cafe', 'Humor']);
    respostasSheet.clearContents();
    respostasSheet.appendRow(['Timestamp', 'Cafe', 'Humor']);

    var perguntasSheet = getOrCreateSheet_('Perguntas', ['Timestamp', 'Autor', 'Pergunta']);
    perguntasSheet.clearContents();
    perguntasSheet.appendRow(['Timestamp', 'Autor', 'Pergunta']);

    return jsonResponse_({ ok: true });
  }

  getOrCreateSheet_('Respostas', ['Timestamp', 'Cafe', 'Humor'])
    .appendRow([new Date(), data.coffee || '', data.mood || '']);

  if (data.question) {
    getOrCreateSheet_('Perguntas', ['Timestamp', 'Autor', 'Pergunta'])
      .appendRow([new Date(), data.author || 'Anônimo', data.question]);
  }

  return jsonResponse_({ ok: true });
}

function doGet(e) {
  var respostas = getOrCreateSheet_('Respostas', ['Timestamp', 'Cafe', 'Humor']).getDataRange().getValues();
  var perguntas = getOrCreateSheet_('Perguntas', ['Timestamp', 'Autor', 'Pergunta']).getDataRange().getValues();

  var votes = {
    coffee: { espresso: 0, coado: 0, cappuccino: 0, cha: 0 },
    mood: { power_user: 0, curious: 0, skeptic: 0 }
  };

  respostas.slice(1).forEach(function (row) {
    var coffee = row[1];
    var mood = row[2];
    if (votes.coffee.hasOwnProperty(coffee)) votes.coffee[coffee]++;
    if (votes.mood.hasOwnProperty(mood)) votes.mood[mood]++;
  });

  var questions = perguntas.slice(1)
    .filter(function (row) { return row[2]; })
    .reverse()
    .map(function (row) {
      return {
        time: Utilities.formatDate(new Date(row[0]), Session.getScriptTimeZone(), 'HH:mm'),
        author: row[1],
        text: row[2]
      };
    });

  return jsonResponse_({ votes: votes, questions: questions });
}

function jsonResponse_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
