const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}


function createPost() {
  setTimeout(() => {
    posts.push(post);
   
  }, 5000);
}



createPost({ title: 'Post Three', body: 'This is post three' });



getPosts();
//没有回调函数，新帖子不显示