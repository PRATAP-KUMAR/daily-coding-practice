#!/usr/bin/ruby

class Calculator
	def initialize(num1,num2)
		@num1 = num1
		@num2 = num2
	end
	
	def sum
		@num1+@num2
	end
	
	def difference
		@num1-@num2
	end
	
	def multiplication
		@num1*@num2
	end
	
	def divide
		@num1.fdiv(@num2)
	end
	
	def modulo
		@num1.modulo(@num2)
	end
end

calculator = Calculator.new(10, 3)

puts calculator.sum
puts calculator.difference
puts calculator.multiplication
puts calculator.divide
puts calculator.modulo


