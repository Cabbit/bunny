FROM ruby:2.3.1
MAINTAINER david.roy@cabbit.co.uk

ENV REFRESHED_AT 2015-03-13
ENV NODE_ENV=development

# Update repo
RUN apt-get -y update

# Install node and npm
RUN apt-get install sudo
RUN curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
RUN sudo apt-get install -y nodejs
RUN npm cache clean
RUN npm install -g n
RUN n stable
RUN curl -L https://npmjs.org/install.sh | sh

RUN mkdir -p /var/www/bunny

# Copy the app code
COPY . /var/www/bunny

# Change workdir
WORKDIR /var/www/bunny

# Expose port 5000
EXPOSE 5000

RUN ln -fs /usr/bin/nodejs /usr/local/bin/node

# Gem setup
RUN gem install foreman
RUN bundle install
RUN npm install

# Run goliath in production mode
CMD ["/bin/bash","-c", "bundle exec foreman start"]
