class EventsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :events, force: :cascade do |t|
      t.references :user, index: true, foreign_key: true
      t.references :location, index: true, foreign_key: true
      t.string   :name
      t.string   :description
      t.integer  :capacity
      t.datetime :start_time, null: false
      t.datetime :end_time, null: false
      t.string   :theme
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end
  end
end
