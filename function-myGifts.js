// Example function  myGifts() Gami press API

function myGifts() {
    var myGift = [""];
    var myGift1 = [""];
    var myIDachie = [""];
    var myText = [""];
    var myText1 = [""];
    var myText2 = [""];
    var myHeaders = new Headers();

    myHeaders.append("Authorization", "Bearer 
    my-api-autorization");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("user", "my-email");
    urlencoded.append("achievement_type", "my-achievement_type");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    fetch("my-site.com/wp-json/wp/v2/gamipress/get-achievements", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('get my-Coupons');
            //revisar como acceder a los valores de la matriz
            for (var i = 0; i < result.length; i++) {
                myGift[i] = JSON.stringify(result[i]["post_title"]);
                myText[i] = JSON.stringify(result[i]["post_content"]);
                myGift1[i] = myGift[i].slice(1, -1);
                myText1[i] = myText[i].slice(1,-1);
                myText2[i] = myText1[i].replace(/(\r\n|\n|\r)/gm, "");
                newText = [""];
                console.log("myText2[i]");
                console.log(myText2[i]);
                
                //Swiper-slide
                var myBreak = document.createElement("h2");
                var numSlider = i.toString();
                console.log(numSlider); 
                var myID = "mySlider" + numSlider;
                var myDivID = "myDIV" + numSlider;
                var node1 = document.createElement("div");
                node1.setAttribute("class", "swiper-slide content");
                node1.setAttribute("style", "background-color: #e7e7e7");
                node1.setAttribute("id",myID);

                //newText[i] = myGift1[i] + myText1[i];
                var nameSlider ="";
                
                //var textnode1 = document.createTextNode(newText[i]);
                var textnode1 = document.createTextNode(nameSlider);
                node1.appendChild(textnode1);
                document.getElementById("myList1").appendChild(node1);
             
                var h = document.createElement("H2")
                h.setAttribute("style", "margin-top: 15%");
                var t = document.createTextNode(myGift1[i]);
                h.appendChild(t);
                document.getElementById(myID).appendChild(h);
                
            
                var node3 = document.createElement("h3");
                var node3a = document.createTextNode(myText1[i]);
                node3.appendChild(node3a);
                document.getElementById(myID).appendChild(node3);

                //ID Achievments
                myIDachie[i] = JSON.stringify(result[i]["id"]);
                //listID[i] = myIDachie[i];
                console.log(myIDachie[i]);

                //Button
                var myOnclik = "canje1(" + myIDachie[i]+");"
                console.info("my myOnclik");
                console.info(myOnclik);
                
                var myButtID = "myRedeem" + numSlider;
                var node2 = document.createElement("button");
                node2.setAttribute("class", "myButtom");
                node2.setAttribute("id", myButtID);
                node2.textContent = 'Redeem';
                node2.setAttribute("onclick", myOnclik);
                node2.appendChild(document.createElement("br"));
                document.getElementById(myID).appendChild(node2);

                
                var swiper = new Swiper('.swiper-container', {
                    pagination: {
                        el: '.swiper-pagination',
                        dynamicBullets: true,
                    },
                });

            }
        })
        .catch(error => console.log('error', error));

}
