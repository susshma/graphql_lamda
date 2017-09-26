var DealJacketRouter = function (DealJacket) {
    var post = function (req, res) {
        var DealJacket = new DealJacket(req.body);

        if (!req.body.applicant) {
            res.status(400);
            res.send("Applicant is required");
        } else {
            DealJacket.save();
            res.status(201)
            res.send(DealJacket);
        }
    }

    var get = function (req, res) {
        var query = req.query;
        DealJacket.find(query, function (err, DealJackets) {
            if (err)
                console.log('There is an error')
            else
                res.json(DealJackets)
        });
    }

    return {
        post: post,
        get: get
    }
}

export default DealJacketRouter;
