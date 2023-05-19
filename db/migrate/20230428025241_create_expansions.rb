class CreateExpansions < ActiveRecord::Migration[7.0]
  def change
    create_table :expansions do |t|
      t.string :name
      t.date :release_date

      t.timestamps
    end
  end
end
