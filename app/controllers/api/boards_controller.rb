class Api::BoardsController < ApplicationController
  def index
    @boards = Board.order(:id)
    render json: @boards
  end

  def create
    @board = Board.new(board_params)
    @board.user = current_user
    if @board.save
      render json: @board
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def destroy
    @board = Board.find(params[:id])
    @board.destroy
    render json: @board
  end

  def show
    @board = Board.find(params[:id])
    render json: @board
  end

  def update
    @board = Board.find(params[:id])
    if @board.update(board_params)
      render json: @board
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  private
  def board_params
    params.require(:board).permit(:title)
  end
end
