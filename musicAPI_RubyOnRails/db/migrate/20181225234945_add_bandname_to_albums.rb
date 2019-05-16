class AddBandnameToAlbums < ActiveRecord::Migration[5.1]
  def change
    add_column :albums, :bandname, :string
  end
end
