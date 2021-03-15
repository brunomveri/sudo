class Api::LocationsController < ApplicationController
  def index
    puts 'Hello'
    @locations = Location.all
    render :json => {
      message: @locations
    }
  end
end
