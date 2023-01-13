let response = {
    statusCode: 500,
    message: "Something went wrong!",
};


async function sendError(res, err) {
    console.log(err);
    return sendSuccess(res, null, null, null, err && err.message ? err.message : null)

}

async function sendSuccess(res, statusCode, message, data, errs) {
    if (statusCode) response.statusCode = statusCode;
    if (message) response.message = message;
    if (data) response["data"] = data;
    if (errs) response["errors"] = errs;


    return res.status(statusCode ? statusCode : 500).send(response);
}


module.exports = {
    sendError, sendSuccess
}