// AJAX method

// // load all of the messages in the board
// $.ajax({
//   url: "https://next-message-board.herokuapp.com/messages",
//   method: "GET",
//   success: function(shownMessages) {
//     console.log(shownMessages);
//   }
// });

//===== GET old messages | appending the messages to our own board
$.ajax({
  url: "https://next-message-board.herokuapp.com/messages",
  method: "GET",
  beforeSend: function() {
    $("#board").html("wait la walao..");
  },

  success: function(allPostedMessages) {
    // console.log(allPostedMessages);
    $("#board").html(""); // clearing up the board, by inserting empty string to the whole table | document.getElementById("board").innerHTML = "";

    // load all messages into the #board by running a function for each of the messages | forEach(function(input){actions}) | method2 of function, allPostedMessages.forEach(function(oneStickyNotes){actions here})
    allPostedMessages.forEach(oneStickyNotes => {
      //     `$("#board").append(`<p>hi</p>`)` SameAs `document.getElementById("board").appendChild(document.createElement("p"))`
      $("#board").append(`

        <div class="card text-center" style="width: 50vw;">
            <div class="card-body">
                <p>${oneStickyNotes.text}</p> 
            </div>

            <div class="card-footer text-muted">
            ${moment(oneStickyNotes.created_at).format("MMMM D, YYYY - h:mmA")}
            </div>

            <button class="delete-btn" id="${oneStickyNotes.id}">Delete</button>

        </div>
      
      `);

      console.log(oneStickyNotes);
    });
  }
});

//===== POST new messages to the API
// preventDefault() to stop that particular event from happening. here, the event is 'submit', preventDefault() will stops it from submitting to the default destination (local storage), and redirect it to post it in the `https://next-message-board.herokuapp.com/messages` instead, where everyone with that link can see it

// when user click `submit` on the form, run the function(newTask)
$("form").on("submit", function(newTask) {
  newTask.preventDefault(); // prevent newTask data to be submitted to default database, and submit it to below link instead
  $.ajax({
    url: "https://next-message-board.herokuapp.com/messages",
    method: "POST",
    data: {
      text: $("#text-input").val()
    },

    success: function(newPostLoaded) {
      $("#board").prepend(`
      
      
      <div class="card text-center" style="width: 50vw;">
      <div class="card-body">
          <p>${newPostLoaded.message.text}</p> 
      </div>

      <div class="card-footer text-muted">
      ${moment(newPostLoaded.updated_at).format("MMMM D, YYYY - h:mmA")}
      </div>
        
      <button class="delete-btn" id="${newPostLoaded.id}">Delete</button>
      

  </div>`);

      //   console.log(newPostLoaded);
      $("#text-input").val(""); // clear search bar, so user can enter new task
    },
    error: function(ohNo) {
      console.log(ohNo);
    }
  });
});

//===== POST : attach 'click' event on the whole #board
// expect an Error sometimes, because when another user has deleted that particular task, we will get error message when we try to delete it

// go to board, when user click delete in html, delete that given task with given id
$("#board").on("click", ".delete-btn", function(elem) {
  elem.preventDefault();
  $.ajax({
    url: `https://next-message-board.herokuapp.com/messages/delete/${elem.currentTarget.id}`,
    method: "POST",

    success: function() {
      console.log($(elem.currentTarget));
      $(elem.currentTarget)
        .parent()
        .remove(); // dont need to `elem.currentTarget.id`, because we want to delete the whole box, hence need to go as high level as possible (use parent())
    }
  });
});
