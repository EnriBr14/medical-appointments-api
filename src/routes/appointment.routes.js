const router = require('express').Router()
const appointmentController = require('../controllers/appointment.controller')
const { verifyToken } = require('../middlewares/auth.middleware')

router.post('/', verifyToken, appointmentController.createAppointment)
router.get('/', verifyToken, appointmentController.getAppointments)

module.exports = router