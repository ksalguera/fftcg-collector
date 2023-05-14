class CreateCollections < ActiveRecord::Migration[7.0]
  def change
    create_table :collections do |t|
      t.string :variant
      t.belongs_to :profile, null: false, foreign_key: true
      t.belongs_to :card, null: false, foreign_key: true

      t.timestamps
    end
  end
end
