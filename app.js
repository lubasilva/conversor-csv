let Reader = require('./Reader');
let Processor = require('./Processor');
let Table = require('./Table');
let HtmlParser = require('./HtmlParser')
let Writer = require('./Writer.js')
let PdfWriter = require('./PdfWriter')

let reader = new Reader();
let writer = new Writer();

async function main() {
    let data = await reader.Read('./users.csv')
    let processData = Processor.Process(data)

    let usuarios = new Table(processData)

    let html = await HtmlParser.Parse(usuarios)
    writer.Write(Date.now() + '.html', html)

    PdfWriter.WritePDF(Date.now() + '.PDF', html)
}

main()