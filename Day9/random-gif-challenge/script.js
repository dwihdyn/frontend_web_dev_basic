//== JQuery method
/*
step1 : state url
step2 : method "GET" or "POST"
step3 : explain what to do if success
step4 : explain what to do if error
*/

function getGif() {
  $.ajax({
    url:
      "https://api.giphy.com/v1/gifs/random?api_key=GhvSfE3AzH8pWrPmotrYL0k4aAtO2JGC&tag=&rating=G",
    method: "GET",
    data: {
      tag: $("input#tag").val()
    },
    success: function(gifResult) {
      console.log(gifResult);
      console.log(gifResult.data);
      console.log(gifResult.data.image_url);

      // putting more and more gif to the bottom
      //   let newFrame = document.createElement("img"); // create new element to place the gif at <img>
      //   newFrame.setAttribute("src", gifResult.data.image_url); // add attribute to above new element <img src="gifResult.data.image_url">
      //   document.getElementById("gif-here").appendChild(newFrame); // load that new img element inside id = 'gif-here'

      //   //=== method1 : replacing old gif with new gif | by replacing the src with setAttribute()
      //   let newFrame = document.getElementById("gif-here"); // aiming at id="gif-here"
      //   newFrame.setAttribute("src", gifResult.data.image_url); // replace the given "src" attribute with our new loaded random gif `gifResult.data.image_url`

      //=== method2 : replacing old gif with new gif | by replacing the whole <img src=${gifResult.data.image_url}> using innerHTML
      document.getElementById(
        "gif-here"
      ).innerHTML = `<img src=${gifResult.data.image_url} />`;
    },
    error: function(ohNo) {
      console.log(`Error has occured : ${ohNo}`);
    }
  });
}
