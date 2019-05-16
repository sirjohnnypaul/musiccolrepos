class CreateMembers < ActiveRecord::Migration[5.1]
  def change
    create_table :members do |t|
      t.string :name
      t.string :surname
      t.string :photourl

      t.timestamps
    end
  end
end
