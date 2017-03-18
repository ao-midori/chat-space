$(function() {
  function buildHTML(input) {
    var html = `<div id="message-box"><p id="message-box__sender">${input.name}<span id="message-box__datetime">${input.created_at}</span></p><p id="message-box__content">${input.body}</p><div id="message-box__image"><image src="${input.image}"></div>`;
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
    $('#texting-box__photo-icon').on('click', function() {
      $('#texting-box__photo-file').click();
    });
  });
});

