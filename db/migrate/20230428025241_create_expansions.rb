class CreateExpansions < ActiveRecord::Migration[7.0]
  def change
    create_table :expansions do |t|
      t.string :name
      t.date :release_date
      t.integer :total_cards
      t.integer :normal, default: 0
      t.integer :normal_foil, default: 0
      t.integer :special, default: 0
      t.integer :special_foil, default: 0
      t.integer :full_art, default: 0
      t.integer :full_art_foil, default: 0

      t.timestamps
    end
  end
end
