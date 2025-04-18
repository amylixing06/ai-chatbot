# AI 助手静态网站

这是一个使用纯HTML、CSS和JavaScript构建的AI助手静态网站，完全不依赖任何框架。支持PWA功能，可以安装到桌面和移动设备。

## 项目结构

```
.
├── css/
│   └── styles.css         # 全部样式文件
├── js/
│   └── main.js            # JavaScript交互逻辑
├── images/                # 图片文件夹
├── public/                # 其他资源文件
│   └── offline.html       # 离线页面
├── favicon.ico            # 网站图标
├── favicon-16x16.png      # 16x16像素图标
├── favicon-32x32.png      # 32x32像素图标
├── apple-touch-icon.png   # 苹果设备图标
├── icon-192x192.png       # PWA 192像素图标 
├── icon-512x512.png       # PWA 512像素图标
├── site.webmanifest       # PWA配置文件
├── sw.js                  # Service Worker脚本
├── index.html             # 主页面
├── .gitignore
└── README.md
```

## 特点

- 响应式设计，适配移动设备和桌面端
- 现代化UI界面，黑色主题设计
- 简洁的代码结构，不依赖任何框架
- 包含轮播图、数据图表、定价卡片等组件
- **离线浏览功能** - 用户可以在离线状态下访问已浏览过的页面
- **可安装** - 可以作为本地应用安装到桌面或移动设备主屏幕
- **自动更新** - 当网站内容更新时，Service Worker会自动更新缓存

## 使用方法

### 直接打开

直接在浏览器中打开`index.html`文件即可查看网站。

### 使用本地服务器

由于是纯静态网站，您可以使用任何静态文件服务器来提供服务，例如：

```bash
# 使用Python启动简易服务器
python -m http.server 3000

# 或使用npm的serve包
npx serve
```

然后在浏览器访问 http://localhost:3000

## PWA功能

### 图标文件

PWA需要以下图标文件：

- favicon.ico - 网站图标
- favicon-16x16.png - 16x16像素图标
- favicon-32x32.png - 32x32像素图标
- apple-touch-icon.png - 180x180像素，用于苹果设备
- icon-192x192.png - 192x192像素，用于安装到主屏幕
- icon-512x512.png - 512x512像素，高分辨率设备使用

### 测试PWA功能

要测试PWA功能，需要通过HTTPS或localhost提供网站，才能注册Service Worker。使用以下方法测试：

1. 使用本地服务器启动网站
2. 在Chrome开发者工具中，转到"Application"标签页
3. 查看"Service Workers"和"Manifest"部分确认PWA配置正确
4. 在移动设备或桌面上，网站应该显示"添加到主屏幕"选项

## 部署

由于是纯静态网站，可以部署到任何静态网站托管服务，如GitHub Pages、Netlify、Vercel等。

**注意：** 为了确保PWA功能正常工作，建议通过HTTPS提供网站。

## 技术栈

- HTML5
- CSS3 (自定义变量、Flexbox、Grid布局)
- JavaScript (原生，无框架依赖)
- PWA (Service Worker, Web App Manifest)

## 许可

MIT License 