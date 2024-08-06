const express = require('express');
const cors = require('cors');
const app = express();
const tareaRouter = require('./router/tareaRouter');
const port = 3000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Aplicación corriendo en el puerto ${port}`)
})

app.use('/api/tareas', tareaRouter);

app.get('/', (req, res) => {
    res.send('Servidor CRUD 200 OK')
});