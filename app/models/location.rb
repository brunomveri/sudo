class Location < ApplicationRecord
  belongs_to :activity
  has_many :favourites
  has_many :users, through: :favourites
end
