class CreateReadings < ActiveRecord::Migration[6.1]
  def change
    create_table :readings do |t|
      t.string :question
      t.string :card1
      t.string :card2
      t.string :card3
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
