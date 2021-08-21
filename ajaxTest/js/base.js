"use strict"
//
class InterFace
{
    read(){
        console.log("Запущен интрфейс");
    }
}
//
class AsinJAX
{
    // src - адрес отправки запроса
    //Работа с ассинхронными запросами
    result;
    request(src, type, method, vl){
        var ajax = new XMLHttpRequest();
        var ar;
//        ajax.open('GET','http://localhost:1000/file.json', true);
        console.log("src = "+src);
        console.log("type = "+type);
        console.log("mrthod = "+method);
        if(method != 'POST' && method !='GET'){
            method = 'POST';
//            alert('метод = '+method);
        }
        console.log('method = '+method);
        if(src!= undefined && type!= undefined ){
           ajax.open(method, src, true)
           // ajax.responseType = 'json';
           // ajax.responseType = '';
            console.log('тело запроса = '+vl);
           ajax.send(vl);
//           
           ajax.onload = function(){
               let d = ajax.response;
               console.log('d = '+d);
               // alert('d - '+d);
               this.result = d;
               
               return d;
           } 
           
            
        }else{
            console.log("Запрос не прошел")
        }
//        alert('ffffffffffffff = '+this.result);
    } 
    //перехват адреса при нажатии ссылки
    url(){
//        let urls = document.getElementsByTagName("header");
        this.urls = document.getElementById('cl');
        this.id_comment = document.getElementById("comment");
        this.urls.addEventListener('click', rendUrl, false);
        console.log(this.urls);

        function rendUrl(e){
            e.preventDefault();
            //tg - получается как текущий адрес страницы
            let tg = e.target;
            let href;
            console.log(tg.tagName);
            // перехват ссылок при нажатии пользователем на тег "a"
            if(tg.tagName == 'A'){
                href = tg.getAttribute("href");
                console.log('иф сработал ='+tg);
                console.log("адрес"+href);
            }
        }
       
    }
    

}