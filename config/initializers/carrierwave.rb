CarrierWave.configure do |config|

  if Rails.env.test?
    config.storage = :file
  else
    config.storage = :fog
    config.fog_credentials = {
      :provider               => 'AWS',
      :aws_access_key_id      =>  ENV['ACCESS_KEY_ID'],
      :aws_secret_access_key  => ENV['SECRET_ACCESS_KEY'],
      :region                 => ENV['REGION']
    }

    case Rails.env
    when 'development'
        config.fog_directory  = ENV['DEV_DIRECTORY']
        config.asset_host = ENV['DEV_HOST']
    when 'production'
        config.fog_directory  = ENV['PRO_DIRECTORY']
        config.asset_host = ENV['PRO_HOST']
    end
  end
end
