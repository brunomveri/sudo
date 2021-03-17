class AddActivityRefToLocations < ActiveRecord::Migration[5.2]
  def change
    add_reference :locations, :activity, foreign_key: true
  end
end
