"use strict";

const root=document.querySelector('.card-list');

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

const deletePosts =  async (data,id)=>{
  const response = await fetch("https://ajax.test-danit.com/api/json/posts/"+id, {
    method: 'DELETE',
  }).then(response=>{
    console.log(response);
    if (response.status !== 200) {
      throw new Error("Erorr del");
    }else{
      data.remove();
    } 
  });
  
}

const data=[];

Promise.allSettled([ getUsers(), getPosts()]).then(([usersList,postsList]) => {
  const {value:users}=usersList;
  const {value:posts}=postsList;
  const postsArr = [];
  users.forEach((user) => {
    posts.forEach((post) => {
      if (user.id === post.userId) {
        const card=document.createElement('div');
        card.className='card';
        card.id = post.id;
        card.innerHTML=`<div class="card-header">
  
        <div class="card-header-info">
          <h3 class="card-header-name">${user.name}</h3>
          <p class="card-header-email">${user.email}</p>
        </div>
      </div>
      <div class="card-body">
        <h2 class="card-title">${post.title}</h2>
        <p class="card-text">${post.body}</p>
      </div>`
      const cardFooter=document.createElement('div');
      cardFooter.className="card-footer";
      const deleteBtn=document.createElement('button');
      deleteBtn.className='delete-button';
      deleteBtn.innerHTML='DELETE';
      deleteBtn.dataset.delete=`${post.id}`;
      cardFooter.append(deleteBtn);
      card.append(cardFooter);
        postsArr.push(card);
      }
    });
  });
  root.append(...postsArr);
}).catch(err=>console.warn(err));

window.addEventListener('click', ({target})=>{
  if(target.textContent==="DELETE"){
    console.log('delete');

    const id=target.dataset.delete;
    console.log(id);

    const cardDelete=document.getElementById(id);
    console.log(cardDelete);
    deletePosts(cardDelete,id);
  }
})