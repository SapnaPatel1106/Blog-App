// let server=require('../index');
// let chaiHttp=require('chai-http');
// var chai = require('chai');
// const utils=require("../models/blogModelSchema")
// let routes=require("../routes/blogRoutes")
// chai.should();
// chai.use(chaiHttp);


// //Blog Like test case
// describe("PATCH/api/blog",()=>{
//     it("It should gives add likes in our project:",(done)=>{
//         const data={
//             blogLikes:"true"
//         };
//         chai    
//             .request(server)
//             .patch("/blog/bloglikes/63ef6b1fff84b690405270f5")
//             .send(data)
//             .end((err,res)=>{
//                 res.should.have.status(200);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq("success")
//                 res.body.should.have.property("message").eq("You liked the blog")
//                 done();
//             })
//     })
// })

// describe("PATCH/api/blog", () => {
//     it("It  should gives  unlikes in our project :", (done) => {
//         const data = {
//             blogLikes: "false"
//         };
//         chai
//             .request(server)
//             .patch("/blog/bloglikes/63ef6b1fff84b690405270f5")
//             .send(data)
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq("success");
//                 res.body.should.have.property("message").eq("You unliked the blog");
//                 done();
//             })
//     })
// })

// //add blog test cases ...............................................................
// describe("POST/api/blog", () => {
//     it("This test case is for adding a blog :", (done) => {
//         const data = {
//             blogTitle: "My Diary",
//             blogDescription: "here is the story of a enginner hiii",
//             blogLikes: "5"
//         };
//         chai
//             .request(server)
//             .post("/blog/createblog/63ecd739dd58027d44683252")
//             // .set("Content-Type","application/x-www-form-urlencoded")
//             // .field(data)
//             // .attach("blogImage","/Users/Dell/OneDrive/Desktop/3image.jpg", "3image.jpg")
//             .send(data)
//             .end((err, res) => {
//                 res.should.have.status(201);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq("success");
//                 res.body.should.have.property("message").eq("Blog post successfully");
//                 done();
//             })
//     })
// })

// //blog list test case..........................
// describe("GET/api/blog", () => {
//     it("This test case is showing blog list :", (done) => {
//         const data = {

//         };
//         chai
//             .request(server)
//             .get("/blog/blogList")
//             .send(data)
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq("success");
//                 res.body.should.have.property("message").eq("Blog List are : ");
//                 done();
//             })
//     })
// })

// //search blog api................................................................
// describe("GET/api/blog", () => {
//     it("This test case is for searching a blog by title name:", (done) => {
//         const data = {
//             blogTitle: "m"
//         };
//         chai
//             .request(server)
//             .get("/blog/searching")
//             .send(data)
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq("success");
//                 res.body.should.have.property("message").eq("Here is the blog by title");
//                 done();
//             })
//     })
// })

// //editing blog test cases....................................................................
// describe("PATCH/api/blog", () => {
//     it("This test case is for editing a blog:", (done) => {
//         const data = {

//             blogTitle: "About Blog Application 1",
//             blogLikes: "4"
//         };
//         chai
//             .request(server)
//             .patch("/blog/edit/63ef5fa12eb9bed53b04c14f")
//             .send(data)
//             .end((err, res) => {
//                 res.should.have.status(201);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq("success");
//                 res.body.should.have.property("message").eq("Thanku for your blog.Your blog edited successfully");
//                 done();
//             })
//     })
// })

// //delete blog test cases..........................................................................
// describe("DELETE/api/blog", () => {
//     it("This test case is for deleting a blog:", (done) => {
//         const data = {

//         };
//         chai
//             .request(server)
//             .delete("/blog/delete/63ef60064f9c6fc62b198e58")
//             .send(data)
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq("success");
//                 res.body.should.have.property("message").eq("Your blog successfully deleted");
//                 done();
//             })
//     })
// })

// //My blog api test cases..............................................................................
// describe("POST/api/blog", () => {
//     it("This test case is for showing my blog:", (done) => {
//         const data = {

//         };
//         chai
//             .request(server)
//             .post("/blog/myblogs/63ecd739dd58027d44683252")
//             .send(data)
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq("success");
//                 res.body.should.have.property("message").eq("Here is the blog");
//                 done();
//             })
//     })
// })
