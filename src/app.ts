import express, { json } from 'express';
import router from './routes';
import cors from 'cors';

export function createApp() {
    const app = express();

    //incluído o endereço http://127.0.0.1:550 no corsOptions para permitir acessar a api via browser com o live server do VsCode
    const corsOptions = {
        origin: ['http://localhost:3335', 'http://127.0.0.1:5500'],
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE']
    }

    app.use(cors(corsOptions));

    app.use(json());

    app.use('/', router);

    app.use('/:id', router);

    return app;
}
