/**
 * ajax模块
 */

//   导入axios
import axios from 'axios';

export default function ajax (url,data={},type="GET"){

    return new Promise(function(resolve,reject){
        let res;
        // 发送GET请求
        if(type=='GET'){
            let dataStr='';
            Object.keys(data).some(v=>{
                dataStr+=v+'='+data[v]+'&'
            })
            if(dataStr!==''){
                dataStr=dataStr.substring(0,dataStr.lastIndexOf('&'))
                url=url+'?'+dataStr
            }
            res=axios.get(url)
        }else{
            // 发送post请求
            res=axios.post(url,data)
        }
        res.then(function(resp){
            resolve(resp.data)
        }).catch(function(erro){
            reject(erro)
        })
    })

}