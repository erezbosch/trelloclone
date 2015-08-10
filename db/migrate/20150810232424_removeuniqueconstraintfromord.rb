class Removeuniqueconstraintfromord < ActiveRecord::Migration
  def change
    remove_index :lists, :ord
    remove_index :cards, :ord
  end
end
