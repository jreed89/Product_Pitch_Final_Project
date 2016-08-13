require "open-uri"
require "Nokogiri"



doc = Nokogiri::HTML(File.open("b_chain.html")) do |config|
config.options = Nokogiri::XML::ParseOptions::NOBLANKS
end

# puts doc

puts tableData = doc.css("table")

puts allTitles = doc.css('td li i').text



# allTitles = doc.css('td i').each do |item|
#   title = item.at_css('a').text
#   puts "Titles is: #{title}"
# end
