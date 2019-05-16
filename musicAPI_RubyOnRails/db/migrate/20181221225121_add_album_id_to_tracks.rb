class AddAlbumIdToTracks < ActiveRecord::Migration[5.1]
  def change
    add_column :tracks, :album_id, :integer
  end
end
