module Api 
    module V1
        class BandnameByBandIdController < ApplicationController
            before_action :validate_api_key!
            before_action :set_album, only: [:show, :update, :destroy]
    

            def index
                bandname = Band.where(id: params[:id]).select(:name).take
                render json: {status: 'SUCCESS', message:'Loaded band', data:bandname},status: :ok
            end

            def set_band
                @band = Band.find(params[:id])
              end
      
              # Only allow a trusted parameter "white list" through.
              def band_params
                params.require(:band).permit(:id, :name, :bio)
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
