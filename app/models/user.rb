class User < ActiveRecord::Base

  validates :username, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }

	has_many :saved_workouts
  has_many :workouts, through: :saved_workouts

  has_secure_password
end
