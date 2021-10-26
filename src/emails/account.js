const sendgrid = require('@sendgrid/mail');

//const SENDGRID_API_KEY = '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'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
    to : "tolambia.komal5@gmail.com",
    from : "tolambia.komal5@gmail.com",
    subject : "my first creation!",
    text : "I hope it reaches to you.",
   // html: '<strong>and easy to do anywhere, even with Node.js</strong>'
}
const sendWelcomeEmail = (email , Name)=>{
    sendgrid
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}

const sendDeleteEmail = (email , Name) =>{
    sendgrid.send({
        to : 'tolambia.komal5@gmail.com',
        from : 'tolambia.komal5@gmail.com',
        subject : 'Account Deleted',
        text : `${Name},Your account has been deleted. Kindly let us know what can we do to keep you on board.`,
        //html : '<strong>Your account has been deleted</strong>'
    }).then(()=>{
        console.log('email sent');
    }).catch((e)=>{
        comsole.error(error);
    })
}

const emails =  {
    sendWelcomeEmail,
    sendDeleteEmail
}  
module.exports = emails