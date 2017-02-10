def current_user
  @user ||= User.find_by(id: session[:user_id])
end

def require_user
  redirect '/users/new' unless current_user
end

#used for if then statements!
def login?
  !!current_user
end

def authorized_user(object_owner)
  redirect '/' unless  (current_user == object_owner)
end


