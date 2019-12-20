class GivngsController < ApiController
  before_action :set_givng, only: [:show, :edit, :update, :destroy]


  # GET /givngs
  # GET /givngs.json
  def index
    # @givngs = Givng.where(:user_id => 1)
    # render json: @givngs
    @givngs = Givng.all
    render json: @givngs
  end

  # GET /givngs/1
  # GET /givngs/1.json
  def show
    @givng = Givng.find(params[:id])
    # how do we include people for the group???
    # render json: event.to_json(include: {users: {include: :profile} })
    render :json => @givng.to_json(include: {groups: {include: :people}})
    #render :json => @givng, :include => [:groups] 
  end

  # GET /givngs/new
  def new
    @givng = Givng.new
  end

  # GET /givngs/1/edit
  def edit
  end

  # POST /givngs
  # POST /givngs.json
  def create
    # ATTEMPT 1
    # @givng = Givng.new(givng_params)

    # respond_to do |format|
    #   if @givng.save
    #     # format.html { redirect_to @givng, notice: 'Givng was successfully created.' }
    #     format.json { render :show, status: :created, location: @givng }
    #   else
    #     # format.html { render :new }
    #     format.json { render json: @givng.errors, status: :unprocessable_entity }
    #   end
    # end


    # ATTEMPT 2
    @givng = Givng.new(givng_params)
  
    if @givng.save
      render json: @givng, status: :created
    else
      render json: @givng.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /givngs/1
  # PATCH/PUT /givngs/1.json
  def update
    # respond_to do |format|
    #   if @givng.update(givng_params)
    #     format.html { redirect_to @givng, notice: 'Givng was successfully updated.' }
    #     format.json { render :show, status: :ok, location: @givng }
    #   else
    #     format.html { render :edit }
    #     format.json { render json: @givng.errors, status: :unprocessable_entity }
    #   end
    # end
    if @givng.update(givng_params)
      render json: @givng
    else
      render json: @givng.errors, status: :unprocessable_entity
    end
  end

  # DELETE /givngs/1
  # DELETE /givngs/1.json
  # def destroy
  #   @givng.destroy
  #   respond_to do |format|
  #     format.html { redirect_to givngs_url, notice: 'Givng was successfully destroyed.' }
  #     format.json { head :no_content }
  #   end
  # end

  def destroy
    @givng.destroy
    if @givng.destroy
      head :no_content, status: :ok
    else
      render json: @givng.errors, status: :unprocessable_entity
    end      
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_givng
      @givng = Givng.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def givng_params
      params.require(:givng).permit(:name, :theme, :user_id, :date, :budget)
    end
end
