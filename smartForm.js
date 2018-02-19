// Your jQuery goes here

var userData = {
  name:'',
  email:'',
  html: {Likes:[], disLikes:[]},
  css: {Likes:[], disLikes:[]},
  js: {Likes:[], disLikes:[]},
  strength: {css:'',html:'',js:'' },
  currentQuestion: '#welcome'
};

function getQ2aValues(){

	$(".likes1:checked").each(function() {
		userData.html.Likes.push($(this).val());
	});
  console.log(userData.html.Likes);

  $(".dislikes1:checked").each(function() {
		userData.html.disLikes.push($(this).val());
	});
  console.log(userData.html.disLikes);
  console.log(userData.html.Likes.length);
  console.log(userData.html.Likes);

	if(userData.html.Likes.length == 0){
		alert("Please at least check one of the checkboxs");
    return true;
	}
  if(userData.html.disLikes.length == 0){
		alert("Please at least check one of the checkboxs");
    return true;
	}
}
/////////////////////
function getQ2bValues(){

	$(".likes2:checked").each(function() {
		userData.css.Likes.push($(this).val());
	});
  console.log(userData.css.Likes);

  $(".dislikes2:checked").each(function() {
		userData.css.disLikes.push($(this).val());
	});
  console.log(userData.css.disLikes);
  console.log(userData.css.Likes.length);
  console.log(userData.css.Likes);

	if(userData.css.Likes.length == 0){
		alert("Please at least check one of the checkboxs");
    return true;
	}
  if(userData.css.disLikes.length == 0){
		alert("Please at least check one of the checkboxs");
    return true;
	}
}
/////////////////////
function getQ2cValues(){

	$(".likes3:checked").each(function() {
		userData.js.Likes.push($(this).val());
	});
  console.log(userData.js.Likes);

  $(".dislikes3:checked").each(function() {
		userData.js.disLikes.push($(this).val());
	});
  console.log(userData.js.disLikes);
  console.log(userData.js.Likes.length);
  console.log(userData.js.Likes);

	if(userData.js.Likes.length == 0){
		alert("Please at least check one of the checkboxs");
    return true;
	}
  if(userData.js.disLikes.length == 0){
		alert("Please at least check one of the checkboxs");
    return true;
	}
}
/////////////////////
function getQ3Values(){

	$(".mark1:checked").each(function() {
		userData.strength.html=($(this).val());
	});
  console.log(userData.strength.html);
  $(".mark2:checked").each(function() {
    userData.strength.css=($(this).val());
  });
  $(".mark3:checked").each(function() {
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
/////////////////////

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
if(!varification (userData.name,userData.email)) {
  $('#q2').show();
  $('#q1').hide();
  userData.currentQuestion= "#q2";
 }
});
 //email varification
function varification(name, email){
  if(!name || !email){
    alert('Please Enter Name & Email');
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
  a.innerHTML='hello';
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
    if (!getQ2aValues()) {
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
  if (!getQ2bValues()) {
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

    $('#javaNext').click(function(){
        if (!getQ2cValues()) {
      $('#q3').show();
      $('#q2c').hide();
      userData.currentQuestion= "#q3";
}
     });

     $('#q3Prev').click(function(){
       $('#q2').show();
       $('#q3').hide();
       userData.currentQuestion= "#q2";
      });
      $('#q3Next').click(function(){
        if (!getQ3Values()) {
        $('#thanks').show();
        $('#q3').hide();
        console.log(userData.size);
      }
        userData.currentQuestion= "#thanks";

       });
       $('#ViewAns').click(function(){
         showAnswer();
         userData.currentQuestion= "#thanks";
        });
      $('#Delete').click(function(){
          $('#welcome').show();
          $('#thanks').hide();
          userData.currentQuestion= "#welcome";

         });
