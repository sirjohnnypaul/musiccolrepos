class AddBandimageurlToBands < ActiveRecord::Migration[5.1]
  def change
    add_column :bands, :bandimageurl, :string
  end
end
