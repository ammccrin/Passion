get '/users/new' do
  if request.xhr?
    erb :'users/new', layout: false
  else
    erb :'users/new'
  end
end

post '/users/new' do
  @user = User.new(params)
  if @user.save
    session[:user_id] = @user.id
    redirect '/access'
  else
    @errors = @user.errors.full_messages
    erb :'users/new'
  end
end

get '/users/login' do
  if request.xhr?
    erb :'users/login', layout: false
  else
    erb :'users/login'
  end
end

post '/users/login' do
  @user = User.find_by(username: params[:username])
  if @user && @user.authenticate(params[:password])
    session[:user_id] = @user.id
    redirect '/access'
  else
    @errors = ["Username and Password don't match"]
    erb :'users/login'
  end
end

get '/users/logout' do
  session[:user_id] = nil
  redirect '/'
end

get '/users/:id' do
  require_user
  @user = current_user
  @workouts = current_user.workouts

  if request.xhr?
    erb :'users/show', layout: false
  else
    erb :'users/show'
  end
end

post '/workout/new' do
  workout = Workout.find(params[:workout])
  SavedWorkout.create(workout_id: workout.id, user_id: current_user.id)
  redirect "users/#{current_user.id}"  
end
