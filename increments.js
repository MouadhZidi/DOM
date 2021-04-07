function increase(){
                
                var textBox = document.getElementById("text");
                textBox.value++;
                prix1();
                total();
                
            }    
function decrease(){
              
                var i = document.getElementById('text').value;
    if (i>0){
        document.getElementById('text').value = --i;
    }
    prix1();
                total();
            }  

function increase1(){
              
                var textBox = document.getElementById("text1");
                textBox.value++;
                prix2();
                total();
            }    
function decrease1(){
              var i = document.getElementById('text1').value;
    if (i>0){
        document.getElementById('text1').value = --i;
    }
    prix2();
                total();
            }  

function increase2(){
               
                var textBox = document.getElementById("text2");
                textBox.value++;
                prix3();
                total();
                
                
            }    
function decrease2(){
              var i = document.getElementById('text2').value;
    if (i>0){
        document.getElementById('text2').value = --i;
    }
    prix3();
                total();
            }  

function delete_item1() {
  var myobj = document.getElementById("demo1");
  myobj.remove();
}

function delete_item2() {
  var myobj = document.getElementById("demo2");
  myobj.remove();
}
function delete_item3() {
  var myobj = document.getElementById("demo3");
  myobj.remove();
}


function coloration1() {
  document.getElementById("heart_1").style.color = "red";
}
function coloration2() {
  document.getElementById("heart_2").style.color = "red";
}
function coloration3() {
  document.getElementById("heart_3").style.color = "red";
}



function prix1(){
	var total = document.getElementById("price1");
	var textBox = document.getElementById("text").value;
	
	total.innerHTML=textBox*1379.00;

}

function prix2(){
	var total2 = document.getElementById("price2");
	var textBox = document.getElementById("text1").value;
	
	total2.innerHTML=textBox*176.80 ;

}

function prix3(){
	var total3 = document.getElementById("price3");
	var textBox = document.getElementById("text2").value;
	
	total3.innerHTML=textBox*249.00  ;

}








function total(){
let price1 = document.getElementById("price1").innerHTML
let price2 = document.getElementById("price2").innerHTML
let price3 = document.getElementById("price3").innerHTML

let totalprice= document.getElementById("Total")
totalprice.value=parseInt(price1,10)+parseInt(price2,10)+parseInt(price3,10)
 
}
