const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (CSS, images, etc.) from the root directory
app.use(express.static(__dirname));

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'f219186@cfd.nu.edu.pk', // replace with your email
            pass: 'tayyab*9876'   // replace with your email password
        }
    });

    // Email options
    const mailOptions = {
        from: email,
        to: 'f219186@cfd.nu.edu.pk', // replace with your email
        subject: `New Contact Form Submission: ${subject}`,
        html: `
            <h2>Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong><br>${message}</p>
        `
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Sorry, something went wrong. Please try again later.');
        }

        // Send response email to the user
        const responseMailOptions = {
            from: 'f219186@cfd.nu.edu.pk', // replace with your email
            to: email,
            subject: 'Thank you for contacting us',
            html: `
                <h2>Thank You for Contacting Us</h2>
                <p>We have received your message and will get back to you as soon as possible.</p>
            `
        };

        transporter.sendMail(responseMailOptions, (error, info) => {
            if (error) {
                console.error('Error sending response email:', error);
            } else {
                console.log('Response email sent:', info.response);
            }
        });

        // Redirect to the index.html page
        res.redirect('/');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
