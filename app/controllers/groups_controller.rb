class GroupsController < ApplicationController
before_action :authenticate_user!

  def new
    @group = Group.new
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to root_path, notice: "チャットグループが作成されました。"
    else
      render 'new'
    end
  end

  private
  def group_params
    params.require(:group).permit(:name)
  end

end
