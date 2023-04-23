class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.string :display_name
      t.references :user, null: false, foreign_key: true, index: { unique: true }

      t.timestamps
    end
  end
end

# references: column is a foreign key with reference to user, cannot be null, and value must be unique