class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.integer :list_id, null: false, index: true
      t.integer :ord, null: false
      t.string :title, null: false
      t.text :description

      t.timestamps null: false
    end
    add_index :cards, :ord, unique: true
  end
end
