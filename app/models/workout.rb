class Workout < ActiveRecord::Base
	has_many :saved_workouts
  has_many :users, through: :saved_workouts
end
