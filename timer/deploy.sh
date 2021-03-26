set -e

npm run build

cd ./dist


git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:wynn-w/other.git master:gh-pages

cd -