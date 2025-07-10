#!/bin/bash

echo "Checking for changes in schema.prisma..."

# Fetch the changes between the latest commit and the previous one for schema.prisma
CHANGES=$(git diff --name-only HEAD~1 HEAD -- schema.prisma)

if [ "$CHANGES" != "" ]; then
    echo "Changes detected in schema.prisma. Running Prisma migrations..."
    # Run Prisma Migrate Deploy
    npx prisma migrate deploy --preview-feature
else
    echo "No changes detected in schema.prisma. Skipping migrations."
fi
