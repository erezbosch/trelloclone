class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.integer :card_id, null: false, index: true
      t.boolean :done, default: false
      t.string :title, null: false

      t.timestamps null: false
    end
  end
end
