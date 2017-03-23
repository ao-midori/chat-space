$(function() {
  function buildHTML(input) {
    var html = `<div class="message-box"><p class="message-box__sender">${input.name}<span class="message-box__datetime">${input.created_at}</span></p><p class="message-box__content">${input.body}</p><div class="message-box__image"><image src=${input.image}></div>`;
    return html;
  }

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

  $(document).on('turbolinks:load', function() {
    // photoアイコンクリックで画像選択
    $('#texting-box__photo-icon').on('click', function() {
      $('#texting-box__photo-file').click();
    });

    // 最新メッセージの自動更新
      // チャット画面において、3秒毎に更新有無チェック
    var url = document.location.pathname;
    if (url.match(/messages/)) {
      if (window.set_timer_on == null) {
        window.timer = setInterval(autoUpdate, 3000);
      }
    } else {
      clearInterval(window.timer)
      window.timer = null
    }

      // 最新メッセージ有の場合、追加表示
    function autoUpdate() {
      var message_number = $('.message-box').length;
      if (url.match(/messages/)) {
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
    }
  });
});
