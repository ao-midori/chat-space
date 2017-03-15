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
    if @group.update(group_user_params)
      redirect_to root_path, notice: "チャットグループが編集されました。"
    else
      flash.now[:alert] = "グループ編集に失敗しました。"
      render :edit
    end
  end

  def user_search
    @serch_word = params[:content]
    @users = User.where("name LIKE ?", "%" + @serch_word + "%")
    respond_to do |format|
      format.json
    end
  end

  private
  def group_user_params
    params.require(:group).permit(:name, :user_ids => [])
  end

  def set_group
    @group = Group.find(params[:id])
  end

end
