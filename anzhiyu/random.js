var posts=["2024/05/13/css/","2024/05/13/CSS-1/","2024/05/09/hello-world/","2024/05/10/new-world/","2024/05/11/text/","2024/05/12/关于未来/","2024/05/23/日记/","2024/05/10/使用hexo创建个人博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };