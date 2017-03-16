$(function() {
  var preInput = "";

  function appendList(id, name) {
    var item = `<li class="list result-list" user_id="${id}" user_name="${name}">${name}<span class="chat-group-user__btn--add">追加</span></li>`;
    $('.user-search-result').append(item);
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
            appendList(user.id, user.name);
          });
        })
        .fail(function() {
        alert('error');
        });
      }
      preInput = input;
    });
  });

  $(document).on('click', '.chat-group-user__btn--add', function() {
    var target = $(this).parent();
    var add_id = $(target).attr('user_id');
    var add_name = $(target).attr('user_name');
    var add_item = `<li class="list select_member" user_id="${add_id}" user_name="${add_name}">${add_name}<span class="chat-group-user__btn--remove">削除</span></li><input type="hidden", name="group[user_ids][]", value="${add_id}">`;

    $(target).remove();
    $('.chat-group-user').append(add_item);
  });

  $(document).on('click', '.chat-group-user__btn--remove', function() {
    var target = $(this).parent();
    var remove_id = $(target).attr('user_id');
    var remove_name = $(target).attr('user_name');

    $(target).remove();
  });
});
