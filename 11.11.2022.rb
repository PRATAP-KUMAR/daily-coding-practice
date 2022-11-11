#!/usr/bin/ruby

def absSort(arr)
	for i in 0..arr.length-1 do
		for j in (i+1)..arr.length-1 do
			if (arr[j].to_i).abs < (arr[i].to_i).abs
				arr[j], arr[i] = arr[i], arr[j]
			elsif (arr[j].to_i).abs == (arr[i].to_i).abs
				if arr[j].to_i < arr[i].to_i
					arr[j], arr[i] = arr[i], arr[j]
				end
			end
		end
	end
	return arr
end

input = [2, -7, -2, -2, 0]
p absSort(input) # => ]0, -2, -2, 2, -7]

=begin
[admin@ANTARCTICA daily-js-practice]$ ruby 11.11.2022.rb 
[0, -2, -2, 2, -7]
=end
