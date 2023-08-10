# Welcome to Duawieh Space

---

## About the Site

Building with Github Pages, the site is built and deployed from this repository.

As a static site, every refresh will happen after a latest push.

**The theme is original developed by Duawieh.** You should title this when fork the repository to biuld your site.

**Attention!** You should keep your browser developed after IE8, if you want to have a common visit experience. And also, you should keep your internet connection unblocked, and use VPN if it's necessary.

本站使用Github Pages构建，从当前 repo 构建和部署站点。

作为一个静态站点，每次刷新都会在最新推送之后发生。

**网站主题由 Duawieh 原创。** 您应该在 fork 这个 repo 来建立您的网站时注明这一点。

**注意！** 如果您想获得正常的访问体验，您应该保持您的浏览器版本在 IE8 之后。此外，您应该保持您的互联网连接畅通，并在必要时使用 VPN。

---



# Deploy your site with DuaCatPalette theme



## Do something for preparations

First of all, fork my repository and pull it to your local computer storage. This is a basic step which makes you're able to edit the source code and cofig files.

首先，fork 我的 repo 并将其拉取到您的本地计算机存储。这是一个基本步骤，它使您能够编辑源代码和配置文件。

Another basic step is, to create a new repository titled with `username.github.io`, by the way, the `username` is the ID of your GitHub account. **Attention, your repository must have the form of this, which means you are applying for a GitHub Pages service.**

另一个基本步骤是创建一个名为 `username.github.io` 的新的 repo。顺便说一下，`username` 是您的 GitHub 账户的 ID。**注意，您的这个 repo 必须具有此形式的名称，这意味着您正在申请 GitHub Pages 服务。**

And the last basic step is to push all the files to your new repository. Every time you push it, GitHub Pages will recompile and redeploy them with Jekyll. The result will be performed at `https://username.github.io`, or the error information will be sent to your e-mail.

最后一个基本步骤是将所有文件 push 到新的 repo。每次 push 后，GitHub Pages 都会通过 Jekyll 重新编译并重新部署它们。结果将在 `https://username.github.io` 呈现，否则错误信息将发送到您的电子邮箱。



## Configure your site information

**All the config files you need to edit are in folder config and contents.**

**所有需要编辑的配置文件都在 config 和 contents 文件夹中。**



### Configure Icons

Icons are under the folder `config/Global_Icon/`. There are three icons respectively stand for your avatar, the background image of homepage, and the icon at the left side of top bar. You can replace them with your own icons. **Make sure that your images have been renamed to the same name as them.**

图标位于 `config/Global_Icon/` 文件夹下。有三个图标分别代表您的头像，主页的背景图像和顶部栏左侧的图标。您可以用自己的图标替换它们。**请确保您的图像已被重命名为与它们相同的名称。**



### Configure Profiles

Your profile information is written in `config/aboutME.json`, edit it at the same form below:

您的个人资料信息被编写在 `config/aboutME.json` 中，请按下面的格式重新编辑它:

```json
{
    "Author": "NAME",	// your name
    "E-mail": [			// your e-mail address
    	"emailaddress1@email.com",
        "emailaddress2@email.com"
        // ...
    ],
    "link": [
        {
            "icon": "images url",	// the url of icon
            "url": "link href",		// the url you want to link to
            "alt": "link name"		// the alternate name you want to show
        },
        {
            "icon": "images url",
            "url": "link href",
            "alt": "link name"
        }
        // ...
    ],
    "Profile": "your profile content."	// your profile
    "AboutTheSite": "The profile content of your site."	// About the site
}
```

If the json file you edited has worked, it will be performed below the homepage:

如果您编辑的 json 文件生效了，它将在主页下方呈现：

![Aboutpage](https://pic.imgdb.cn/item/64d47cab1ddac507cc3b7409.png)

I have prepared eight common icons for you in `config/Link_Icon`，you can also make more images if necessary.

我在 `config/Link_Icon/` 中为您准备了八个常用的图标，如果需要，您也可以制作更多这样的图像。



### Post new contents

Contents are contained in the folder `contents/`, you can post two type of content, blogs and projects. There are two steps to post a new blog(The same as to post a new project):

- prepare a new **markdown file** and an image as cover, make sure that the url of the two are accessible.
- edit `contents/blogs/config.json` at the same form as this:

content 包含在 Contents 文件夹中，您可以发布两种类型的内容，blogs 和 projects。发布一个新的 blog 有两个步骤（发布 project 时与之相同）:

- 准备一个新的 **markdown文件** 和一张图片作为封面，确保两者的 url 是可访问的。
- 编辑 `contents/blogs/config.json`，格式如下:

```json
[
    {
        "index": "blg0000000001",				// the unique indentifier begin with "blg" or "prj" 
        "title": "the Title of the Content",	// The title
        "subtitle": "Give a brief introduction",// The subtitle
        "cover": "url of the cover",			// the link to the cover, or NULL is okay
        "date": "YYYY.MM.DD | HH:MM",			// Upload date
        "tags": ["tag1", "tag2", "tag3"],		// tags
        "url": "contents/blogs/0000000001.md"	// the link to the markdown file
    },
    {
        "index": "blg0000000000",
        "title": "the Title of the Content",
        "subtitle": "Give a brief introduction",
        "cover": "url of the cover",
        "date": "YYYY.MM.DD | HH:MM",
        "tags": ["tag1", "tag2", "tag3"],
        "url": "contents/blogs/0000000000.md"
    }
    // ...
]
```



### Replace the homepage showcase

There a three showcase in homepage. Edit `contents/homepageShowcase/config.json` to replace the contents on the showcases.Please edit as follows:

主页上有三个展示窗。编辑 `contents/homepageShowcase/config.json` 来替换展示窗中的 content。请按如下格式编辑：

```json
[
    {
        "title": "Center showcase title", 
        "subtitle": "Center showcase subtitle", 
        "url": "the url of the content",
        "cover": "link to the cover of center showcase"	// and NULL is also okay
    },
    {
        "title": "Left showcase title", 
        "subtitle": "Left showcase subtitle", 
        "url": "the url of the content",
        "cover": "link to the cover of left showcase"	// and NULL is also okay
    },
    {
        "title": "Right showcase title", 
        "subtitle": "Right showcase subtitle", 
        "url": "the url of the content",
        "cover": "link to the cover of right showcase"	// and NULL is also okay
    }
]
```



---

Now you have complete all the configuration! You can start running your website now! If you like my theme, give me a star please.

现在您已经完成了所有的配置工作！您现在可以开始经营您的网站了！如果您喜欢我的主题，请为我点亮星标。
