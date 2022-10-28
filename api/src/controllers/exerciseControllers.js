const crearExercise = require("../services/exerciseServices")
const postExercise = async (req, res) => {
    try {
        const { name,
            repetition,
            series,
            video,
            image,
            muscle
        } = req.body

        const datoExercise = await crearExercise(
            name,
            repetition,
            series,
            video,
            image,
            muscle
            )
            res.status(200).json(datoExercise)
        } catch (error) {
            console.log(error)
    }
}

module.exports = postExercise
