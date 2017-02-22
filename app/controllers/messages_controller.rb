class MessagesController < ApplicationController
  before_action :authenticate_user!

  def index
    @message = Message.new
    @group = Group.find(params[:group_id])
    @messages = @group.messages
  end

  def create
    @message = Message.create(message_params)
    redirect_to group_messages_path
  end

  private
  def message_params
    params.require(:message).permit(:body).merge(user_id: current_user.id, group_id: params[:group_id])
  end

end
