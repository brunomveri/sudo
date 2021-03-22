class Location < ApplicationRecord
  belongs_to :activity
  has_many :favourites, dependent: :destroy
  has_many :users, through: :favourites
end
