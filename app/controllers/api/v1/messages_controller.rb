class Api::V1::MessagesController < ApplicationController
  before_action :set_channel
  # skip_before_action :authenticate_user!, :only => [:api, :index]

  def index
    messages = Message.where(channel: @channel)
    render json: messages
  end

  def create
    message = Message.new(content: params[:content])
    message.channel = @channel
    message.user = current_user
    message.save
    render json: message
  end

  private

  def set_channel
    @channel = Channel.find_by(name: params[:channel_id])
  end
end
