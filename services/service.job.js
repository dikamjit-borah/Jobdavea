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
    }
}