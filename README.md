# SEELI — landing page

Trang giới thiệu tĩnh tại **https://seeli.cam** (tiếng Việt / 日本語, đổi bằng nút trên cùng hoặc `?lang=ja`).

- `index.html`, `privacy.html`, không cần build. Font từ Google Fonts.
- Chạy trên Cloudflare Workers (static assets), Worker `seeli-web` (`wrangler.jsonc`, `src/worker.js`).
- `www.seeli.cam`, `seeli.tunnaduong.com` và `http://` đều chuyển hướng 301 về `https://seeli.cam` (giữ đường dẫn và query).
- File không được đăng lên web nằm trong `.assetsignore`.

## Deploy
```bash
npx wrangler deploy
```

## Ảnh OG
`og.png` (1200×630) được render từ `og-src/og.html`:
```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 --virtual-time-budget=8000 --screenshot="$PWD/og.png" "file://$PWD/og-src/og.html"
```
