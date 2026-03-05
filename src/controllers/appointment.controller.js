const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.createAppointment = async (req, res) => {
  try {
    const { doctorId, date } = req.body

    const appointment = await prisma.appointment.create({
      data: {
        date: new Date(date),
        patientId: req.user.id,
        doctorId
      }
    })

    res.status(201).json(appointment)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.getAppointments = async (req, res) => {
  const appointments = await prisma.appointment.findMany({
    where: {
      OR: [
        { patientId: req.user.id },
        { doctorId: req.user.id }
      ]
    },
    include: {
      patient: true,
      doctor: true
    }
  })

  res.json(appointments)
}