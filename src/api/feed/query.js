const {pool} = require('../../data');
const {isNeFeed} = require('../../common/formatter/date');


exports.create = async (user_id,image_id, content) =>{
    `INSERT INTO feed(user_id, image_id, content) VALUES(?,?,?)`;
    let result = await pool(query, [user_id,image_id,content]);
    return result;
}

exports.show = async(id)=>{
    const query = `SELECT * FROM feed WHERE id = ?`;
    let result = await pool(query, [id]);
    return (result.length <0)? null : result[0];
}

exports.update = async(id)=>{
    const query = `UPDATE feed set user_id=?, image_id=?, content=? WHERE id = ?`;
    let result = await pool(query, [user_id, image_id, content, id]);
    return result;
}

exports.deleteid = async(id)=>{
    const query = `DELETE * FROM feed WHERE id = ?`;
    let result = await pool(query, [id]);
    return result;
}