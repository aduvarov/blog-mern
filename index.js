import express from 'express';
import mongoose from 'mongoose';

import { registerValidation } from './validations/auth.js';
import checkAuth from './utils/checkAuth.js';
import * as UserController from './controllers/UserController.js';

mongoose.set('strictQuery', false);

mongoose
    .connect('mongodb://localhost:27017/blog-mern')
    .then(() => console.log('DB ok'))
    .catch(() => console.log('DB error'));

const app = express();

app.use(express.json());

app.post('/auth/login/', UserController.login);
app.post('/auth/register', registerValidation, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.listen(4444, err => {
    if (err) {
        return console.error(err);
    }
    console.log('Server OK');
});
