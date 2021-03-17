class Api::LocationsController < ApplicationController

  def index
    @locations = Location.all
    render json: @locations
  end
  
  def create

    @activity = Activity.find params[:activity_id]

    @activity.locations.create!(
      title: params[:title],
      description: params[:description],
      latitude: params[:latitude],
      longitude: params[:longitude],
      image: params[:image]
    )

  end

end
