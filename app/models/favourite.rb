class Favourite < ApplicationRecord
  belong_to :user
  belongs_to :location

end
