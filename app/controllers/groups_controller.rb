class GroupsController < ApplicationController
before_action :authenticate_user!
before_action :set_group, only: [:edit, :update]

  def new
    @group = Group.new
  end

  def create
    @group = Group.new(group_user_params)
    if @group.save
      redirect_to root_path, notice: "新しいチャットグループが作成されました。"
    else
      flash.now[:alert] = "グループ作成に失敗しました。"
      render :new
    end
  end

  def edit
  end

  def update
    if @group.update(group_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private
  def group_params
    params.require(:group).permit(:name)
  end

  def group_user_params
    params.require(:group).permit(:name, :user_ids => [])
  end

  def set_group
    @group = Group.find(params[:id])
  end

end
