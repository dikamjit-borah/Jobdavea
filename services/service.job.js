const Job = require("../schemas/schema.job")

module.exports = {
    createNewJob: async function (details) {
        try {
            return await new Job(details).save()
        } catch (error) {
            throw new Error(error.message)
        }
    },

    getAllJobs: async function (limit, skip, filter_by_skills, filter_by_experience) {
        try {
            let where = {

            }

            if (filter_by_skills && filter_by_skills.length)
                where["required_skills._id"] = {
                    "$in": filter_by_skills
                }

            if (filter_by_experience && filter_by_experience.length)
                where["required_experience"] = {
                    "$in": filter_by_experience
                }


            return await Job.find({
            }, {
                title: 1,
                description: 1,
                required_skills: 1,
                required_experience: 1
            }).where(where).limit(limit ? limit : 24).skip(skip ? skip : 0)
        } catch (error) {
            throw new Error(error.message)
        }
    },

    getJobDetails: async function (jobId) {
        try {
            let result;
            let jobExist = false;
            if (await Job.exists({ _id: jobId })) {
                jobExist = true
                result = await Job.findOne({
                    _id: jobId
                }, {
                    title: 1,
                    created_by: 1,
                    description: 1,
                    required_skills: 1,
                    required_experience: 1
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
                    title: 1,
                    description: 1,
                    required_skills: 1,
                    required_experience: 1,
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