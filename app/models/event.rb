class Event < ApplicationRecord
  attr_accessor :name, :description, :capacity, :start_time, :end_time, :theme

  belongs_to :user
  belongs_to :location
end