class CreateHousesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :houses_tables do |t|
      t.string :address, null: false
    end
  end
end
