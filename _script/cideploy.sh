#!/usr/bin/env bash

set -e

rm -rf .git
cd _site
git init
git config --global user.email $GIT_EMAIL
git config --global user.name $GIT_NAME
git remote add origin https://$GITHUB_TOKEN@github.com/$GITHUB_REPO.git
git add .
git commit -m "Deploy to GitHub Pages (travis build #$TRAVIS_BUILD_NUMBER)"
git push --force --quiet origin HEAD:gh-pages
