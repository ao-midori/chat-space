class GroupsController < ApplicationController
before_action :authenticate_user!

  def show_one_group
    @group = Group.find(params[:id])
  end

  def new
    @group = Group.new
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
    show_one_group
  end

  def update
    show_one_group
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

end
