class Group < ApplicationRecord
  validates :name, presence: true

  accepts_nested_attributes_for :users
  has_many :users, through: :group_users
  has_many :group_users
  has_many :messages
end
