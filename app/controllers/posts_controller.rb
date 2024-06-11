class PostsController < ApplicationController
  def index
  end

  def new
    @post = Post.new
    @google_maps_api_key = ENV['GOOGLE_MAPS_API_KEY']
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to @post, notice: 'Post was successfully created.'
    else
      render :new
    end
  end


  private

  def post_params
    params.require(:post).permit(:image, :name, :latitude, :longitude)
  end
end