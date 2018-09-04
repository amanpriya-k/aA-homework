class RenameTables < ActiveRecord::Migration[5.2]
  def change
    rename_table :houses_tables, :houses
    rename_table :people_tables, :people
  end
end
