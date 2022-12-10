import {connect, ConnectOptions} from 'mongoose';

export const dbConnect = () => {
    connect("mongodb+srv://Abhishek:abhi0023@cluster0.nxevonu.mongodb.net/FOODY", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions).then(
        () => console.log("connect successfully"),
        (error) => console.log(error)
    )
}