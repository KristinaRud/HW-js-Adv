"use strict";

const getUsers = async () => {
  const users = await fetch("https://ajax.test-danit.com/api/json/users").then(
    (res) => res.json()
  );
  return users;
};

const getPosts = async () => {
  const users = await fetch("https://ajax.test-danit.com/api/json/posts").then(
    (res) => res.json()
  );
  return users;
};

const data=[];

Promise.allSettled([ getUsers(), getPosts()]).then((list) => {
  list.forEach(e=>{
    data.push(e.value);
  }) 
  data.forEach(user=>{
    console.log(user);
    user.forEach(post=>{
      if(post.userId===user.id){
        console.log(post.userId);
      }
    })
  })
}).catch(err=>console.warn(err));
