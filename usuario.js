const connection = require("./conexion");

const obtenerUsuario = async (req, res) => {
    if (!req.session.usuario) {
        res.status(401).send('No autorizado')
        return
    }
    try {
        const [results, fields] = await connection.query(
            "SELECT * FROM `usuario` ",
        );
        res.status(200).json(results)
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    } catch (err) {
        console.log(err);
        res.status(500).send("Error en el servidor")
    }
}


const eliminarUsuario = async (req, res) => {
    if (!req.session.usuario) {
        res.status(401).send('No autorizado')
        return
    }
    const datos = req.query;

    try {
        const [results, fields] = await connection.query(
            "DELETE FROM usuario WHERE `usuario`.`id` = ?",
            [datos.id]
        );
        if (results.affectedRows > 0) {
            res.status(200).send('usuario eliminado')
        } else {
            res.status(401).send('No se puede eliminar')
        }
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    } catch (err) {
        console.log(err);
        res.status(500).send("Error en el servidor")
    }
}

module.exports = {obtenerUsuario , eliminarUsuario }