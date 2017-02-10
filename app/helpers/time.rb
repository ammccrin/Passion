def workout_time 
	t = Time.now
	hour = t.hour
	min = t.min
	desired_time = min + 30

	if hour > 12
		hour = hour - 12
	end

	if desired_time > 60
		min = desired_time % 60
		hour += 1
	end 

	if min < 10
		new_min = "0#{min}"
	end

	hour = "#{hour}"

	return hour + ":" + new_min

end

# def desired_time 
# 	Time.now + 10
# end
