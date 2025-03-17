const express = require("express");
const path = require("path");
const app = express();

// Config template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware to parse form data
app.use(express.urlencoded({extended: true}));  

// Config routes
const homeRouter = require("./routes/home");
app.use("/", homeRouter);
const authRouter = require("./routes/auth");
app.use("/auth", authRouter)


// 404 Error
app.use((req, res, next) => {
    res.status(404).render("404");
})

// Middle error handle
app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(error.status || 500).render("error", {
        error: error.message
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Sever is running on ${PORT}`);
})

