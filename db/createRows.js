const fs = require('fs');

let data = "INSERT INTO benchmark (id, title, body, create_by, created_at, updated_at) VALUES\n";

for(let i = 1; i <= 100; i++) {
    let title = `Title ${i}`;
    let body = `Body ${i}`;
    let createdBy = `User${i}`;
    let createdAt = "NOW()";
    let updatedAt = "NOW()";

    data += `(${i}, '${title}', '${body}', '${createdBy}', ${createdAt}, ${updatedAt})`;

    if(i !== 100) {
        data += ",\n";
    } else {
        data += ";\n";
    }
}

fs.writeFile('./db/output.txt', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

