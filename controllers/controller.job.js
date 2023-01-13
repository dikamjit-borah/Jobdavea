const Job = require("../schemas/schema.job")

module.exports = {
    create: async function (req, res) {
        try {
            let job = new Job({
                title: 'new title',
                description: "aadad",
                created_by: "ddk@gmail.com"
            })

            job.save().then(doc => {
                console.log(doc)
            })
                .catch(err => {
                    console.error(err)
                })
        } catch (error) {
            console.log("sss", error);
        }
    }
}