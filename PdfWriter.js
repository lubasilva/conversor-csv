let pdf = require('html-pdf');

class PdfWriter {
    static WritePDF(filename, html) {
        pdf.create(html,{}).toFile(filename, (error) => {})
    }
}

module.exports = PdfWriter;