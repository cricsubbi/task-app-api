
const mailjet = require ('node-mailjet')
.connect('4377fc22e92c131c305c981b95ff9e81', 'c1fcd1b9bc415d88dc94be2b9097ce57')
const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "imsubodhrane@gmail.com",
        "Name": "subodh"
      },
      "To": [
        {
          "Email": "imsubodhrane@gmail.com",
          "Name": "subodh"
        }
      ],
      "Subject": "Greetings from Mailjet.",
      "TextPart": "My first Mailjet email",
      
    }
  ]
})
request
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err)
  })