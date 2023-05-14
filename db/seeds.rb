puts 'seeding database'

# variant seeds

variant_list = ['Normal', 'Normal Foil', 'Special', 'Special Foil', 'Full Art', 'Full Art Foil']

variant_list.each { |variant| Variant.create!(name: variant) }

puts 'seeding complete'