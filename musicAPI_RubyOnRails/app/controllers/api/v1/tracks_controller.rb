module Api 
  module V1
    class TracksController < ApplicationController
      before_action :validate_api_key!
      before_action :set_track, only: [:show, :update, :destroy]

      # GET /tracks
      def index
        tracks = Track.all

        render json: {status: 'SUCCESS', message:'Loaded tracks', data:tracks},status: :ok
      end

      # GET /tracks/1
      def show
        render json: {status: 'SUCCESS', message:'Loaded track', data:track},status: :ok
      end

      # POST /tracks
      def create
        @track = Track.new(track_params)

        if @track.save
          render json: @track, status: :created, location: @track
        else
          render json: @track.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /tracks/1
      def update
        if @track.update(track_params)
          render json: @track
        else
          render json: @track.errors, status: :unprocessable_entity
        end
      end

      # DELETE /tracks/1
      def destroy
        @track.destroy
      end

      private
        # Use callbacks to share common setup or constraints between actions.
        def set_track
          @track = Track.find(params[:id])
        end

        # Only allow a trusted parameter "white list" through.
        def track_params
          params.require(:track).permit(:title, :time, :youtubeurl, :album_id)
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
