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

  {
    const filePath = './mock/invalidHeader.csv'
    const expected = new Error(error.FILE_FIELDS_ERROR)
    const result = File.csvToJSON(filePath)
    await assert.rejects(result, expected)
  }

  {
    const filePath = './mock/fiveItems.csv'
    const expected = new Error(error.FILE_LENGTH_ERROR)
    const result = File.csvToJSON(filePath)
    await assert.rejects(result, expected)
  }

  {
    const filePath = './mock/valid.csv'
    const expected = [
      { id: 1, name: 'caio', profession: 'backend', age: 19 },
      { id: 2, name: 'henrique', profession: 'backend', age: 20 },
      { id: 3, name: 'vieira', profession: 'fullstack', age: 21 }
    ]
    const result = await File.csvToJSON(filePath)
    await assert.deepEqual(result, expected)
  }

})()