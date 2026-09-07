# 映界

一个简洁的动画与电影目录，帮助用户发现内容、查看来源清晰的详情，并进入合法的播放方式。

## 内容与爬虫边界

- 只展示可清楚说明来源、授权状态或公版状态的目录数据与播放入口。
- 不抓取、代理、下载或重新分发未经授权的视频和其他受版权保护的媒体文件。
- 元数据采集器只访问经过审批的公开来源，并遵守其 `robots.txt`、许可、访问频率限制和停止要求。
- 收藏与观看记录在第一版只保存在访问者当前浏览器中；站点不要求账户登录。

## 开发环境

需要 Node.js 24+ 与 pnpm。首次安装依赖：

```bash
corepack enable pnpm
pnpm install
```

复制环境变量示例：

```bash
cp .env.example .env.local
```

在 Windows PowerShell 中：

```powershell
Copy-Item .env.example .env.local
```

## 常用命令

```bash
pnpm dev
pnpm lint
pnpm format:check
pnpm typecheck
pnpm test
pnpm build
pnpm test:e2e
```

首次运行端到端测试前，需要下载 Playwright Chromium：

```bash
pnpm test:e2e:install
```

## Git 工作流

不要直接修改 `main`。每项功能从最新 `origin/main` 建立描述性分支，完成测试后推送分支并创建 Pull Request。合并前 rebase 到最新 `origin/main`；已推送分支只可用 `git push --force-with-lease` 更新，绝不使用 `--force`。
