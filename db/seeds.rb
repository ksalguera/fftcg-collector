puts 'seeding database'

# variant seeds

variant_list = ['normal', 'normal_foil', 'special', 'special_foil', 'full_art', 'full_art_foil']

variant_list.each { |variant| Variant.create!(name: variant) }

puts 'seeding complete'