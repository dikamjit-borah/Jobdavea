const Job = require("../schemas/schema.job")
const serviceJob = require("../services/service.job")
const { sendSuccess, sendError } = require("../utils/response.handler")

module.exports = {
    create: async function (req, res) {
        try {
            const details = {
                title,
                description,
                created_by,
                required_skills
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
    },

    apply: async function (req, res) {
        try {
            const {
                jobId,
                candidateId,
            } = { ...req.body }

            const jobApplied = serviceJob.submitCandidateToJob(jobId, candidateId)
            if (jobApplied) return sendSuccess(res, 201, "Applied to job successfully!")
        } catch (error) {
            return sendError(res, error)
        }
    }
}