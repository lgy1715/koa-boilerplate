/** 사이트 소개 홈페이지 영역 */

exports.home = (ctx, next)=>{
    ctx.body = '홈페이지';
}
/** 약관 정보 홈페이지 영역 */
exports.page = (ctx, next)=>{
    // let name = ctx.params.name; 아래와 완전히 똑같음.
    let {name} = ctx.params; // 위와 완전히 똑같음.

    
    ctx.body = name;
}