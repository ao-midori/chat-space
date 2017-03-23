$(function() {
  function buildHTML(input) {
    var html = `<div class="message-box">
                  <p class="message-box__sender">
                    ${input.name}
                    <span class="message-box__datetime">${input.created_at}</span>
                  </p>
                  <p class="message-box__content">
                    ${input.body}
                  </p>
                <div class="message-box__image">`;
    if (input.image != null) {
      var html_pic = `<image src=${input.image}></div>`
      return html + html_pic;
    } else {
      return html;
    }
  }

  $(document).on('turbolinks:load', function() {
    // sendボタンで非同期通信
    $('#texting-form').on('submit', function(e) {
      e.preventDefault();
      var input_info = new FormData($('#texting-form')[0]);
      var request_url = $(this).attr('action');

      $.ajax({
        type: 'POST',
        url: request_url,
        data: input_info,
        processData: false,
        contentType: false,
        dataType: 'json',
      })
      .done(function(data) {
        var html = buildHTML(data);
        $('#message-wrapper').append(html);
        $('#texting-box__input').val('');
        $('#message-wrapper').animate({scrollTop: $('#message-wrapper')[0].scrollHeight}, 1000);
      })
      .fail(function() {
        alert('error');
      });
    });

    // 最新メッセージの自動更新
    var url = document.location.pathname;
    var messagePolling;

      // チャット画面表示時、3秒毎に更新有無チェック
    if (url.match(/messages/)) {
      messagePolling = setInterval(autoUpdate, 3000);
      $(document).on('turbolinks:load', clearPolling);
    }

    function clearPolling() {
      clearInterval(messagePolling);
    }

      // 最新メッセージ有の場合、追加表示
    function autoUpdate() {
      var message_number = $('.message-box').length;
      $.ajax({
        type:'GET',
        url: url,
        dataType: 'json'
      })
      .done(function(data) {
        if ( message_number !== data.messages.length ) {
          for ( var i = message_number; i < data.messages.length; i++ ) {
            var html = buildHTML(data.messages[i]);
            $('#message-wrapper').append(html);
            $('#message-wrapper').animate({scrollTop: $('#message-wrapper')[0].scrollHeight}, 1000);
          }
        }
      })
      .fail(function() {
        alert('error');
      });
    }
  });
});
