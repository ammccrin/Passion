class AddUsersTime < ActiveRecord::Migration
  def change
  	add_column :users, :time, :integer, :default => 30
  end
end
