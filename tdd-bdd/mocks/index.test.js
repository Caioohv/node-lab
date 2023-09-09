const File = require('./src/file')
const { error }  = require('./src/constants')
const assert = require('assert')

// IFEE
;(async () => {

  // Variáveis criadas nesse bloco só existem durante sua execução
  {
    const filePath = './mock/emptyFile.csv'
    const expected = new Error(error.FILE_LENGTH_ERROR)
    const result = File.csvToJSON(filePath)
    await assert.rejects(result, expected)
  }
})()