import express from 'express';
import bodyParser, { json } from 'body-parser';
import logging from './config/logging';
import config from './config/config';
import mongoose from 'mongoose';
import { BookRoutes } from './routes/bookRoute';

const NAMESPACE="Server";

class App{

    public app : express.Application;
    private book_routes: BookRoutes = new BookRoutes();

    constructor(){
        this.app = express();
        this.config();
        this.book_routes.route(this.app);
    }

    private config():void{
        this.app.use((req, res, next) => {
            logging.info(NAMESPACE, `METHOD - [${req.method}, URL - [${req.url}], IP [${req.socket.remoteAddress}]`);
    
            res.on('finish', () => {
                logging.info(
                    NAMESPACE,
                    `METHOD - [${req.method}, URL - [${req.url}], IP [${req.socket.remoteAddress}], 
                    STATUS - [${res.statusCode}]`
                );
            });
            next();
        });
    
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }
    
};

let server = new App();
server.app.listen(config.server.port, () => logging.info(NAMESPACE, `Server running on ${config.server.hostname}: ${config.server.port}`));