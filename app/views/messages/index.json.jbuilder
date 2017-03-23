json.set! :messages do
  json.array! @messages do |message|
    json.name message.user.name
    json.created_at message.created_at.to_s(:created_at)
    json.body message.body
    json.image message.image.url
  end
end
