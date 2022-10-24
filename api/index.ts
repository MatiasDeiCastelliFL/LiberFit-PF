import server from './src/app'
// const { PORT } = process.env
const PORT = 3001

server.listen(PORT, () => {
  console.log('%s listening at ' + PORT) // eslint-disable-line no-console
})