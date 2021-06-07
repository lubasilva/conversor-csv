class Processor {
    static Process(data) {
        let rowsSplit = data.split('\r\n');
        let rows = [];

        rowsSplit.forEach(row => {
            let arr = row.split(',')
            rows.push(arr)
        })
        return rows;
    }
}

module.exports = Processor;