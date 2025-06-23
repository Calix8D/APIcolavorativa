const db = require("../config/db")  

class usuarios{
    getusuarios(callback){
        const sql = "SELECT * FROM usuarios"
        db.query(sql, callback)
    }
    getusuariosById(id, callback){
        const sql = "SELECT * FROM usuarios WHERE id = ?"
        db.query(sql, [id], callback)
 }

postusuarios(nombre, apellido, email, sexo, callback) {
    const sql = 'INSERT INTO usuarios (nombre, apellido, email, sexo) VALUES (?, ?, ?, ?)';
    db.query(sql, [nombre, apellido, email, sexo], callback);
}
 updateUsuario(id, nombre, apellido, email, sexo, callback) {
    const sql = 'UPDATE usuarios SET nombre = ?, apellido = ?, email = ?, sexo = ? WHERE id = ?';
    db.query(sql, [nombre, apellido, email, sexo, id], callback);
}

deleteUsuario(id, callback) {
    const sql = 'DELETE FROM usuarios WHERE id = ?';
    db.query(sql, [id], callback);
}

}


module.exports = new usuarios()
