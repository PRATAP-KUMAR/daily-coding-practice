#!/usr/bin/ruby

=begin

1. Re-inventing multiplication
In this challenge, write a function in Ruby that takes two parameters, both of them are numbers. The function should multiply the numbers and return the result, but there’s a catch. You’re not allowed to use the * symbol.

=end

def divideby2(num)
    if(num < 2)
        return 0
    else
        return 1 + divideby2(num - 2)
    end
end

def multi_with_out_into(num1, num2)
    square = (num1 + num2) ** 2
    num1_square = ((num1) ** 2)
    num2_square = (num2) ** 2
    
    val = (square - num1_square - num2_square)
    
    if(val >= 0)
        ans = divideby2(val)
    else
        ans = 0 - divideby2((val).abs)
    end
    return ans
end

num1 = 13
num2 = -2

puts multi_with_out_into(num1, num2) # => -10

=begin
[admin@ANTARCTICA daily-js-practice]$ ruby 13-11-2022.rb 
-26
=end


