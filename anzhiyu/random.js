var posts=["2025/09/26/first-blog/","2025/09/25/hello-world/","2025/09/27/review/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };