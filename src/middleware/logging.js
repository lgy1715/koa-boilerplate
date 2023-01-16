/**
 * 클라이언트의 요청 ip와 url을 콘솔에 
 * 단순히 클릭해주는 로그함수
 * @param {} ctx 
 * @param {*} next 
 */

exports.myLogging = async(ctx, next)=>{
    let clientIp = ctx.request.ip;
    let url = ctx.originalUrl;
    console.log(`${clientIp.replace("::ffff:", "")} 주소에서 요청 : ${url}}`);
    await next(); // 다음에 해야될 것으로 넘김.
}