const jwt=require('jsonwebtoken');
const {register} = require('./query');
const SECRET_KEY= 'my-secret-key';
const crypto = require('crypto');

/**해당 id의 회원정보들 */
exports.info = (ctx, next)=>{
    let id = ctx.params.id;
    ctx.body = '${id} 회원에 대한 정보';
}
//회원가입
exports.register = async(ctx,next)=>{
    let {email, password, name} = ctx.request.body;

    let {affectedRows} = await register(email, password, name);

    if(affectedRows>0){
        let token = await generteToken({name});
        ctx.body = token;
    }else{
        ctx.body = {result:"fail"};
    }
}

exports.login = async (ctx, next)=>{
    //로그인 모듈
    //let{id, pw} = ctx.request.body; //밑의 내용과 같음.
    let id = ctx.request.body.id;
    let pw = ctx.request.body.pw;
    


    let result="";
    if(id==='admin' && pw === '1234'){
        result = await generteToken({name: 'abc'});
    }    
    else{
        result = "아이디 혹은 패스워드가 올바르지 않습니다.";
    }
    ctx.body=result;
    
}

let generteToken=(payload)=>{
    return new Promise((resolve, reject)=>{
        JsonWebTokenError.sign(payload, process.env.APP_KEY,(error, token)=>{
            if(error){reject(error);}
                resolve(token);
        })
    })
};