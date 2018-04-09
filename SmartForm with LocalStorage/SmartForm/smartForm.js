// Your jQuery goes here

var a= [1,2,,4,5,null];
console.log(a[4], a[0], a[2], a[5], a[6]);


var userData = {
  name:'',
  email:'',
  html: {Likes:[], disLikes:[]},
  css: {Likes:[], disLikes:[]},
  js: {Likes:[], disLikes:[]},
  strength: {css:'',html:'',js:'' },
  flaghtml:'',
  flagcss:'',
  flagjava:'',
  currentQuestion:'#welcome'

};
function emptyArray(){
  userData = {
    name:'',
    email:'',
    html: {Likes:[], disLikes:[]},
    css: {Likes:[], disLikes:[]},
    js: {Likes:[], disLikes:[]},
    strength: {css:'',html:'',js:'' }
  }
}
window.addEventListener("load",loadpage,false);
function loadpage() {
  var page= JSON.parse(localStorage.getItem('userData'));
  var p=page.currentQuestion;
  if(p!='#welcome'){
    $('#welcome').hide();
    $(page.currentQuestion).show();
  }
}


function checkStoreQ2aValues(){
    $("#likes1:checked").each(function() {
    userData.html.Likes.push($(this).val());
  });
  $("#dislikes1:checked").each(function() {
    userData.html.disLikes.push($(this).val());
  });
  if(userData.html.Likes.length== 0) {
      alert("Please at least check one from What do you like about HTML?");
      return true;
    }
  if (userData.html.disLikes.length==0){
    alert("Please at least check one from What do you dislike about HTML?");
    return true;
  }
}
function checkStoreQ2bValues(){
    $("#likes2:checked").each(function() {
    userData.css.Likes.push($(this).val());
  });
  $("#dislikes2:checked").each(function() {
    userData.css.disLikes.push($(this).val());
  });
  if(userData.css.Likes.length== 0) {
      alert("Please at least check one from What do you like about CSS?");
      return true;
    }
  if (userData.css.disLikes.length==0){
    alert("Please at least check one from What do you dislike about CSS?");
    return true;
  }
}
function checkStoreQ2cValues(){
    $("#likes3:checked").each(function() {
    userData.js.Likes.push($(this).val());
  });
  $("#dislikes3:checked").each(function() {
    userData.js.disLikes.push($(this).val());
  });
  if(userData.js.Likes.length== 0) {
      alert("Please at least check one from What do you like about JS?");
      return true;
    }
  if (userData.js.disLikes.length==0){
    alert("Please at least check one from What do you dislike about JS?");
    return true;
  }
}
function checkStoreQ3Values(){
	$(".button1:checked").each(function() {
		userData.strength.html=($(this).val());
	});
  $(".button2:checked").each(function() {
    userData.strength.css=($(this).val());
  });
  $(".button3:checked").each(function() {
		userData.strength.js=($(this).val());
	});
	if(userData.strength.html.length == 0){
		alert("Please mark one from HTML Strength");
    return true;
	}
  if(userData.strength.css.length == 0){
    alert("Please mark one from CSS Strength");
    return true;
	}
  if(userData.strength.js.length == 0){
    alert("Please mark one from JavaScript Strength");
    return true;
	}
}
$('#start').click(function(){
  $('#welcome').hide();
  $('#q1').show();
  userData.currentQuestion= "#q1";
  localStorage.setItem('userData',JSON.stringify(userData));
});
$('#q1next').click(function(){
  userData.name= $('#name').val();
  userData.email= $('#email').val();
if(!verifyNameEmail (userData.name,userData.email)) {
  localStorage.setItem('userData',JSON.stringify(userData));
  $('#q2').show();
  $('#q1').hide();
  userData.currentQuestion= "#q2";
  localStorage.setItem('userData',JSON.stringify(userData));
 }
});
function verifyNameEmail(name, email){
    if(!name || !email){
    alert('Please Enter Name & Email!');
    return true;
  }
  var expression = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
  var regex = new RegExp (expression)
  if (!email.match(regex)) {
      alert("Please Enter a Valid Email Address!");
      return true;
  }
}
function showAnswer(){
  var a = document.getElementById('ans');
      a.innerHTML= '';
      a.innerHTML += '<div class="well style">' + '<h4>' + 'Name: '  + userData.name+ '</h4>'
                   + '<h4>' + 'Email: '  + userData.email+ '</h4>' + '</br>'
                   + '<h4>' + 'Likings About HTML:'    +  '</h4>'
                   + '<li>' + userData.html.Likes + '</li>'
                   + '<h4>' + 'Disikings About HTML:'    +  '</h4>'
                   + '<li>' + userData.html.disLikes + '</li>'
                   + '<h4>' + 'Likings About CSS:'    +  '</h4>'
                   + '<li>' + userData.css.Likes + '</li>'
                   + '<h4>' + 'Disikings About CSS:'    +  '</h4>'
                   + '<li>' + userData.css.disLikes + '</li>'
                   + '<h4>' + 'Likings About JAVA:'    +  '</h4>'
                   + '<li>' + userData.js.Likes + '</li>'
                   + '<h4>' + 'Disikings About JAVA:'    +  '</h4>'
                   + '<li>' + userData.js.disLikes + '</li>'
                   + '<h4>' + 'Front-end Skills:'    +  '</h4>'
                   + '<li>' + 'HTML:' + userData.strength.html + '</li>'
                   + '<li>' + 'CSS:' + userData.strength.css + '</li>'
                   + '<li>' + 'JS:' + userData.strength.js + '</li>'
                   + '</div>';
}
function checkAllQ2() {
       if (userData.flaghtml && userData.flagcss && userData.flagjava) {
          return true;
       }
     }
