$(function() {
  var preWord = "";

  function appendList(user) {
    var item = `<li class="list" id="${user.id}">${user.name}</li>`;
    $('.user-search-result').append(item);
  }

  function appendAddBtn() {
    var add_btn = '<span class="chat-group-user__btn--add">追加</span>'
    $('.list').append(add_btn);
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
        $.each(data, function(i, user) {
          appendList(user);
        });
        appendAddBtn();
      })

      .fail(function() {
      alert('error');
      });
    }
  });
});

