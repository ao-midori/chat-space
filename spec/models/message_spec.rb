require 'rails_helper'

describe Message do
  describe '#create' do

    it "is valid with a body" do
      message = build(:message)
      message.valid?
      expect(message).to be_valid
    end

    it "is invalid without a body" do
      message = build(:message, body: "")
      message.valid?
      expect(message).not_to be_valid
    end

  end
end
