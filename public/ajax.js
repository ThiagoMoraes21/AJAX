$('#new-todo-form').submit(function(e) {
    e.preventDefault(); // prevent the form to submit

    // stringify the data coming from the form
    var todoItem = $(this).serialize(); 

    // make the post request sending the new json data
    $.post('/todos', todoItem, function(data) {
        debugger
    });
});