var posts=["posts/0.html","posts/18180af4.html","posts/16d34fdb.html","posts/f1601c3e.html","posts/b12a1160.html","posts/b9cfe67b.html","posts/d1cf35.html","posts/9520.html","posts/12dbdeec.html","posts/b1dedc50.html","posts/ac89d550.html","posts/cf1ce85f.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};