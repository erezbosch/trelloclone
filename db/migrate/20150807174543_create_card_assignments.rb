class CreateCardAssignments < ActiveRecord::Migration
  def change
    create_table :card_assignments do |t|
      t.integer :card_id, null: false, index: true
      t.integer :user_id, null: false, index: true

      t.timestamps null: false
    end
    add_index :card_assignments, [:card_id, :user_id], unique: true
  end
end
