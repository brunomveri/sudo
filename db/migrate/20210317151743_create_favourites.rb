class CreateFavourites < ActiveRecord::Migration[5.2]
  def change
    create_table :favourites do |t|

      t.timestamps
    end
  end
end
