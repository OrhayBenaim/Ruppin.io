import $ from "jquery";

const SQL_URL = 'http://localhost:49873/WebService.asmx';


export default class AJAX{

register(email , pass , user)
{
let paramObj = {
    email:email,
    pass:pass,
    user:user
}
console.log(paramObj);

return new Promise ( (resolve , reject)=> {
$.ajax({
url: SQL_URL + '/Register',
    dataType: 'json',
    type: 'POST',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(paramObj),
    error: (jqXHR, textStatus) => {
        reject(jqXHR);

    },
    success: (data) => {

        if (data.d>0) {
            data.d = JSON.parse(data.d);
            resolve(data.d);
        } else {
            reject("couldnt insert data");
        }
    }
})

})

}

 Login(email , pass){
     
    let paramObj = {
        email: email,
        pass: pass
    }

return new Promise( (resolve , reject)=> {
    $.ajax({
        url: SQL_URL + '/Login',
        dataType: 'json',
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(paramObj),
        error: (jqXHR, textStatus)=>{
            reject("error");
            
        },
        success: (data)=>{
        
        if(data.d != 'null'){
            data.d = JSON.parse(data.d);
            resolve(data.d);
           }else{
              reject("email or username incorrect");
           }
        }
        
    });

})
}




}
