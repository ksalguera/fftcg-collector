class CreateCardVariants < ActiveRecord::Migration[7.0]
  def change
    create_table :card_variants do |t|
      t.integer :card_id
      t.integer :variant_id

      t.timestamps
    end
  end
end
