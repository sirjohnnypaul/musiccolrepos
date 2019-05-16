module Api 
    module V1
        class AlbumsByBandIdController < ApplicationController
            before_action :validate_api_key!
            
            def index
                albums = Album.where(band_id: params[:band_id])
                render json: {status: 'SUCCESS', message:'Loaded albums', data:albums},status: :ok
            end

            def has_valid_api_key?
                request.headers['Api-Key'] == '24Edc29479Dsa199723dSA'
              end
      
              def validate_api_key!
                  return head :forbidden unless has_valid_api_key?
              end

            private

                    def album_params
                        params.permit(:bandname,:title,:body,:albumcoverurl)
                    end

                    
        end
    end
end