const Job = require("../schemas/schema.job")
const { sendSuccess, sendError } = require("../utils/response.handler")

module.exports = {
    create: async function (req, res) {
        try {
            const jobDetails = {
                title,
                description,
                created_by
            } = { ...req.body }

            let job = new Job(
                jobDetails
            )

            job.save().then(doc => {
                return sendSuccess(res, 201, "Job created successfully!", { jobData: doc })
            }).catch(err => {
                return sendError(res, err)
            })
        } catch (error) {
            return sendError(res, error)
        }
    },

    all: async function (req, res) {
        try {
            const {
                limit, skip
            } = { ...req.query }
            const jobs = await Job.find({}).limit(limit ? limit : 24).skip(skip ? skip : 0)
            return sendSuccess(res, 200, "Jobs fetched successfully!", { jobs })
        } catch (error) {
            return sendError(res, error)
        }
    }
}