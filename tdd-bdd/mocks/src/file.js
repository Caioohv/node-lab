const { readFile } = require('fs/promises')
const { error } = require('./constants')
const DEFAULT_OPTION = {
  maxLines: 3,
  fields: ['id', 'name', 'profession', 'age']
}

class File {
  static async csvToJSON(filePath){
    const content = await readFile(filePath, 'utf8')
    
    const validation = this.isValid(content)

    if(!validation.valid) throw new Error(validation.error)

    return this.parseCsvToJSON(content)
  }


  static isValid(csvString, options = DEFAULT_OPTION) {
    // headers -> primeira linha; ...content -> todo o resto
    const [headers, ...content] = csvString.split(/\r?\n/)
    const isHeaderValid = headers === options.fields.join(',')

    if(!isHeaderValid) return {
      error: error.FILE_FIELDS_ERROR, 
      valid: false
    }

    if(
      !content.length || 
      content.length > options.maxLines
      ) 
        return {
          error: error.FILE_LENGTH_ERROR, 
          valid: false
    }

    if(content.length > 4) return {
      error: error.FILE_LENGTH_ERROR, 
      valid: false
    }

    return {valid: true}
  }

  static parseCsvToJSON(csvString){
    const lines = csvString.split(/\r?\n/)

    const firstLine = lines.shift()
    const header = firstLine.split(',')

    const users = lines.map(line => {
      const columns = line.split(',')
      const user = {}
      for(let index in columns){
        user[header[index]] = columns[index].trim()
      }
      return user
    })

    return users
  }

}

module.exports = File
