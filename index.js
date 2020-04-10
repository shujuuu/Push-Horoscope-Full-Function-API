//using destruct {} to grab one thing google api package
const {
    google
} = require('googleapis');

const {
    OAuth2
} = google.auth

//parameters=> cliend id, secret
const oAuth2Client = new OAuth2('380330266205-658hoqdvl69idghpjcr43pkh72pmpfbo.apps.googleusercontent.com', 'xxQR7_sKU5pIWEIfiMrCsVRk');

//parameter => get from step 2 playground
oAuth2Client.setCredentials({
    refresh_token: '1//048_zbKVyrfAZCgYIARAAGAQSNwF-L9IrEdVQZIYsv90Ue3T5vLMosrCfYfQ2-fRqgSBhrRlHLNXv1F49qn9x9GooUrmsfPtLT3s'
})

//2 param in object format => version, oath
const calendar = google.calendar({
    version: 'v3',
    auth: oAuth2Client
})

//create event to be add to calendar
//static
const eventStartTime = new Date();
// eventStartTime.setDate(eventStartTime.getDay() + 2); //add to the next day
const eventEndTime = new Date();
// eventEndTime.setDate(eventEndTime.getDay() + 2);
// eventEndTime.setMinutes(eventEndTime.getMinutes() + 45); //add 45 min


//details of the event
const eventDetails = {
    "summary": "Meeting with David",
    "location": "370 Jay Street", //optional
    "description": "Meeting with David to talk about...", //optional
    "start": {
        // "date": eventStartTime,
        "dateTime": eventStartTime,
        "timeZone": "America/New_York",
    },
    "end": {
        "dateTime": eventEndTime,
        "timeZone": "America/New_York",
    },
    "colorId": 11
}
console.log(eventStartTime, eventEndTime);

//insert the calendar
return calendar.events.insert({
    calendarId: 'primary',
    resource: eventDetails
})