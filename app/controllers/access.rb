get '/access' do
	require_user
	erb :'access/index'
end
