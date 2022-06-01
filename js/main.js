// location element filter 
$('.filterLocation .btnlist>li').click(function(){
    $(this).addClass('active');
  let value =$(this).attr('data-filter');
  let item = $('.filterLocation .fdealSlider .item-wrap');
  console.log(value);
    if(value == ''){
        $('.filterLocation .fdealSlider .item-wrap.NorthAmerica').show(1000)
    }else{
        item.not('.'+value).hide(1000);
        item.filter('.'+value).show(1000);
    }
    // class1 = item.attr('class').split(' ')[0];
    $(this).siblings().removeClass('active')

    // console.log(jQuery('selector').attr('class').split(' ')[0]);
})

// menu click dropdown
$("nav .main-nav__list .nav-item .dropdown-menu>.memutitle").click(function(){
  
    $(this).find('ul').toggleClass('show');
    // $(this).siblings().hide(200);
})





// // for search icon 
// $(document).ready(function(){
//     console.log('click');
//     $("form .formcontent .passenger.sicon li").click(function(){
//         $(".passenger.sicon .addpsgerwraper").toggle(500);
//     })
//     $(".passenger.sicon button.ok.btn.btn-primary").click(function(){
//         $(".passenger.sicon .addpsgerwraper").hide(500);
//     })   

// })

// let passengerSicon = $(".passenger.sicon .addpsgerwraper .passengerAdd span");
// let passengerSicon1 =Number( passengerSicon[0].textContent);
// let passengerSicon2 = Number(passengerSicon[1].textContent);
// let passengerSicon3 = Number(passengerSicon[2].textContent);
// let sumSicon = passengerSicon1 + passengerSicon2 + passengerSicon3;
// let btnSicon;
// let countSicon;
// $("form .formcontent .passenger.sicon .invisible").val(Number(sumSicon.slice(0,1)));

// function additionS(e){
//     btnSicon = e;
//     countSicon = Number(btnSicon.previousElementSibling.textContent)
//     if(countSicon<=10){
//         ++countSicon;
//     }
//     btnSicon.previousElementSibling.innerHTML = countSicon;
//      passengerSicon1 =Number( passengerSicon[0].textContent);
//      passengerSicon2 = Number(passengerSicon[1].textContent);
//      passengerSicon3 = Number(passengerSicon[2].textContent);
//     sumSicon = passengerSicon1 + passengerSicon2 + passengerSicon3;
//     if(sumSicon==1){
//         sumSicon =  `${sumSicon} passenger`;
//     }else{
//         sumSicon =  `${sumSicon} passengers`;

//     }
//     $("form .formcontent .passenger.sicon li samp").text(sumSicon);
//     $("form .formcontent .passenger.sicon .invisible").val(Number(sumSicon.slice(0,1)));

// }
// function sumtractS(e){
//     btnSicon = e;
//     countSicon = Number(btnSicon.nextElementSibling.textContent)
//     if(countSicon>=2){
//         --countSicon;
//     }
//     btnSicon.nextElementSibling.innerHTML = countSicon;
//      passengerSicon1 =Number( passengerSicon[0].textContent);
//      passengerSicon2 = Number(passengerSicon[1].textContent);
//      passengerSicon3 = Number(passengerSicon[2].textContent);
//     sumSicon = passengerSicon1 + passengerSicon2 + passengerSicon3;
//     if(sumSicon==1){
//         sumSicon =  `${sumSicon} passenger`;
//     }else{
//         sumSicon =  `${sumSicon} passengers`;
        
//     }
//     $("form .formcontent .passenger.sicon li samp").text(sumSicon);
//     $("form .formcontent .passenger.sicon .invisible").val(Number(sumSicon.slice(0,1)));

// }
// function sumtract1S(e){
//     btnSicon = e;
//     countSicon = Number(btnSicon.nextElementSibling.textContent)
//     if(countSicon>=1){
//         --countSicon;
//     }
//     btnSicon.nextElementSibling.innerHTML = countSicon;
//      passengerSicon1 =Number( passengerSicon[0].textContent);
//      passengerSicon2 = Number(passengerSicon[1].textContent);
//      passengerSicon3 = Number(passengerSicon[2].textContent);
//     sumSicon = passengerSicon1 + passengerSicon2 + passengerSicon3;
//     if(sumSicon==1){
//         sumSicon =  `${sumSicon} passenger`;
//     }else{
//         sumSicon =  `${sumSicon} passengers`;

