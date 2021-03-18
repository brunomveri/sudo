class Api::FavouritesController < ApplicationController

  before_action :set_user!

  def index
    @favourites = @user.favourites
    render json: @favourites
  end

  def create
    @user.favourites.create!(
      location_id: params[:location_id]
    )
  end

  def destroy
    @favourite = Favourite.find_by(location_id: params[:id])
    @favourite.destroy
  end

  private
  def set_user!
    @user = User.find(params[:user_id])
  end

end
