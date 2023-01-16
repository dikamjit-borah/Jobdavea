const Job = require("../schemas/schema.job")

module.exports = {
    createNewJob: async function (details) {
        try {
            return await new Job(details).save()
        } catch (error) {
            throw new Error(error.message)
        }
    },

    getAllJobs: async function (limit, skip, filters) {
        try {
            return await Job.find({}).limit(limit ? limit : 24).skip(skip ? skip : 0)
        } catch (error) {
            throw new Error(error.message)
        }
    },

    submitCandidateToJob: async function (jobId, submission) {
        try {
            let result;
            let jobExist = false;
            if (await Job.exists({ _id: jobId })) {
                jobExist = true
                result = await Job.findOneAndUpdate({
                    _id: jobId
                }, {
                    "$push": {
                        submissions: submission
                    }
                }, {
                    new: true
                })
            }
            return {
                jobExist,
                result
            }
        } catch (error) {
            throw new Error(error.message)
        }
    },

    getSubmissionsForJob: async function (jobId) {
        try {
            let result;
            let jobExist = false;
            if (await Job.exists({ _id: jobId })) {
                jobExist = true
                result = await Job.find({
                    _id: jobId
                }, {
                    submissions: 1,
                })
            }
            return {
                jobExist,
                result
            }
        } catch (error) {
            throw new Error(error.message)
        }
    }
}