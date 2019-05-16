class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.string :title
      t.string :time
      t.string :youtubeurl

      t.timestamps
    end
  end
end
