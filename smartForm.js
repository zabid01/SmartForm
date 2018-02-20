// Your jQuery goes here

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
  currentQuestion: '#welcome'
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
function checkStoreQ2aValues(){
  if(document.getElementById("likes1").checked && document.getElementById("dislikes1").checked){
    $("#likes1:checked").each(function() {
    userData.html.Likes.push($(this).val());
  });
  $("#dislikes1:checked").each(function() {
    userData.html.disLikes.push($(this).val());
  });
}
  else {
      alert("Please at least check one of the checkboxs");
      return true;
    }
}
function checkStoreQ2bValues(){
  if(document.getElementById("likes2").checked && document.getElementById("dislikes2").checked){
    $("#likes2:checked").each(function() {
    userData.css.Likes.push($(this).val());
  });
  $("#dislikes2:checked").each(function() {
    userData.css.disLikes.push($(this).val());
  });
}
  else {
      alert("Please at least check one of the checkboxs");
      return true;
    }
}
function checkStoreQ2cValues(){
  if(document.getElementById("likes3").checked && document.getElementById("dislikes3").checked){
    $("#likes3:checked").each(function() {
    userData.js.Likes.push($(this).val());
  });
  $("#dislikes3:checked").each(function() {
    userData.js.disLikes.push($(this).val());
  });
}
  else {
      alert("Please at least check one of the checkboxs");
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
		alert("Please at least check one of the checkboxs");
    return true;
	}
  if(userData.strength.css.length == 0){
		alert("Please at least check one of the checkboxs");
    return true;
	}
  if(userData.strength.js.length == 0){
		alert("Please at least check one of the checkboxs");
    return true;
	}
}
$('#start').click(function(){
  $('#welcome').hide();
  $('#q1').show();
  userData.currentQuestion= "#q1";
  // localStorage.setItem('userData',JSON.stringify(userData));
});
$('#q1next').click(function(){
  userData.name= $('#name').val();
  userData.email= $('#email').val();
  // localStorage.setItem('userData',JSON.stringify(userData));
if(!verifyNameEmail (userData.name,userData.email)) {
  $('#q2').show();
  $('#q1').hide();
  userData.currentQuestion= "#q2";
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
   $('#q2a').show();
   $('#q2').hide();
   userData.currentQuestion= "#q2a";
  });

 $('#bcss').click(function(){
   $('#q2b').show();
   $('#q2').hide();
   userData.currentQuestion= "#q2b";
  });

 $('#bjava').click(function(){
   $('#q2c').show();
   $('#q2').hide();
   userData.currentQuestion= "#q2c";
  });

$('#htmlPrev').click(function(){
    $('#q2').show();
    $('#q2a').hide();
    userData.currentQuestion= "#q2";
   });
  $('#htmlNext').click(function(){
    if (!checkStoreQ2aValues()) {
        markQ2a();
        userData.flaghtml=true;
        }
    if (checkAllQ2()) {
      $('#q3').show();
      $('#q2a').hide();
      userData.currentQuestion= "#q3";
    }
    else {
      $('#q2').show();
      $('#q2a').hide();
      userData.currentQuestion= "#q2";
  }
 });
$('#cssPrev').click(function(){
     $('#q2').show();
     $('#q2b').hide();
     userData.currentQuestion= "#q2";
    });
$('#cssNext').click(function(){
     if (!checkStoreQ2bValues() ) {
          markQ2b();
          userData.flagcss=true;
         }
     if (checkAllQ2()) {
       $('#q3').show();
       $('#q2b').hide();
       userData.currentQuestion= "#q3";
     }
     else {
       $('#q2').show();
       $('#q2b').hide();
       userData.currentQuestion= "#q2";
     }
  });
$('#javaPrev').click(function(){
      $('#q2').show();
      $('#q2c').hide();
      userData.currentQuestion= "#q2";
     });
     function checkAllQ2() {
       if (userData.flaghtml && userData.flagcss && userData.flagjava) {
          return true;
       }
     }
$('#javaNext').click(function(){
        if (!checkStoreQ2cValues() ) {
            markQ2c();
            userData.flagjava=true;
            }
        if (checkAllQ2()) {
          $('#q3').show();
          $('#q2c').hide();
          userData.currentQuestion= "#q3";
        }
        else {
          $('#q2').show();
          $('#q2c').hide();
          userData.currentQuestion= "#q2";
        }
     });
$('#q3Prev').click(function(){
       $('#q2').show();
       $('#q3').hide();
       userData.currentQuestion= "#q2";
      });
$('#q3Next').click(function(){
        if (!checkStoreQ3Values()) {
        $('#thanks').show();
        $('#q3').hide();
      }
        userData.currentQuestion= "#thanks";
       });
$('#ViewAns').click(function(){
         showAnswer();
         userData.currentQuestion= "#thanks";
        });
$('#Delete').click(function(){
          emptyArray();
          $('#welcome').show();
          $('#thanks').hide();
          userData.currentQuestion= "#welcome";
         });
