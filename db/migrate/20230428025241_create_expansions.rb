class CreateExpansions < ActiveRecord::Migration[7.0]
  def change
    create_table :expansions do |t|
      t.string :name
      t.date :release_date
      t.integer :total_cards
      t.integer :normal_cards
      t.integer :normal_foil_cards
      t.integer :special_cards
      t.integer :special_foil_cards
      t.integer :full_art_regular_cards
      t.integer :full_art_foil_cards

      t.timestamps
    end
  end
end
