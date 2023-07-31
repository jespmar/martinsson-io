#rsync -avh --include='*/' --include='*.jpg' --include='*.png' --include='*.gif' --include='*.jpeg' --include='*.svg' --exclude='*' _posts/ public/assets/blog

cd _posts
find . -name '*.jpg' | cpio -pdm  ../public/assets/blog
find . -name '*.png' | cpio -pdm  ../public/assets/blog
cd ../
cd _pages
find . -name '*.jpg' | cpio -pdm  ../public/assets/pages
cd ../
