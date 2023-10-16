#!bash

tag=$(date '+%d%m%Y_%H%M');
image_name=fdenisnascimento/bible-api

docker build --platform=linux/amd64 -t $image_name .
docker push $image_name

git add .
git commit -am "new release"
git push origin main --force


echo "Criando tag release_$tag"
git tag release_$tag
echo "enviando tag release_$tag para git"
git push --tags






