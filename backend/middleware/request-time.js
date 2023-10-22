const requestTime = (request, response, next)=>{
    console.log(
        `Request Received at ${Date.now()}: ${request.method}`
        );
        next();
};

module.exports = requestTime;
