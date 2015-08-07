class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.string :title, null: false
      t.integer :ord, null: false
      t.integer :board_id, null: false, index: true

      t.timestamps null: false
    end
    add_index :lists, :ord, unique: true
  end
end
