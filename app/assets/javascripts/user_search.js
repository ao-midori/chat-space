$(function() {
  var preWord = "";

  function appendList(name) {
    var item = '<li class="list">' + name + '</li>';
    $('#user-search-result').append(item);
  }

  $('#chat-group-form__user').on('keyup', function() {
    var input = $(this).val();

    if (input !== preWord && input.length !== 0) {
      $.ajax({
        type: 'GET',
        url: '/groups/user_search.json',
        data: { content : input },
        dataType: 'json'
      })

      .done(function(data) {
        $('.list').remove();
        for ( var i in data.names ) {
          console.log(data.names[i]);
          appendList(data.names[i]);
        }
      })
      .fail(function() {
      alert('error');
      });
    }

  });
});

