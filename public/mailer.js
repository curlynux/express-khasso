app.post('/contact', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'outlook',
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587,
    tls: {
       ciphers:'SSLv3'
   },
    auth: {
        user: 'ibrahim.samory@outlook.fr',
        pass: 'veerbatim87'
    },

});
  var sender = req.body.email;
  var sujet = req.body.sujet;
  var texte = req.body.message;

  var mailOptions = {
    from: sender,
    to: 'user',
    to: 'ibrahim.samory@outlook.fr',
    subject: sujet,
    text: texte
    //html: '<p>le formulaire marche'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error(error);
    } else {
      console.log('Message %s envoyer: %s', info.messageId, info.response);
    }
  });

  res.send('req recieved');
});
