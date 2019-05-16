module Api 
  module V1
    class BandsController < ApplicationController
      before_action :validate_api_key!
      before_action :set_band, only: [:show, :update, :destroy]

      # GET /bands
      def index
        bands = Band.all

        render json: {status: 'SUCCESS', message:'Loaded bands', data:bands},status: :ok
      end

      # GET /bands/1
      def show
        band = Band.find(params[:id])
        render json: {status: 'SUCCESS', message:'Loaded band', data:band},status: :ok
      end

      # POST /bands
      def create
        @band = Band.new(band_params)

        if @band.save
          render json: @band, status: :created, location: @band
        else
          render json: @band.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /bands/1
      def update
        if @band.update(band_params)
          render json: @band
        else
          render json: @band.errors, status: :unprocessable_entity
        end
      end

      # DELETE /bands/1
      def destroy
        @band.destroy
      end

      private
        # Use callbacks to share common setup or constraints between actions.
        def set_band
          @band = Band.find(params[:id])
        end

        # Only allow a trusted parameter "white list" through.
        def band_params
          params.require(:band).permit(:name, :bio)
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