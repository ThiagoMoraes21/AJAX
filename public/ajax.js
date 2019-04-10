$('#new-todo-form').submit(function(e) {
    e.preventDefault(); // prevent the form to submit

    // stringify the data coming from the form
    var todoItem = $(this).serialize(); 

    // make the post request sending the new json data
    $.post('/todos', todoItem, function(data) {
        $('#todo-list').append(
         `
           <li class="list-group-item">
                <span class="lead">
                    ${data.text}
                </span>
                <div class="pull-right">
                    <a href="/todos/${data._id}/edit" class="btn btn-sm btn-warning">Edit</a>
                    <form style="display: inline" method="POST" action="/todos/${data._id}?_method=DELETE">
                        <button type="submit" class="btn btn-sm btn-danger">Delete</button>
                    </form>
                </div>
                <div class="clearfix"></div>
            </li>
         `
        );

        $('#new-todo-form').find('.form-control').val('');
    });
});