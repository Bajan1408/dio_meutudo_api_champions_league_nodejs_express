import express, { json } from 'express';
import router from './routes';

export function createApp() {
    const app = express();

    app.use(json());

    app.use('/', router);

    return app;
}
