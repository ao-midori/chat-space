class MessagesController < ApplicationController
  before_action :authenticate_user!

  def index
    @message = Message.new
    @messages = Message.where(group_id: params[:group_id])
  end

  def create
    @message = Message.create(body: message_params[:body], user_id: current_user.id, group_id: params[:group_id])
  end

  private
  def message_params
    params.require(:message).permit(:body)
  end

end
