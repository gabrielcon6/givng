require "application_responder"

class ApplicationController < ActionController::Base
  self.responder = ApplicationResponder
  respond_to :html

    #     private
    
    # def current_user
    #   @current_user ||= User.find(session[:user_id]) if session[:user_id]
    # end
    # helper_method :current_user
    
    # def authorize
    #   redirect_to login_url, alert: "Not authorized" if current_user.nil?
    # end
    
    skip_before_action :verify_authenticity_token
     
        
    end
    