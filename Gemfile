# frozen_string_literal: true

source "https://rubygems.org"
gemspec

# Jekyll <= 4.2.0 compatibility with Ruby 3.0
gem "webrick", "~> 1.7"


group :jekyll_plugins do
  gem "jekyll-paginate", "~> 1.1"
  gem "jekyll-seo-tag", "~> 2.7"
end

# bundle the tzinfo-data gem and associated library for win and Jruby
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
