import express from "express";
import cors from "cors";
import foodRouter from './routers/food.router';
import userRouter from './routers/user.router';
import { dbConnect } from './configs/database.config';
import orderRouter from './routers/order.router';
import { portfolioModel } from './models/Portfolio.model';


dbConnect();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);


// Backend for portfolio Web

app.post('/sign',async(req,res)=>{
    console.log(req.body)
    if(req.body==null){
        console.log("No data found")
        res.status(400).send("No data found")
    }else{
        const {firstName,lastName,email,message,phone} = req.body;

        if((firstName || lastName || email || message || phone) == null){
            console.log("please Provide Data")
            res.send('please Provide Data')
            
        }
        else{
            
            console.log("db error")
            const rese = await portfolioModel.create({firstName,lastName,email,message,phone});
            res.send(rese);
        } 
    }
})


const port = 4000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})
 
