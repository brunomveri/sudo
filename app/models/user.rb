class User < ApplicationRecord
  attr_accessor :name, :email, :password

  has_many :favourites
  has_many :events

  validates :user, presence: true
end