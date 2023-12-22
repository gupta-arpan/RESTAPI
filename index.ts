import express, {Request, Response} from 'express';
import { router } from './src/router';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", (req: Request,res: Response) => {
    res.send("Hehe");
})

app.use("/api/v1/students", router);

app.listen(port, () => {
    console.log(`Server started running on port: ${port}`);
})
