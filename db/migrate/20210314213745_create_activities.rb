class CreateActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :activities, force: :cascade do |t|
      t.string   :name
      t.string   :icon
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end  
  end
end
