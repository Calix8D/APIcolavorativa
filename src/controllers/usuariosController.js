const usuariosModel = require("../models/usuariosModel");
const { post } = require("../routes/usuariosRouter");

module.exports = {
    getusuarios:  ((req, res) => (
        usuariosModel.getusuarios((err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            } 
            res.status(200).json({data:result});
        },
    ))),

    getusuariosById: ((req, res) => {
        let { id } = req.params;

        usuarios.getusuariosById(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return
            } 
            if (result, length === 0) {
                res.status(404).json({ message: "Registro no encontrado" });
                return
            }
            res.status(200).json({data:[result]})
        })
    }),
  
    postusuarios: (req, res) => {
        let nombre = req.body.nombre;
        let apellido = req.body.apellido;
        let email = req.body.email;
        let sexo = req.body.sexo;

usuariosModel.postusuarios(nombre, apellido, email, sexo, (err, result) => {
    if (err) {
        res.status(500).json({ error: err.message });
    } else {
        res.status(200).json({ message: 'Usuario insertado correctamente', result });
}})
},
updateUsuario: (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, email, sexo } = req.body;

    usuariosModel.updateUsuario(id, nombre, apellido, email, sexo, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ message: 'Usuario actualizado correctamente', result });
        }
    });
},

deleteUsuario: (req, res) => {
    const { id } = req.params;

    usuariosModel.deleteUsuario(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ message: 'Usuario eliminado correctamente' });
        }
    });
}

}
