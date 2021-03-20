class Api::LocationsController < ApplicationController

  def index
    @locations = Location.all
    render json: @locations
  end
  
  def create

    @activity = Activity.find params[:activity_id]

    location = @activity.locations.create!(
      title: params[:title],
      description: params[:description],
      latitude: params[:latitude],
      longitude: params[:longitude],
      image: params[:image]
    )

    @user = User.find(params[:user_id])
    @user.favourites.create!(
      location_id: location.id
    )

  end

end
