// So many utility functions (https://lodash.com/docs)
var _ = require('lodash');

var mailing = module.exports = (function() {

    const sendGrid = require('../handlers/sendGrid');

    const addToMailingList = function(params) {
        return new Promise(function(resolve, reject) {

            sendGrid.sendEmail({
                subject: 'New User: ' + params.emailAddress,
                messageTextHtml: '<p>A new user has submitted their email on the BEN website</p>',
                recipientEmail: 'oscar@setlife.network',
                recipientName: 'New Email'
            })
            .then(() => {
                resolve('Added ' + params.emailAddress);

                // Email the user with welcome info
            })
        });
    };

    return {
        addToMailingList
    };
})();