function markQ2a(){
  var l = document.getElementById('bhtml');
  l.innerHTML= 'HTML'  + '</br>' + '<i>'+'Answered' + '</i>' ;
}
function markQ2b(){
  var l = document.getElementById('bcss');
  l.innerHTML= 'CSS'  + '</br>' + '<i>'+'Answered' + '</i>';
}
function markQ2c(){
  var l = document.getElementById('bjava');
  l.innerHTML= 'JavaScript'  + '</br>' + '<i>'+'Answered' + '</i>';
}
 $('#bhtml').click(function(){
    userData.html.Likes= [];
    userData.html.disLikes= [];
   $('#q2a').show();
   $('#q2').hide();
   userData.currentQuestion= "#q2a";
   localStorage.setItem('userData',JSON.stringify(userData));
  });

 $('#bcss').click(function(){
   userData.css.Likes= [];
   userData.css.disLikes= [];
   $('#q2b').show();
   $('#q2').hide();
   userData.currentQuestion= "#q2b";
   localStorage.setItem('userData',JSON.stringify(userData));
  });

 $('#bjava').click(function(){
   userData.js.Likes= [];
   userData.js.disLikes= [];
   $('#q2c').show();
   $('#q2').hide();
   userData.currentQuestion= "#q2c";
   localStorage.setItem('userData',JSON.stringify(userData));
  });

$('#htmlPrev').click(function(){
    $('#q2').show();
    $('#q2a').hide();
    userData.currentQuestion= "#q2";
    localStorage.setItem('userData',JSON.stringify(userData));
   });
$('#htmlNext').click(function(){
    if(!checkStoreQ2aValues()){
        userData.flaghtml=true;
        markQ2a();
        if (checkAllQ2()) {
          $('#q3').show();
          $('#q2a').hide();
          userData.currentQuestion= "#q3";
          localStorage.setItem('userData',JSON.stringify(userData));
        }
        else{
            $('#q2').show();
            $('#q2a').hide();
            userData.currentQuestion= "#q2";
            localStorage.setItem('userData',JSON.stringify(userData));
          }
      }
 });
$('#cssPrev').click(function(){
     $('#q2').show();
     $('#q2b').hide();
     userData.currentQuestion= "#q2";
     localStorage.setItem('userData',JSON.stringify(userData));
    });
$('#cssNext').click(function(){
     if (!checkStoreQ2bValues() ) {
          markQ2b();
          userData.flagcss=true;
          if (checkAllQ2()) {
            $('#q3').show();
            $('#q2b').hide();
            userData.currentQuestion= "#q3";
            localStorage.setItem('userData',JSON.stringify(userData));
          }
          else {
            $('#q2').show();
            $('#q2b').hide();
            userData.currentQuestion= "#q2";
            localStorage.setItem('userData',JSON.stringify(userData));
          }
        }
  });
$('#javaPrev').click(function(){
      $('#q2').show();
      $('#q2c').hide();
      userData.currentQuestion= "#q2";
      localStorage.setItem('userData',JSON.stringify(userData));
    });
$('#javaNext').click(function(){
        if (!checkStoreQ2cValues() ) {
            markQ2c();
            userData.flagjava=true;
            if (checkAllQ2()) {
              $('#q3').show();
              $('#q2c').hide();
              userData.currentQuestion= "#q3";
              localStorage.setItem('userData',JSON.stringify(userData));
            }
            else {
              $('#q2').show();
              $('#q2c').hide();
              userData.currentQuestion= "#q2";
              localStorage.setItem('userData',JSON.stringify(userData));
            }
          }
     });
$('#q3Prev').click(function(){
       $('#q2').show();
       $('#q3').hide();
       userData.currentQuestion= "#q2";
       localStorage.setItem('userData',JSON.stringify(userData));
      });
$('#q3Next').click(function(){
        if (!checkStoreQ3Values()) {
        $('#thanks').show();
        $('#q3').hide();
        userData.currentQuestion= "#thanks";
        localStorage.setItem('userData',JSON.stringify(userData));
      }
       });
$('#ViewAns').click(function(){
        $('#ViewAnswer').show();
        $('#thanks').hide();
         showAnswer();
         userData.currentQuestion= "#ViewAnswer";
         localStorage.setItem('userData',JSON.stringify(userData));
        });
$('#Delete').click(function(){
          emptyArray();
          localStorage.clear();
          location.reload();
          $('#welcome').show();
          $('#thanks').hide();
          userData.currentQuestion= "#welcome";
          localStorage.setItem('userData',JSON.stringify(userData));
         });
