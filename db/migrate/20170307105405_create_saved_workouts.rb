class CreateSavedWorkouts < ActiveRecord::Migration
  def change
  	create_table :saved_workouts do |t|
      t.references :user, null: false
      t.references :workout, null: false

      t.timestamps
    end
  end
end
