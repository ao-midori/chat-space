class MessagesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_group, only: [:index, :create]

  def index
    @message = Message.new
    @messages = @group.messages
    @users = @group.users
  end

  def create
    @message = Message.create(message_params)
    redirect_to group_messages_path
  end

  private
  def message_params
    params.require(:message).permit(:body).merge(user_id: current_user.id, group_id: params[:group_id])
  end

  def set_group
    @group = Group.find(params[:group_id])
  end

end
