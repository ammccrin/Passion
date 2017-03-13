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
    erb :'workout', layout: false
  else
    erb :'access/count'
  end
end


post '/time' do
  time = params[:time]
  t = time.to_i

  if request.xhr?
    t.to_json
  else
    erb :'access/index', locals: {time: t}
  end
end
