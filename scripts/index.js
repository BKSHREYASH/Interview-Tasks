

$(document).ready(function(){
		  $("#eventhover").hover(function(){


		    $(".eventcolor").css("color","black");


		    $(this).css("cursor","pointer");

		    }, function(){


        $(".eventcolor").css("color","lightslategrey");

		  });
		});



    $(document).ready(function(){
    		  $("#eventhover2").hover(function(){


    		    $(".eventcolor2").css("color","black");

            $('.eventcolor').removeClass("active");
                $('.eventcolor2').addClass("active");

                $('.eventcolor3').removeClass("active");
                $('.eventcolor4').removeClass("active");
                $('.eventcolor5').removeClass("active");
    		    $(this).css("cursor","pointer");

    		    }, function(){


            $(".eventcolor2").css("color","lightslategrey");

    		  });
    		});




        $(document).ready(function(){
        		  $("#eventhover3").hover(function(){


        		    $(".eventcolor3").css("color","black");
                $('.eventcolor').removeClass("active");
                    $('.eventcolor3').addClass("active");

                    $('.eventcolor2').removeClass("active");
                    $('.eventcolor4').removeClass("active");
                    $('.eventcolor5').removeClass("active");

        		    $(this).css("cursor","pointer");

        		    }, function(){


                $(".eventcolor3").css("color","lightslategrey");

        		  });
        		});






            $(document).ready(function(){
            		  $("#eventhover4").hover(function(){
            		    // $(this).css("background-color", "aliceblue");

            		    $(".eventcolor4").css("color","black");
                    $('.eventcolor').removeClass("active");
                        $('.eventcolor4').addClass("active");

                        $('.eventcolor3').removeClass("active");
                        $('.eventcolor2').removeClass("active");
                        $('.eventcolor5').removeClass("active");

            		    $(this).css("cursor","pointer");

            		    }, function(){
            		     // $(this).css("background-color", "white");

                    $(".eventcolor4").css("color","lightslategrey");

            		  });
            		});








                $(document).ready(function(){
                		  $("#eventhover5").hover(function(){
                		    // $(this).css("background-color", "aliceblue");

                		    $(".eventcolor5").css("color","black");
                        $('.eventcolor').removeClass("active");
                            $('.eventcolor5').addClass("active");

                            $('.eventcolor3').removeClass("active");
                            $('.eventcolor4').removeClass("active");
                            $('.eventcolor2').removeClass("active");

                		    $(this).css("cursor","pointer");

                		    }, function(){
                		     // $(this).css("background-color", "white");

                        $(".eventcolor5").css("color","lightslategrey");

                		  });
                		});





function eventOnClick(num) {
  var num = parseInt(num);

  if(num==1) {

      $("#showicon").show();
      $("#hideicon").hide();

      $("#showicon2").hide();
      $("#hideicon2").show();

      $("#showicon3").hide();
      $("#hideicon3").show();

      $("#showicon4").hide();
      $("#hideicon4").show();

      $("#showicon5").hide();
      $("#hideicon5").show();

    $(".eventcolor").css("color","black");

    $(".eventcolor2").css("color","lightslategrey");
    $(".eventcolor3").css("color","lightslategrey");
    $(".eventcolor4").css("color","lightslategrey");
    $(".eventcolor5").css("color","lightslategrey");


  } else if(num==2){

    $("#showicon2").show();
    $("#hideicon2").hide();

    $("#hideicon").show();
      $("#showicon").hide();

      $("#showicon3").hide();
      $("#hideicon3").show();

      $("#showicon4").hide();
      $("#hideicon4").show();

      $("#showicon5").hide();
      $("#hideicon5").show();

    $(".eventcolor").css("color","lightslategrey");

    $(".eventcolor2").css("color","black");
    $(".eventcolor3").css("color","lightslategrey");
    $(".eventcolor4").css("color","lightslategrey");
    $(".eventcolor5").css("color","lightslategrey");



  } else if(num==3){

    $("#showicon3").show();
    $("#hideicon3").hide();

    $("#showicon2").hide();
    $("#hideicon2").show();

    $("#hideicon").show();
      $("#showicon").hide();



      $("#showicon4").hide();
      $("#hideicon4").show();

      $("#showicon5").hide();
      $("#hideicon5").show();

    $(".eventcolor").css("color","lightslategrey");

    $(".eventcolor2").css("color","lightslategrey");
    $(".eventcolor3").css("color","black");
    $(".eventcolor4").css("color","lightslategrey");
    $(".eventcolor5").css("color","lightslategrey");
  } else if(num==4){

    $("#showicon4").show();
    $("#hideicon4").hide();



    $("#showicon").hide();
    $("#hideicon").show();

    $("#showicon2").hide();
    $("#hideicon2").show();

    $("#showicon3").hide();
    $("#hideicon3").show();



    $("#showicon5").hide();
    $("#hideicon5").show();





    $(".eventcolor").css("color","lightslategrey");

    $(".eventcolor2").css("color","lightslategrey");
    $(".eventcolor3").css("color","lightslategrey");
    $(".eventcolor4").css("color","black");
    $(".eventcolor5").css("color","lightslategrey");
  } else {

    $("#showicon5").show();
    $("#hideicon5").hide();

    $("#showicon4").hide();
    $("#hideicon4").show();



    $("#showicon").hide();
    $("#hideicon").show();

    $("#showicon2").hide();
    $("#hideicon2").show();

    $("#showicon3").hide();
    $("#hideicon3").show();



    $(".eventcolor").css("color","lightslategrey");

    $(".eventcolor2").css("color","lightslategrey");
    $(".eventcolor3").css("color","lightslategrey");
    $(".eventcolor4").css("color","lightslategrey");
    $(".eventcolor5").css("color","black");
  }

}
