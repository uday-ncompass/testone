const express = require("express")
require("dotenv").config()
const cors = require("cors")
const compression = require('compression')
const { connection, con } = require("./utilities/db")
const { router } = require("./routes/student-routes")
const { errorHandler } = require("./middlewares/errorMiddleware")
const app = express()
// const multer = require('multer') // v1.0.5
// const upload = multer() // for parsing multipart/form-data

// app.use(express.urlencoded({ extended: false }));
app.use(express.json())



// app.post('/profile', upload.fields(), (req, res, next) => {
//   console.log(req.body)
//   res.json(req.body)
// })



const PORT = 5000

app.use(cors({origin:'*'}))

// app.use(compression())

app.use('/api/student',router)

app.use(errorHandler)

app.listen(PORT , () => console.log(`server connected at port ${PORT}`))
