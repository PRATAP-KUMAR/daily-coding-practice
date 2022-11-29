# https://www.hackerrank.com/challenges/the-time-in-words/problem?isFullScreen=true

def timeInWords(h, m)
    # Write your code here
    puts h.to_s + ' hours ' + m.to_s + ' minutes'
end

timeInWords(5, 47)
# => thirteen minutes to six

timeInWords(3, 00)
# => three o' clock

timeInWords(7, 15)
# => quarter past seven