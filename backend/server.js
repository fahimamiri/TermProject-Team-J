
const path = require("path");
const express = require("express");
const createError = require("http-errors");
const requestTimeMiddleware = require("./middleware/request-time");

const rootRoutes = require("./routes/root");
const { execPath } = require("process");

const cookieparser = require("cookie-parser");

const morgan = require("morgan");
const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}));
app.use(cookieparser());
//Port env set up 
const PORT = process.env.PORT || 3000;


//livereload 
if (process.env.NODE_ENV === "development") {
    const livereload = require("livereload");
    const connectLiveReload = require("connect-livereload");

    const liveReloadServer = livereload.createServer();

    liveReloadServer.watch(path.join(__dirname, "backend", "static"));


    liveReloadServer.server.once("connection", () => {
      setTimeout(() => {

        liveReloadServer.refresh("/");
  }, 100); });

    app.use(connectLiveReload());
  }
//endliverelead

app.set("views", path.join(__dirname,  "views"));
app.set("view engine", "ejs");


//for static for file source  that ar in the bakcend 
//__dirname is direcorty name
app.use(express.static(path.join(__dirname,"static")));



//middleware called here
app.use(requestTimeMiddleware);
app.use("/", rootRoutes);
//http error  localHost:3000/eljlekj 
app.use((_request, _response, next)=>{
    next(createError(404));
});

//listen on port once its start the function will excute. 
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
});



//rounte much with any URI start with root/ 
// app.get("/", (_request, response) => {
//     response.send("Hello Team J ");
// });
/*if you have 3000/2 the below fucntion will exc*/
// app.get("/:id", (request, response) => {
//     response.send(" hi again Hello Team J ${id} ");
// });