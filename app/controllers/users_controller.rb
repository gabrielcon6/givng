class UsersController < ApiController 
  # before_action :set_user, only: [:show, :edit, :update, :destroy]
  before_action :authorize_request, only: [
        :get_by_id, :update_user, :delete_user
    ]

  # GET /users
  # GET /users.json
  def index
    @users = User.all
    render json: @users

  end

  # GET /users/1
  # GET /users/1.json
  def show
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users
  # POST /users.json


# will be used to register a new user
  def create_user
      userParams = params.require(:user)
        .permit(:name, :email, :password, :password_confirmation)
      user = User.new(userParams);
        if user.save()
            render json: user, status: :created 
        else
            render json: { errors: user.errors.full_messages }, 
                   status: :unprocessable_entity
        end
  end
  # def create
  #   form_params = get_create_user_form_params()

  #   @user = User.new(form_params)
  #   if @user.save
  #       session[:user_id] = @user.id
  #       redirect_to root_url, notice: "Thank you for signing up!"
  #   end 
  # end

# will be used to get details for a given user
  def get_by_id
 
      # the user_id param comes from our route
      user = User.find(params[:user_id])
        
        if user
            render json: { id: user.id, name: user.name, email: user.email},
                   status: :ok
        else
            render json: { errors: 'User not found' }, status: :not_found
        end
  end

  def get_token
     # Get the user by email
        user = User.find_by_email(params[:email])
 
        # return unauthorized if the user was not found
        if !user
            render json: { error: 'unauthorized' }, status: :unauthorized
            return
        end
 
        # if the user is not authenticated via the authenticate method
        # then return unauthorized
        if !user.authenticate( params[:password] )
            render json: { error: 'unauthorized' }, status: :unauthorized
            return
        end

        # if our code gets here, we can generate a token and response.
        # JWT's include an expiry, we will expire the token in 24 hours
        token = jwt_encode({user_id: user.id}, 24.hours.from_now)
        puts('USER:' + user.to_json)
        puts('TOKEN:' + token)
        render json: {token: token, exp: 24, username: user.email, userId: user.id},
               status: :ok
  end
  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    # respond_to do |format|
    #   if @user.update(user_params)
    #     format.html { redirect_to @user, notice: 'User was successfully updated.' }
    #     format.json { render :show, status: :ok, location: @user }
    #   else
    #     render "new"
    # end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    # @user.destroy
    # respond_to do |format|
    #   format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
    #   format.json { head :no_content }
    # end
  end

  # private
  #   def get_create_user_form_params
  #     params.require(:user).permit(:email, :password, :password_confirmation)
  #   end

  # end

end