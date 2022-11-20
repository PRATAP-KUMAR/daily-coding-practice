def find_duplicates(array)
    seen = []
    array.each_with_object([]) do |n, dups|
        dups << n if seen.include?(n)

        seen << n
    end
end

numbers = [1,2,2,3,4,5]

puts find_duplicates(numbers)
# [2]

