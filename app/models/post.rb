class Post < ApplicationRecord
  has_one_attached :image
  before_save :geocode_location

  private

  def geocode_location
    results = Geocoder.search(name)
    if results.first
      self.latitude = results.first.coordinates[0]
      self.longitude = results.first.coordinates[1]
    end
  end
end