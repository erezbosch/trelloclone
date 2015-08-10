class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      log_in!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Incorrect username/password combination"]
      @user = User.new
      render :new
    end
  end

  def destroy
    log_out!(current_user)
    redirect_to root_url
  end
end
