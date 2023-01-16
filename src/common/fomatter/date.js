

exports.dateFromNow =(date) =>{
    moment().start('day').fromNow();
}
/**
 * 새 10분을 기반으로 새글인지 판단
 * @date 2023-01-12
 * @param {string} date 
 * @returns {boolean} 새글이면 true 아니면 false
 */
exports.isNewFeed =date=>{
    let currentTime = moment().add(-10, 'minute');
    let feedDate = moment(date);
    console.log(currentTime);
    console.log(feedDate);
    feedDate.isAfter(currentTime);
    return false;
}