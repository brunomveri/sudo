class Api::LocationsController < ApplicationController
  def index
    @locations = Location.all
    render json: {
      message: @locations
    }
  end
end
