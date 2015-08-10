class Api::ListsController < ApplicationController
  def create
    board = Board.find(params[:board_id])
    @list = board.lists.new(list_params)
    @list.ord = -1
    if @list.save
      @list.update(ord: @list.id)
      render json: @list
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    render json: @list
  end

  def update
    @list = List.find(params[:id])
    if @list.update(list_params)
      render json: @list
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  private
  def list_params
    params.require(:list).permit(:title, :ord)
  end
end
