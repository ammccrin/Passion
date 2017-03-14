get '/access' do
	require_user

	erb :'access/index'
end

get '/countdown' do
  @workouts = Workout.all
  @workout = @workouts.sample

  if request.xhr?
    erb :'access/count', layout: false
  else
    erb :'access/count'
  end
end

get '/workout' do
  @workouts = Workout.all
  @workout = @workouts.sample
  # Save this workout as the users workout

  if request.xhr?
    erb :'access/count', layout: false
  else
    erb :'access/count'
  end
end

post '/time' do
  @user = current_user

  if params[:time].to_i > 0
    @user.update_attribute('time', params[:time])
  end

  if request.xhr?
    erb :'access/index', layout: false
  else
    erb :'access/index'
  end
end


get '/time' do 
  @user = current_user
  @workouts = Workout.all
  @workout = @workouts.sample

  if request.xhr?
    @user.time.to_json
  end
end
