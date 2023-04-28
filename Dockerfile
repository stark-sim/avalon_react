# 使用官方 Node.js 镜像作为基础镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 将 package.json 和 package-lock.json（如果存在）复制到工作目录
COPY package.json ./
COPY yarn.lock ./

# 安装依赖
RUN yarn install --production

# 将所有文件复制到工作目录
COPY . .

# 编译应用程序
RUN yarn build

# 设置环境变量
ENV NODE_ENV production

# 暴露应用程序的端口
EXPOSE 3000

# 启动应用程序
CMD ["yarn", "start"]