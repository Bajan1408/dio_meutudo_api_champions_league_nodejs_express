import { createApp } from './app';

const server = createApp();

const port = process.env.PORT;

server.listen(port, () => {
    console.log('Servidor rodando na porta 3335..');
})


