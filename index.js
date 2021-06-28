const express = require('express');
const userRouter = require('./routes/routs');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use('/api',userRouter);


app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));