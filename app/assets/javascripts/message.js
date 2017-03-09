$(function() {
  function buildHTML(input) {
    var html = '<div id="message-box">' + '<p id="message-box__sender">' + input.user.name + '<span id="message-box__datetime">' + input.created_at + '</span></p>' + '<p id="message-box__content">' + input.body + '</p>' + '</div>';
    return html;
  }
  $('#texting-form').on('submit', function(e) {
    e.preventDefault();
    var input_text = $('#texting-box__input').val();
    var request_url = $(this).attr('action');

    $.ajax({
      type: 'POST',
      url: request_url,
      data: {
        message: {
          body: input_text
        }
      },
      dataType: 'json',
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('#message-wrapper').append(html);
      $('#texting-box__input').val('');
    })
    .fail(function() {
      alert('error');
    });
  });
});
