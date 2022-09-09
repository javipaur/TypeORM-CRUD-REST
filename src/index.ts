import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app =express();

app.listen(3000);
app.use(morgan('dev'));
app.use(cors());
console.log('server is listening on port',3000)

