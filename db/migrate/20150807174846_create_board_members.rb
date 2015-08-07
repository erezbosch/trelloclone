class CreateBoardMembers < ActiveRecord::Migration
  def change
    create_table :board_members do |t|
      t.integer :user_id, null: false, index: true
      t.integer :board_id, null: false, index: true

      t.timestamps null: false
    end
    add_index :board_members, [:user_id, :board_id], unique: true
  end
end
