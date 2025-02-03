const CarrerSchema = require('../models/careerModal');
// const nodemailer = require('nodemailer');
const cloudinary = require('cloudinary').v2;

const careerController = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, location, jobTitle, experience } = req.body;
        let pdfUrl = '';

        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            pdfUrl = result.url;
        }

        // const emailTemp = `
        // <html>
        //     <head>
        //         <style>
        //             .title {
        //                 color: #fff;
        //                 font-weight: 900;
        //                 font-family: cursive;
        //             }
        //             .container {
        //                 max-width: 600px;
        //                 margin: auto;
        //                 background: #f09f12;
        //                 padding: 20px;
        //                 text-align: center;
        //             }
        //             .button {
        //                 background-color: #02073b; 
        //                 border: none;
        //                 color: white;
        //                 padding: 15px 32px;
        //                 text-align: center;
        //                 text-decoration: none;
        //                 display: inline-block;
        //                 font-size: 16px;
        //                 margin: 4px 2px;
        //                 cursor: pointer;
        //             }
        //             table {
        //                 font-family: arial, sans-serif;
        //                 border-collapse: collapse;
        //                 width: 100%;
        //             }
        //             td, th {
        //                 border: 1px solid #dddddd;
        //                 text-align: left;
        //                 padding: 8px;
        //                 color: #fff;
        //             }
        //             td {
        //                 vertical-align: top;
        //             }
        //             tr th:first-child {
        //                 width: 80px;
        //             }
        //         </style>
        //     </head>
        //     <body>
        //         <div class="container">
        //             <h1 class="title">My Punjabi TV</h1>
        //             <h2 class="title">Career Form Submission</h2>
        //             <table>
        //                 <tr>
        //                     <td>Candidate Name</td>
        //                     <td>${fullName}</td>
        //                 </tr>
        //                 <tr>
        //                     <td>Email</td>
        //                     <td><a href='mailto:${email}'>${email}</a></td>
        //                 </tr>
        //                 <tr>
        //                     <td>Contact No.</td>
        //                     <td>${phoneNumber}</td>
        //                 </tr>
        //                 <tr>
        //                     <td>Location</td>
        //                     <td>${location}</td>
        //                 </tr>
        //                 <tr>
        //                     <td>Applying for</td>
        //                     <td>${jobTitle}</td>
        //                 </tr>
        //                 <tr>
        //                     <td>Experience</td>
        //                     <td>${experience}</td>
        //                 </tr>
        //                 <tr>
        //                     <td>Resume</td>
        //                     <td><a href=${pdfUrl}>${pdfUrl}</a></td>
        //                 </tr>
        //             </table>
        //         </div>
        //     </body>
        // </html>
        // `;

        // const transporter = nodemailer.createTransport({
        //     host: process.env.GOOGLE_HOST,
        //     port: 465,
        //     secure: true,
        //     auth: {
        //         user: process.env.GOOGLE_MAIL,
        //         pass: process.env.GOOGLE_PASS
        //     }
        // });

        // const mailOptions = {
        //     from: email,
        //     to: process.env.GOOGLE_MAIL,
        //     subject: `MyPunjabi Tv | Job Application | ${fullName}`,
        //     html: emailTemp
        // };

        // const status = await transporter.sendMail(mailOptions);

        // if (status) {
            const newApplication = await CarrerSchema.create({
                fullName,
                email,
                phoneNumber,
                jobTitle,
                experience,
                location,
                file: pdfUrl
            });
            return res.status(200).json({ message: "Job applied successfully", data: newApplication });
        // }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { careerController };
