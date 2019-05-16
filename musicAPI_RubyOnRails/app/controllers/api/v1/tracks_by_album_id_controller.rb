module Api 
    module V1
        class TracksByAlbumIdController < ApplicationController
            before_action :validate_api_key!

            def index
                tracks = Track.where(album_id: params[:album_id])
                render json: {status: 'SUCCESS', message:'Loaded tracks', data:tracks},status: :ok
            end


            def has_valid_api_key?
                request.headers['Api-Key'] == '24Edc29479Dsa199723dSA'
              end
      
            def validate_api_key!
                return head :forbidden unless has_valid_api_key?
            end

            private

                    def track_params
                        params.permit(:album_id)
                    end


        end
    end
end
