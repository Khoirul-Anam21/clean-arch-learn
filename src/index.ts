import bodyParser from "body-parser";
import express from "express";
import productRouter from "./routes";

const app = express();
app.use(bodyParser.json());

app.use('', productRouter);

app.listen(8000, ()=>{
    console.log('Server berjalan pada http://localhost:8000');
});