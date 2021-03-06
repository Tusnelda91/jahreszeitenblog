class PostsController < ApplicationController
    before_action :find_post, only: [:edit, :show, :update, :destroy]
    before_action :authenticate_user!, except: [:index, :show]
    
    def index
        @posts = Post.paginate(:page => params[:page], :per_page =>5).order('id ASC')
        #@posts = Post.all
    end
    
    def create
        @post = Post.new(post_params)
        
        if @post.save
            redirect_to posts_path
        else
            render "new"
        end
    end
    
    def new
        @post = Post.new
    end
    
    def edit
    end
    
    def show
    end
    
    def update
      if @post.update_attributes(post_params)
          redirect_to posts_path
      else
          render "edit"
      end
    end
    
    def destroy
        @post.destroy
        redirect_to posts_path
    end
    
    private
    
    def post_params
        params.require(:post).permit(:title, :content, :slug)
    end
    
    def find_post
        @post = Post.friendly.find(params[:id])
    end
    
end
