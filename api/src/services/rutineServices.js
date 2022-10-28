const { Rutines } = require('../db')
const { Exercises } = require('../db')

const crearRutine = async (
  name,
  nameExcersise,
  repetition,
  series,
  video,
  image,
  muscle
) => {
  const rutine = await Rutines.create({
    name,
  })
  const exercise = await Exercises.create({
    name:nameExcersise,
    repetition,
    series,
    video,
    image,
    muscle
  })
  await rutine.addExercise(exercise)
}
module.exports = { crearRutine }
