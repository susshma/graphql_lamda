// import express from 'express';
//
// var DealJacketRoutes = function (DealJacket) {
//     var DealJacketRouter = express.Router();
//
//     var DealJacketRouter = require("../controllers/DealJacketRouter")(Dealjacket);
//
//     DealJacketRouter.route('/dealjacekts')
//         .post(DealJacketRouter.post)
//         .get(DealJacketRouter.get);
//
//     // middleware for request with ids
//     DealJacketRouter.use('/dealjacekts/:id', function (req, res, next) {
//         DealJacket.findById(req.params.DealJacketid, function (err, DealJacket) {
//             if (err) {
//                 res.status(500).send(err);
//             } else if (DealJacket) {
//                 req.DealJacket = DealJacket;
//                 next();
//             } else {
//                 res.status(404).send("No records found");
//             }
//         });
//     });
//
//     DealJacketRouter.route('/dealjacekts/:id')
//         .get(function (req, res) {
//             res.json(req.DealJacket);
//         })
//         .put(function (req, res) {
//             DealJacket = req.DealJacket;
//             DealJacket.title = req.body.title;
//             DealJacket.rating = req.body.rating;
//             DealJacket.artist = req.body.artist;
//             DealJacket.release_date = req.body.release_date;
//             DealJacket.save();
//             res.json(DealJacket);
//         })
//         .patch(function (req, res) {
//             // avoid updating the unique id
//             if (req.body._id) {
//                 delete req.body._id;
//             }
//
//             for (var p in req.body) {
//                 req.DealJacket[p] = req.body[p]
//             }
//             req.DealJacket.save(function (err) {
//                 if (err) {
//                     res.status(500).send(err);
//                 } else {
//                     res.json(req.DealJacket);
//                 }
//             });
//         })
//         .delete(function (req, res) {
//             req.DealJacket.remove(function(err){
//                 if (err) {
//                     res.status(500).send(err);
//                 } else {
//                     res.status(204).send("Peace out - removed");
//                 }
//             });
//         });
//
//     return DealJacketRouter;
// };
//
// module.exports = routes;
