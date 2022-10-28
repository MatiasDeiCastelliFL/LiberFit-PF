import { Exercises } from '../db'

const crearEmpleado = async (
    name,
    repetition,
    series,
    video,
    image,
    muscle
    ) => {
  const ejercicio = await Exercises.create({
    name,
    repetition,
    series,
    video,
    image,
    muscle
      })
  console.log(ejercicio)
}

export default crearExercise

