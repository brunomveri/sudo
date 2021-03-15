class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string   :title
      t.string   :description
      t.float  :latitude
      t.float  :longitude
      t.string   :image
      t.timestamps
    end
  end
end
