const {
    Router
} = require('express');
const router = Router();

const {
    agregarUsuario,
    verUsuarios,
    verUsuario,
    editarUsuario,
    eliminarUsuario,
    entrar,
    verificarLogged,
    logout,
    isLogged,
    cargarDatos
} = require('../controllers/users.controller');

router.post('/usuarios/crear_cuenta', agregarUsuario);
router.get('/usuarios', verUsuarios);
router.get('/usuarios/ver_usuario/:id', verUsuario);
router.put('/usuarios/editar_usuario/:id', editarUsuario);
router.delete('/usuarios/eliminar_usuario/:id', eliminarUsuario);
router.post('/usuarios/entrar', entrar);
router.get('/usuarios/logout', logout);
router.get('/usuarios/is_logged', isLogged);
router.get('/usuarios/cargar_datos/:email', cargarDatos);

router.get('/dashboard', verificarLogged);
router.get('/opciones', verificarLogged);
router.get('/dashboard/alarma', verificarLogged);
router.get('/dashboard/alarma/configuracion', verificarLogged);
router.get('/dashboard/cerradura', verificarLogged);
router.get('/dashboard/cerradura/configuracion', verificarLogged);
router.get('/dashboard/alimentador', verificarLogged);
router.get('/dashboard/alimentador/configuracion', verificarLogged);
router.get('/cuenta', verificarLogged);

module.exports = router;