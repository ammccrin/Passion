class User < ActiveRecord::Base

  validates :username, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }

  has_many :workouts

  has_secure_password
end
