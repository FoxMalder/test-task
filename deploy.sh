#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

npm run build

cd ../dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/FoxMalder/test-task.git master:gh-pages

cd -