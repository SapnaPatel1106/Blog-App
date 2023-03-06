// let server = require("../index");
// let chaiHttp = require("chai-http");
// var chai = require("chai");
// const utils = require("../models/commentModelSchema");
// let routes = require("../routes/commonRoutes")
// chai.should();
// chai.use(chaiHttp);

// //add comment test cases ...............................................................
// describe("POST/api/comment", () => {
//     it("This test case is for adding a comment :", (done) => {
//         const data = {
//            blogComment : "Good morning friends",
//         };
//         chai
//             .request(server)
//             .post("/comment/addcomment/63ecd739dd58027d44683252/63ef5fa12eb9bed53b04c14f")
//             .send(data)
//             .end((err, res) => {
//                 res.should.have.status(201);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq("success");
//                 res.body.should.have.property("message").eq("Comment added successfully");
//                 done();
//             })
//     })
// })
