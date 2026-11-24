# SEELI — landing page

Trang giới thiệu tĩnh tại **https://seeli.tunnaduong.com** (tiếng Việt / 日本語, đổi bằng nút trên cùng hoặc `?lang=ja`).

- Một file `index.html`, không cần build. Font từ Google Fonts.
- Chạy trên Raspberry Pi: Cloudflare Tunnel → nginx aaPanel → `/www/wwwroot/seeli.tunnaduong.com`.
- File nginx: `/www/server/panel/vhost/nginx/seeli.tunnaduong.com.conf` (viết tay, không hiện trong danh sách Website của aaPanel).

## Deploy
```bash
rsync -az --exclude .DS_Store --exclude README.md ./ pi@<server>:/www/wwwroot/seeli.tunnaduong.com/
```
