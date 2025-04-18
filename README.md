# AI 助手静态网站

这是一个使用纯HTML、CSS和JavaScript构建的AI助手静态网站，完全不依赖任何框架。

## 项目结构

```
.
├── css/
│   └── styles.css         # 全部样式文件
├── js/
│   └── main.js            # JavaScript交互逻辑
├── images/                # 图片文件夹
├── favicon.ico            # 网站图标
├── index.html             # 主页面
├── .gitignore
└── README.md
```

## 特点

- 响应式设计，适配移动设备和桌面端
- 现代化UI界面，黑色主题设计
- 简洁的代码结构，不依赖任何框架
- 包含轮播图、数据图表、定价卡片等组件

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

## 部署

由于是纯静态网站，可以部署到任何静态网站托管服务，如GitHub Pages、Netlify、Vercel等。

## 技术栈

- HTML5
- CSS3 (自定义变量、Flexbox、Grid布局)
- JavaScript (原生，无框架依赖)

## 许可

MIT License 