import server from './src/app'
import  db from './src/db'
// const { PORT } = process.env
const PORT = 3001

// Syncing all the models at once.
db.conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log('%s listening at ' + PORT) // eslint-disable-line no-console
  })
})
