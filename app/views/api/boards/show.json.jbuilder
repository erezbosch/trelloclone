json.(@board, :id, :title, :user_id)
json.lists @board.lists do |list|
  json.(list, :id, :title, :ord, :board_id)
  json.cards list.cards do |card|
    json.(card, :id, :list_id, :ord, :title, :description)
  end
end
