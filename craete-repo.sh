#!/bin/bash

# Prompt the user for the repository name
read -p "Enter the repository name: " repo_name

echo "Initializing local Git repository..."
git init

echo "Configuring user name..."
git config user.name "albertprofe"

echo "Configuring user email..."
git config user.email "albertprofe@gmail.com"

echo "Creating remote repository on GitHub..."
gh repo create "$repo_name" --public

echo "Adding remote origin..."
git remote add origin "https://github.com/AlbertProfe/$repo_name.git"

echo "Adding all files to the staging area..."
git add .

echo "Committing changes with message 'first commit'..."
git commit -m "first commit"

echo "Pushing to remote repository..."
git push -u origin master

echo "All steps completed."

