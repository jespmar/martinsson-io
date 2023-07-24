#rsync -avh --include='*/' --include='*.jpg' --include='*.png' --include='*.gif' --include='*.jpeg' --include='*.svg' --exclude='*' _posts/ public/assets/blog

cd _posts
find . -name '*.jpg' | cpio -pdm  ../public/assets/blog
cd ../
