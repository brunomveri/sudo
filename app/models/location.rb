class Location < ApplicationRecord
  attr_accessor :title, :description, :latitude, :longitude, :image

  has_many :events
  has_many :locations

  belongs_to :user
  belongs_to :activity

end
