const Job = require("../schemas/schema.job")

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
                return res.send(`Job created successfully ${doc}`)
            }).catch(err => {
                console.error("fucl", err)
                return res.send(`Error ${err}`)
            })
        } catch (error) {
            console.log("sss", error);
            return res.send(`lolo ${error}`)
        }
    }
}