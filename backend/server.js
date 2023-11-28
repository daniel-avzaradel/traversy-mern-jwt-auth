import express from "express";
import colors from 'colors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
