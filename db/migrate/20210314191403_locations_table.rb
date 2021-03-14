class LocationsTable < ActiveRecord::Migration[5.2]
  def change
    
    create_table :activities, force: :cascade do |t|
      t.string   :name
      t.string   :icon
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end  

    create_table :locations, force: :cascade do |t|
      t.references :user, index: true, foreign_key: true
      t.references :activity, index: true, foreign_key: true
      t.string   :title
      t.string   :description
      t.integer  :latitude
      t.integer  :longitude
      t.string   :image
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end
  end
end
