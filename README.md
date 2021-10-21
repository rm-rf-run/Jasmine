# Jasmine：一个wordpress主题:smile:

![Jasmine](https://cdn.jsdelivr.net/gh/rm-rf-run/cdn/img/github-jasmine.png)

使用bootstrap制作的响应式模板，使用各种骚样式，上手简单，参数配置化，使用最少的代码做最多的事情。

# 还在持续优化，README.md后续在发布第一个包之后更新。:relaxed:

# 安装
Jasmine需要PHP7.0.1或更高版本，默认你已经搭建好了运行环境。
Windows本地搭建使用环境(https://www.bilibili.com/video/BV1wv411z7un)
```
git clone https://github.com/rm-rf-run/Jasmine.git
```

* assets文件夹主要放CSS、js、图片、图标等静态资源，inc文件夹放自己的PHP代码（供在function文件里调用，这样能减小function文件的大小）
- 主题特征：
	* 评论支持Markdown语法
	* 滚动数字(https://www.prettywordpress.com/share/course/scroll-numbers.html)
	* 滑动导航栏(https://www.prettywordpress.com/fore-end/bootstrap-auto-hide-navigation-bar.html)
	* 图标库采用fontawesome(http://www.fontawesome.com.cn/faicons/)
	* 字体过长都采用以下方式解决↓
	 ```css 
	 width: 定义长度;
	 white-space: nowrap;
	 text-overflow: ellipsis;
	 overflow: hidden;

**注意事项：**
1. 使用本主题请将主题名称改为Jasmine,zip下载的名称为Jasmine-master,需要更改为Jasmine
2. 使用file_get_contents需要在php.ini将extension=php_openssl.dll前面的;去掉
3. 如果使用的有古登堡编辑器，请将在inc/optimization-speed下的add_filter('use_block_editor_for_post_type', '___return_false', 10);方法注释
4. 开启Markdown语法需要在后台设置,讨论下勾选开启
5. 首页展示友链需要建立一个名为**首页友链**的链接分类，将需要展示的链接添加到该分类下即可在右边栏展示
6. 首页和归档的图片api不能保证都能一直使用的哟
