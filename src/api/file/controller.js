const {pool} = require('../../data')
const fs = require('fs')

/** 파일 업로드 */
exports.upload = async (ctx) =>{
    let file = ctx.request.file;
    
    /* const query = `INSERT INTO files
    (original_name, file_path, file_size)
    VALUES (?,?,?)`; */

    let { affectedRows, insertId} = await pool(query, [file.originalname, file.path, file.size])
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
/**파일 다운로드 */
exports.download = async ctx=>{
    let {id} = ctx.params;

    let item = await show(id);

    /*const query = `SELECT * FROM files WHERE id = ?`;
    let result = await pool(query, [id]); */

    if(item == null){
        ctx.body={result: "fail"};
        return;
    }


    ctx.response.set("content-disposition", `attachment;filename=${item.original_name}`);
    ctx.statusCode=200;
    ctx.body=fs.createReadStream(item.file_path);


}



