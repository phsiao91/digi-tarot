class CreateUserCards < ActiveRecord::Migration[6.1]
  def change
    create_table :user_cards do |t|
      t.integer :card1
      t.integer :card2
      t.integer :card3
      t.belongs_to :reading, null: false, foreign_key: true

      t.timestamps
    end
  end
end
