//milddlewares implemented here 
//display the time when a request is made 

const requestTime = (request, response, next)=>{
    console.log(
        `Request Received at ${Date.now()}: ${request.method}`
        );
        next();
};

module.exports = requestTime;
