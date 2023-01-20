/** 전체 피드보기 */
const {isNewFeed} = require('../../common/formatter/date')
exports.index = (ctx, next)=>{
    let query = ctx.query;
    query.color;
    query.size;
    query.count;

   let result = isNewFeed('2023-01-12');
    //console.log(`날짜는 ${result} 입니다.`);

    // let{color, size, count} = ctx.query;
    ctx.body = query;
} 

/** 새 피드 작성 처리 */
exports.store = (ctx,next)=>{
    let body = ctx.request.body;
    ctx.body = body;
}
/** 피드 상세보기 */
exports.show = (ctx, next)=>{
    let id = ctx.params.id;
    ctx.body = `${id} 피드 상세`;
}
/** 피드 수정 */
exports.update = (ctx, next)=>{
    let id = ctx.params.id;
    ctx.body = `${id} 피드 수정`;
}
/**피드 삭제 */
exports.delete = (ctx, next)=>{
    let id = ctx.params.id;
    ctx.body = `${id} 피드 수정`;
}