# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # origins "*" is dangerous since it allows anyone to post
    # however, have not found another workaround for this
    origins "*"
    resource "/api/v1/tasks",
          :headers => :any,
          :methods => [:post, :put, :delete, :get]
    resource "/api/v1/tasks/*",
              :headers => :any,
              :methods => [:put, :delete]
    resource "/api/v1/tags",
                      :headers => :any,
                      :methods => [:post, :put]
    resource "/api/v1/tags/*",
                  :headers => :any,
                  :methods => [:delete]
    resource "*",
      :headers => :any,
      :methods => [:get, :patch, :options, :head]
  end
end
