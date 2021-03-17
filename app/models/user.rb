class User < ApplicationRecord
  has_many :favourites
  has_many :locations, through: :favourites
end
