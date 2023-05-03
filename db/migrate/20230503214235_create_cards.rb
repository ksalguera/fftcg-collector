class CreateCards < ActiveRecord::Migration[7.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :serial
      t.string :type
      t.string :job
      t.integer :cost
      t.integer :power
      t.text :note
      t.belongs_to :expansion, null: false, foreign_key: true

      t.timestamps
    end
  end
end
