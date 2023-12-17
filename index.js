import express from 'express';
import { router } from './src/student/router.js';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", (req,res) => {
    res.send("Hehe");
})

app.use("/api/v1/students", router);

app.listen(port, () => {
    console.log(`Server started running on port: ${port}`);
})
