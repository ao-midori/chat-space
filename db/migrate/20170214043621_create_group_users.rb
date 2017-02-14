class CreateGroupUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :group_users do |t|
      t.references :user_id, null: false
      t.references :group_id, null: false
      t.timestamps
    end
  end
end
