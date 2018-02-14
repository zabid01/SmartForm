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

if (localStorage.getItem('userData')) {
  userData= JSON.parse(localStorage.getItem('userData'));
  $('welcome').hide();
  $(userData.currentQuestion).show();
  $('#name').val(userData.name);
  $('#email').val(userData.email);
} else {
  localStorage.setItem('userData', JSON.stringify(userData));
}


$('#start').click(function(){
  //console.log("start");
  $('#welcome').hide();
  $('#q1').show();
  userData.currentQuestion= "#q1";
  localStorage.setItem('userData',JSON.stringify(userData));
});

// $('#name').change(function(event){
//   console.log($('#name').val());
//   // $('#welcome').hide();
//   // $('#q1').show();
// });


$('#q1next').click(function(){
  //console.log("start");
  if($('#name').val() && $('#email').val()){
    userData.name= $('#name').val();
    userData.email= $('#email').val();
    //email varification
    localStorage.setItem('userData',JSON.stringify(userData));
    $('#q2').show();
    $('#q1').hide();
  }
  else {
    alert('Enter Name & Email');
  }
 });

 $('#bhtml').click(function(){
   $('#q2a').show();
   $('#q2').hide();
  });

 $('#bcss').click(function(){
   $('#q2b').show();
   $('#q2').hide();
  });

 $('#bjava').click(function(){
   $('#q2c').show();
   $('#q2').hide();
  });
