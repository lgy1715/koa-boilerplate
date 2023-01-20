/** 전체 피드보기 */
const {create, show, update} = require('./query');
const {deleteid} = require('./query');
const {isNewFeed} = require('../../common/formatter/date');
const {pool} = require('../../data');

exports.index = async (ctx, next)=>{
    const query = `SELECT * FROM feed`;
    let result = await pool(query, []);
    if(result.length>0){
        ctx.body = result
    }else{
        ctx.body = {
            result : 'NULL',
        }
    }

    //let result = isNewFeed('2023-01-12');
    //console.log(`날짜는 ${result} 입니다.`);
    // let{color, size, count} = ctx.query;
} 

/** 새 피드 작성 처리 */
exports.store = async (ctx,next)=>{
    let body = ctx.request.body;
    let {affectedRows, insertId} = await create(query, [body.user_id, body.image_id, body.content]);
    if(affectedRows>0){
        ctx.body = {
            result:"create ok",
        }
    }else{
        ctx.body = {
            result:" create fail",
        }
    }
}
/** 피드 상세보기 */
exports.show = async (ctx, next)=>{
    let id = ctx.params.id;
    let result = await show(id);
    if(result.length > 0){
        ctx.body = result;
    }else{
        ctx.body = {
            result : "fail",
        }
    }
}
/** 피드 수정 */
exports.update = async (ctx, next)=>{
    let id = ctx.params.id;
    ctx.body = ctx.request.body;
    let { affectedRows, insertId} = await update(query, [id, body.user_id, body.image_id, body.content]);
    if(affectedRows>0){
        ctx.body={
            result:"ok",
            id:insertId
        }
    }else{
    ctx.body={
        result:"fail",
        }
    }



}
/**피드 삭제 */
exports.delete = async (ctx, next)=>{
    let id = ctx.params.id;
    let {affectedRows} = await deleteid(id);

    if(affectedRows< 1){
        ctx.body ={result: "delete complete",
        }
    }else{
        ctx.body = {result: "fail",
        }
    }
}