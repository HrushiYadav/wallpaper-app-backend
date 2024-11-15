import express from "express";

const app = express();

app.use(express.json());

app.listen(process.env.PORT || 3000);


app.get("/", async (req , res) => {

    res.json({
        "message":" api working properly"
    })
});
