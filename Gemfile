source 'https://rubygems.org'

# PostgreSQL driver
ruby "2.1.5"

gem "sinatra-activerecord"
gem 'sinatra-flash'
gem 'sinatra-redirect-with-flash'

group :development do
 gem 'sqlite3'
 gem "tux"
end

group :production do
 gem 'pg'
end


# Sinatra driver
gem 'sinatra', '~>1.4'
gem 'sinatra-contrib'

gem 'activesupport', '~>4.2.0'
gem 'activerecord', '~>4.2.0'

gem 'rake'

gem 'rack', '1.5.2'
gem 'shotgun'
gem 'pry'
gem 'bcrypt'


group :test do
  gem 'shoulda-matchers'
  gem 'rack-test'
  gem 'rspec', '~>3.0'
  gem 'capybara'
  gem 'database_cleaner'
  gem 'factory_girl'
  gem 'faker'
end
