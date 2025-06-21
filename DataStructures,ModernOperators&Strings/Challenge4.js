document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;

    const rows = text.split('\n');
    console.log(rows);

    for (const [i, row] of rows.entries()) {
        // console.log(row);
        const [first, second] = row.toLowerCase().trim().split('_');

        const output = `${first}${second[0].toUpperCase() + second.slice(1)}`;
        // console.log(first, second);
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }

});