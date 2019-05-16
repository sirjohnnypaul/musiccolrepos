class AddBandIdToMembers < ActiveRecord::Migration[5.1]
  def change
    add_column :members, :band_id, :integer
  end
end
