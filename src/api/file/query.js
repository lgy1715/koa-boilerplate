const {pool} = require('../../data')


exports.create = async (name, path,size)=>{
    const query = `INSERT INTO files
    (original_name, file_path, file_size)
    VALUES(?,?,?)`;
    return await pool(query, (name, path, size));
}

exports.show = async(id)=>{
    const query = `SELECT * FROM files WHERE id = ?`;
    let result = await pool(query, [id]);
    return (result.length <0)? null : result[0];
}
/**
 * 회원가입
 * @param {string} email메일(아이디)
 * @param {string} password  비밀번호
 * @param {string} name 이름
 * @returns 
 */
exports.register = async (email, password, name)=>{
    const query = `INSERT INTO user
    (email, password, name)
    VALUES (?,?,?)`;
    return await pool(query, [email,password,name]);
}