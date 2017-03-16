$(function() {
  var preInput = "";

  function appendList(user) {
    var item = `<li class="list result-list" user_id="${user.id}" user_name="${user.name}">${user.name}</li>`;
    $('.user-search-result').append(item);
  }

  function appendAddBtn() {
    var add_btn = '<span class="chat-group-user__btn--add">追加</span>'
    $('.result-list').append(add_btn);
  }

  $(document).on('turbolinks:load', function() {
    $('#chat-group-form__user').on('keyup', function() {
      var input = $(this).val();

    if (input !== preInput && input.length !== 0) {
      $.ajax({
        type: 'GET',
        url: '/groups/user_search.json',
        data: { content : input },
        dataType: 'json'
      })

      .done(function(data) {
        $('.result-list').remove();
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

  $(document).on('click', '.chat-group-user__btn--add', function() {
    var add_id = $(this).parent().attr('user_id');
    var add_name = $(this).parent().attr('user_name');
    var add_item = `<li class="list" user_id="${add_id}" user_name="${add_name}">${add_name}<span class="chat-group-user__btn--remove">削除</span></li>`;
    $(this).parent().remove();
    $('.chat-group-user').append(add_item);
  });
});
});

