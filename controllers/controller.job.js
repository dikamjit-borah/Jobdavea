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
            let filter_by_skills = []
            let filter_by_experience = []

            for (let [key, value] of Object.entries(req.query)) {
                if (key.indexOf("filter_by_skills") != -1) {
                    filter_by_skills.push(value.split(","));
                }
                if (key.indexOf("filter_by_experience") != -1) {
                    filter_by_experience.push(value.split(","));
                }
            }

            filter_by_skills[0] = filter_by_skills[0].map((fbs) => { if (Number.isInteger(parseInt(fbs))) return parseInt(fbs) })
            filter_by_experience[0] = filter_by_experience[0].map((fbe) => { if (Number.isInteger(parseInt(fbe))) return parseInt(fbe) })

            const jobs = await serviceJob.getAllJobs(limit, skip, filter_by_skills, filter_by_experience[0])
            if (jobs.length) return sendSuccess(res, 200, "Jobs fetched successfully!", { jobs })
            return sendSuccess(res, 404, "Jobs not found!")
        } catch (error) {
            return sendError(res, error)
        }
    },

    apply: async function (req, res) {
        try {
            const jobId = req.params.id
            const {
                submission,
            } = { ...req.body }

            if (!jobId) return sendError(res, null, "Job id is not valid!")
            const jobApplied = await serviceJob.submitCandidateToJob(jobId, submission)
            if (!jobApplied.jobExist) return sendError(res, null, "Job id does not exist!", 400)
            if (jobApplied.result) return sendSuccess(res, 201, "Applied to job successfully!") //return {applicationId: _id}
        } catch (error) {
            return sendError(res, error)
        }
    },

    submissions: async function (req, res) {
        try {
            const jobId = req.params.id

            if (!jobId) return sendError(res, null, "Job id is not valid!")
            const submissions = await serviceJob.getSubmissionsForJob(jobId)
            if (!submissions.jobExist) return sendError(res, null, "Job id does not exist!", 400)
            if (submissions.result[0] && submissions.result[0].submissions) return sendSuccess(res, 200, "Submissions fetched successfully!", { submissions: submissions.result[0].submissions })
            return sendSuccess(res, 404, "Submissions not found for the given job id!")
        } catch (error) {
            return sendError(res, error)
        }
    }
}