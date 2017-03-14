class SavedWorkout < ActiveRecord::Base
  belongs_to :user
  belongs_to :workout

  validates_uniqueness_of :user, :scope => [:workout]
end
