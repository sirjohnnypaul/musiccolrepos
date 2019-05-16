module Api 
  module V1
    class AlbumsController < ApplicationController
      before_action :validate_api_key!
      before_action :set_album, only: [:show, :update, :destroy]

      # GET /albums
      def index
        albums = Album.all

        render json: {status: 'SUCCESS', message:'Loaded albums', data:albums},status: :ok
      end

      # GET /albums/1
      def show
        album = Album.find(params[:id])
        render json: {status: 'SUCCESS', message:'Loaded album', data:album},status: :ok
      end

      # POST /albums
      def create
        @album = Album.new(album_params)

        if @album.save
          render json: @album, status: :created, location: @album
        else
          render json: @album.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /albums/1
      def update
        if @album.update(album_params)
          render json: @album
        else
          render json: @album.errors, status: :unprocessable_entity
        end
      end

      # DELETE /albums/1
      def destroy
        @album.destroy
      end

      private
        # Use callbacks to share common setup or constraints between actions.
        def set_album
          @album = Album.find(params[:id])
        end

        # Only allow a trusted parameter "white list" through.
        def album_params
          params.require(:album).permit(:id, :title, :body, :albumcoverurl, :band_id)
        end

        def has_valid_api_key?
          request.headers['Api-Key'] == '24Edc29479Dsa199723dSA'
        end

        def validate_api_key!
            return head :forbidden unless has_valid_api_key?
        end
    end
  end
end