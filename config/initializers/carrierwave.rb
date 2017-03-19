CarrierWave.configure do |config|

  if Rails.env.test?
    config.storage = :file
  else
    config.storage = :fog
    config.fog_credentials = {
      :provider               => 'AWS',
      :aws_access_key_id      =>  ENV['ACCESS_KEY_ID'],
      :aws_secret_access_key  => ENV['SECRET_ACCESS_KEY'],
      :region                 => 'ap-northeast-1'
    }

    case Rails.env
    when 'development'
        config.fog_directory  = 'tech-chat-dev'
        config.asset_host = 'https://s3-ap-northeast-1.amazonaws.com/tech-chat-dev'
    when 'production'
        config.fog_directory  = 'tech-chat-pro'
        config.asset_host = 'https://s3-ap-northeast-1.amazonaws.com/tech-chat-pro'
    end
  end
end