//     }
//     $("form .formcontent .passenger.sicon li samp").text(sumSicon);
//     $("form .formcontent .passenger.sicon .invisible").val(Number(sumSicon.slice(0,1)));
// }
// $('html').removeClass('rtl');
 
// search icon click 
$(".search ").click(function(){
    console.log('click');
    // console.log($('.search-container').hasClass("ami"))
    // $(".scerch_container").toggleClass('show');
    if($(this).children('img').attr('src')=='img/search.png'){
        $(this).children('img').attr('src','img/times.png');
        $(".scerch_container").addClass('show');
        $('#overlay').show(10)
    }else{
        
        $(".scerch_container").removeClass('show');
        $(this).children('img').attr('src','img/search.png');
        $('#overlay').hide(100)
    }
    // $(".search.after img ").attr("src", "img/times.png");
})
function of(){
    $('#overlay').click(function(){
        $(this).hide(100);
        $(".scerch_container").removeClass('show');
        $('.search').children('img').attr('src','img/search.png');

    })
}

$(document).ready(function(){
    $(".intro__search  form .formcontent .passenger li").click(function(){
        $(".intro__search .passenger .addpsgerwraper").toggle(500);
    })
    $(".intro__search  button.ok.btn.btn-primary").click(function(){
        $(".intro__search  .passenger .addpsgerwraper").hide(500);
    })   

})

let passenger = $(".intro__search .passenger .addpsgerwraper .passengerAdd span");
let passenger1 =Number( passenger[0].textContent);
let passenger2 = Number(passenger[1].textContent);
let passenger3 = Number(passenger[2].textContent);
// let passenger34 = Number(passenger[3].html());
let sum = passenger1 + passenger2 + passenger3;
let btn;
let count;
$(".intro__search form .formcontent .passenger .invisible").val(Number(sum.slice(0,1)));

// console.log(sum);
function addition(e){
    btn = e;
    count = Number(btn.previousElementSibling.textContent)
    if(count<=10){
        ++count;
    }
    btn.previousElementSibling.innerHTML = count;
     passenger1 =Number( passenger[0].textContent);
     passenger2 = Number(passenger[1].textContent);
     passenger3 = Number(passenger[2].textContent);
    // console.log(passenger1);    
    sum = passenger1 + passenger2 + passenger3;
    // console.log(sum);
    if(sum==1){
        sum =  `${sum} passenger`;
    }else{
        sum =  `${sum} passengers`;

    }
    $(".intro__search form .formcontent .passenger li samp").text(sum);
    $(".intro__search form .formcontent .passenger .invisible").val(Number(sum.slice(0,1)));

}
function sumtract(e){
    btn = e;
    count = Number(btn.nextElementSibling.textContent)
    if(count>=2){
        --count;
    }
    btn.nextElementSibling.innerHTML = count;
     passenger1 =Number( passenger[0].textContent);
     passenger2 = Number(passenger[1].textContent);
     passenger3 = Number(passenger[2].textContent);
    // console.log(passenger1);    
    sum = passenger1 + passenger2 + passenger3;
    // console.log(sum);
    if(sum==1){
        sum =  `${sum} passenger`;
    }else{
        sum =  `${sum} passengers`;
        
    }
    $(".intro__search form .formcontent .passenger li samp").text(sum);
    $(".intro__search form .formcontent .passenger .invisible").val(Number(sum.slice(0,1)));

}
function sumtract1(e){
    btn = e;
    count = Number(btn.nextElementSibling.textContent)
    if(count>=1){
        --count;
    }
    btn.nextElementSibling.innerHTML = count;
     passenger1 =Number( passenger[0].textContent);
     passenger2 = Number(passenger[1].textContent);
     passenger3 = Number(passenger[2].textContent);
    // console.log(passenger1);    
    sum = passenger1 + passenger2 + passenger3;
    // console.log(sum);
    if(sum==1){
        sum =  `${sum} passenger`;
    }else{
        sum =  `${sum} passengers`;

    }
    $(".intro__search form .formcontent .passenger li samp").text(sum);
    $(".intro__search form .formcontent .passenger .invisible").val(Number(sum.slice(0,1)));
}


// slider locatin element filter
