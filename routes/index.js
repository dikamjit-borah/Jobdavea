const routeJob = require("../routes/route.job");

module.exports = (app) => {

   // app.get("/", (req, res) => res.send(stringConstants.SERVICE_STATUS_HTML));
    app.use("/*", (req, res, next) => {
        let fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
        console.log(fullUrl);
        next()
    });
    app.use("/job", routeJob);
};
