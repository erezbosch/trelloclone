class Api::CardsController < ApplicationController
  def create
    @card = Card.new(card_params)
    @card.ord = -1
    if @card.save
      @card.update(ord: @card.id)
      render json: @card
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def destroy
    @card = Card.find(params[:id])
    @card.destroy
    render json: @card
  end

  def update
    @card = Card.find(params[:id])
    if @card.update(card_params)
      render json: @card
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  private
  def card_params
    params.require(:card).permit(:title, :description, :ord)
  end
end
