const Job = require("../schemas/schema.job")
const serviceJob = require("../services/service.job")
const { sendSuccess, sendError } = require("../utils/response.handler")

module.exports = {
    create: async function (req, res) {
        try {
            const details = {
                title,
                description,
                created_by
            } = { ...req.body }

            const jobCreated = await serviceJob.createNewJob(details)
            if (jobCreated) return sendSuccess(res, 201, "Job created successfully", { details: jobCreated })

        } catch (error) {
            return sendError(res, error)
        }
    },

    all: async function (req, res) {
        try {
            const {
                limit, skip
            } = { ...req.query }
            let filters

            const jobs = await serviceJob.getAllJobs(limit, skip, filters)
            if (jobs.length) return sendSuccess(res, 200, "Jobs fetched successfully!", { jobs })
        } catch (error) {
            return sendError(res, error)
        }
    }
}