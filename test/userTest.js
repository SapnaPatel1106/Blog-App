let server = require("../index");
let chaiHttp = require("chai-http");
var chai = require("chai");
const utils = require("../models/userModelSchema");
let routes = require("../routes/userRoutes");

chai.should();
chai.use(chaiHttp);

// describe("User Login API", () => {
//     //test the get resourceLimits
//     describe("POST /api/users", () => {
//         it("IT should Return login user details:", (done) => {
//             const data = {
//                 userEmail: "patel.sapnapatel11@gmail.com",
//                 password: "Sapna@2001",
//             };
//             chai
//                 .request(server)
//                 .post("/user/loginUser")
//                 .send(data)
//                 .end((err, res) => {
//                 res.should.have.status(200);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq("success");
//                 res.body.should.have.property("message").eq("Login successfull");
//                 res.body.should.have.property("token");
//                 done();
//             });
//         });
//     });
//     it("It should return error message:", (done) =>{
//         const data={
//             userEmail:"patel.sapnapatel01@gmail.com",
//             password:"Sapna@1607",
//         };
//         chai
//             .request(server)
//             .post("/user/loginUser")
//             .send(data)
//             .end((err,res)=>{
//                 res.body.should.have.property("success").eq("failure");
//                 res.body.should.have.property("message").eq("You are not a register user");
//                 done();
//         });
//     });
//     it("It should return Email or password Error message :",(done)=>{
//         const data={
//             userEmail:"patel.sapnapatel11@gmail.com",
//             password:"Sapna@20",
//         };
//         chai   
//             .request(server)
//             .post("/user/loginUser")
//             .send(data)
//             .end((err,res)=>{
//                 res.body.should.have.property("success").eq("failure")
//                 res.body.should.have.property("message").eq("Email or password is not valid");
//                 done();
//         });
//     });
// });

// //signUp API test cases 
// describe ("POST/api/user",()=>{
//     it ("It  should return Account registered successfully :",(done)=>{
//         const data ={
//             userName : "Rakhi Patel",
//             userEmail : "patel.rakhi1996@gmail.com",
//             password : "Sapna@1607",
//             city : "dewas",
//             state:"mp",
//             phone_no : "9589350755"
//     };
//     chai
//         .request(server)
//         .post("/user/registeruser")
//         .send(data)
//         .end((err,res) =>{
//             res.should.have.status(201);
//             res.should.be.a("object");
//             res.body.should.have.property("success").eq("success");
//             res.body.should.have.property("message").eq("Account registered successfully.");
//             done();
//         });
//     });
// });

// describe ("POST/api/user",()=>{
//     it ("It  should return User with this email is already exist :",(done)=>{
//         const data ={
//             userName : "Rakhi Patel",
//             userEmail : "patel.rakhi1996@gmail.com",
//             password : "Sapna@1607",
//             city : "dewas",
//             state:"mp",
//             phone_no : "9589350755"
//     };
//     chai
//         .request(server)
//         .post("/user/registeruser")
//         .send(data)
//         .end((err,res) =>{
//             res.should.have.status(409);
//             res.should.be.a("object");
//             res.body.should.have.property("success").eq("failure");
//             res.body.should.have.property("message").eq("User with this email is already exist");
//             done();
//         });
//     });
// });

describe("Reset Password SendEmail API", () => {
    //test the get resourceLimits
    describe("POST/api/users", () => {
        it("IT should Return The reset password link is send to your register email account :", (done) => {
            const data = {
                userEmail: "patel.sapnapatel11@gmail.com",
            };
            chai
                .request(server)
                .post("/user/sendemail")
                .send(data)
                .end((err, res) => {
                res.should.have.status(201);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("The reset password link is send to your register email account");
                res.body.should.have.property("token");
                done();
            });
        });
    });
describe("POST/api/users", () => {
    it("IT should Return User email is not valid :", (done) => {
        const data = {
            userEmail: "patel.apnapatel11@gmail.com",
        };
        chai
            .request(server)
            .post("/user/sendemail")
            .send(data)
            .end((err, res) => {
                res.should.have.status(403);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("failure");
                res.body.should.have.property("message").eq("User email is not valid");
                done();
            });
    });
});
});

describe("Update Password API", () => {
    //test the get resourceLimits
    describe("POST /api/users", () => {
        it("IT should Return Password update sucessfully :", (done) => {
            const data = {
                newPassword : "Sapna@1607",
                confirmPassword  : "Sapna@1607",
            };
            chai
                .request(server)
                .post("/user/updatepassword/:id/:token")
                .send(data)
                .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("Password update sucessfully");
                done();
            });
        });
    });
    describe("POST /api/users", () => {
            it("IT should Return Password update sucessfully :", (done) => {
                const data = {
                    newPassword : "Sapna@1607",
                    confirmPassword  : "Sapna@1607",
                };
                chai
                    .request(server)
                    .post("/user/updatepassword/:id/:token")
                    .send(data)
                    .end((err, res) => {
                    res.should.have.status(403);
                    res.should.be.a("object");
                    res.body.should.have.property("success").eq("failure");
                    res.body.should.have.property("message").eq("Password and confirmPassword are not match");
                    done();
                });
            });
        });
});
