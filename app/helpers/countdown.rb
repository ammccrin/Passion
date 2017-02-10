def countdown (time)
	minutes = time
	seconds = 0

	puts "#{minutes}" + ':' + "#{seconds}0"
	sleep 1

	minutes = time - 1
	seconds = 60

	until minutes == -1
		seconds -= 1

		min_string = "#{minutes}"
		sec_string = "#{seconds}"

		if seconds < 10
			sec_string = "0#{seconds}"
		end

		if minutes == 0 
			min_string = ''
		end

		puts min_string + ':' + sec_string

		if seconds == 0
			minutes -= 1
			seconds = 60
		end

		sleep 1
	end
	return true
end