class AddLocationRefToFavourites < ActiveRecord::Migration[5.2]
  def change
    add_reference :favourites, :location, foreign_key: true
  end
end
