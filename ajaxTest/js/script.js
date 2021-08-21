"use strict"
document.addEventListener("DOMContentLoaded", Loaded, "FALSE")
var src = 'localhost',
    type = 'text';
   
function Loaded(){
    
    let ajax_get = document.getElementById('get_ajax'),
        ajax_post = document.getElementById('post_ajax');
    ajax_get.addEventListener('click', getAjax, false);
    ajax_post.addEventListener('click', postAjax, false);
//    let form_get = document.getElementById('get_form');
//    console.log('..................'+form_get);
//    form_get.addEventListener('submit',getForm, false);
}
//
function getForm(ev){
    ev.preventDefault();
    alert(ev);
    console.log(ev);
    let f = document.forms.get_name;
    console.log('et_nme = '+f.elements.get.value);
}

// гет запрос аякс
function getAjax(ev){
    let  method = 'GET',
        res,
        sx = new AsinJAX(),
        formData = new FormData(document.forms.get_name);
    src = src+'/?name_get_nme='+formData.get('name_get_nme');
    console.log('зарос гет = '+src);
    sx.request(src, type, method, res);
    res = sx.result;
    console.log('Результат аякс = '+res);
}
// пост запрос аякс
function postAjax(ev){
    let method = 'POST',
        res,
        text = [],
        sx = new AsinJAX(),
        formData = new FormData(document.forms.post_name);
    text = ['dfsdfdfdfdsfdsfds','jsajada','asdasds'];
    sx.request(src, type, method, formData);
    res = sx.result;
    console.log('Результат аякс = '+res);
    alert(ev);
}