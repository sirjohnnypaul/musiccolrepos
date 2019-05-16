class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.string :title
      t.text :body
      t.string :albumcoverurl

      t.timestamps
    end
  end
end
