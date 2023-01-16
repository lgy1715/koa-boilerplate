const jwt=require('jsonwebtoken');
const SECRET_KEY= 'my-secret-key';


exports.info = (ctx, next)=>{
    ctx.body = 'index';
}

exports.register = async(ctx,next)=>{
    //회원가입 처리 모듈

    let token = await generteToken({name: 'my-name'});
    ctx.body = token;
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
        JsonWebTokenError.sign(payload, process.env.APP_KEY,(token)=>{
            if(error){reject(error);}
                resolve(token);
        })
    })
};