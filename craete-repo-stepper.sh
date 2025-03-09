#!/bin/bash

# Prompt the user for the repository name
read -p "Enter the repository name: " repo_name

# Echo each step and ask for confirmation before proceeding
echo "Initializing local Git repository..."
read -p "Proceed? (y/n) " choice
if [ "$choice" != "y" ]; then
  echo "Exiting."
  exit 1
fi
git init

echo "Configuring user name..."
read -p "Proceed? (y/n) " choice
if [ "$choice" != "y" ]; then
  echo "Exiting."
  exit 1
fi
git config user.name "albertprofe"

echo "Configuring user email..."
read -p "Proceed? (y/n) " choice
if [ "$choice" != "y" ]; then
  echo "Exiting."
  exit 1
fi
git config user.email "albertprofe@gmail.com"

echo "Creating remote repository on GitHub..."
read -p "Proceed? (y/n) " choice
if [ "$choice" != "y" ]; then
  echo "Exiting."
  exit 1
fi
gh repo create "$repo_name" --public

echo "Adding remote origin..."
read -p "Proceed? (y/n) " choice
if [ "$choice" != "y" ]; then
  echo "Exiting."
  exit 1
fi
git remote add origin "https://github.com/AlbertProfe/$repo_name.git"

echo "Adding all files to the staging area..."
read -p "Proceed? (y/n) " choice
if [ "$choice" != "y" ]; then
  echo "Exiting."
  exit 1
fi
git add .

echo "Committing changes with message 'first commit'..."
read -p "Proceed? (y/n) " choice
if [ "$choice" != "y" ]; then
  echo "Exiting."
  exit 1
fi
git commit -m "first commit"

echo "Pushing to remote repository..."
read -p "Proceed? (y/n) " choice
if [ "$choice" != "y" ]; then
  echo "Exiting."
  exit 1
fi
git push -u origin master

echo "All steps completed."

