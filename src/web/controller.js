/** 사이트 소개 홈페이지 영역 */

exports.home = (ctx, next)=>{
    ctx.body = '홈페이지';
}
/** 약관 정보 홈페이지 영역 */
exports.page = (ctx, next)=>{
    
    // let name = ctx.params.name; 아래와 완전히 똑같음.
    // let {name} = ctx.params; // 위와 완전히 똑같음.
    let page =ctx.params.page;
    let content;

    switch(page){
        case 'terms':
            content = "이용약관";
            break;
        case 'policy':
            content = "개인정보 처리방침";
            break;
    

    }

    ctx.render('index', {content});
    

}       