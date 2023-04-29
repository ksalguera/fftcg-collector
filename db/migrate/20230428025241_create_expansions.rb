class CreateExpansions < ActiveRecord::Migration[7.0]
  def change
    create_table :expansions do |t|
      t.string :name
      t.date :release_date
      t.integer :total_cards
      t.integer :normal
      t.integer :normal_foil
      t.integer :special
      t.integer :special_foil
      t.integer :full_art
      t.integer :full_art_foil

      t.timestamps
    end
  end
end
