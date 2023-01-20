const moment = require('moment');

exports.dateFromNow = (date) =>{
    moment().start('day').fromNow();
}

exports.isNewFeed = (date) =>{
    let currentTime = moment().add( -10, 'minute');
    let feedDate = moment(date);
    console.log(currentTime);
    console.log(feedDate);
    feedDate.isAfter(currentTime);
    return false;
} 