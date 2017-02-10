class Workouts < ActiveRecord::Migration
  def change
    create_table :workouts do |t|
      t.string :workout
      t.string :body
      t.references :user
      t.string :url

      t.timestamps
    end
  end
end
