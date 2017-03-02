require 'rails_helper'

describe Message do
  describe '#create' do

    it "is valid with a message" do
      user = build(:message)
      user.valid?
      expect(user).to be_valid
    end

    it "is invalid without a message" do
      user = build(:message, body: "")
      user.valid?
      expect(user).not_to be_valid
    end

  end
end
