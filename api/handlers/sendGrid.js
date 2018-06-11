var mail = require('@sendgrid/mail');

const { SENDGRID } = require('../config/credentials');

mail.setApiKey(SENDGRID.KEY);

var sendGrid = module.exports = {
    sendEmail: function(params) {
        return new Promise(function(resolve, reject) {
            const message = {
                from: 'oscar@setlife.network',
                to: [
                    {
                        email: params.recipientEmail,
                        name: params.recipientName
                    }
                ],
                subject: params.subject,
                html: params.messageTextHtml,
            };
            mail.send(message)
            .then((res) => {
                console.log('Message sent')
                resolve()
            })
            .catch(err => {
                console.log(err)
                console.log('Error sending message')
                reject(err)
            })
        });
    }

};
