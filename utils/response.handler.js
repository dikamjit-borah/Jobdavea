let response = {
    status: 500,
    message: "Something went wrong!",
};


async function sendError(res, err, msg, status) {
    console.log(err);
    return sendSuccess(res, status ? status : null, msg ? msg : null, null, err && err.message ? err.message : null)

}

async function sendSuccess(res, status, msg, data, errs) {
    if (status) response.status = status;
    if (msg) response.message = msg;
    if (data) response["data"] = data;
    if (errs) response["errors"] = errs;


    return res.status(status ? status : 500).send(response);
}


module.exports = {
    sendError, sendSuccess
}