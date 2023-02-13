'use strict';
const books = [
    { 
      author: "Люсі Фолі",
      name: "Список запрошених",
      price: 70 
    }, 
    {
     author: "Сюзанна Кларк",
     name: "Джонатан Стрейндж і м-р Норрелл",
    }, 
    { 
      name: "Дизайн. Книга для недизайнерів.",
      price: 70
    }, 
    { 
      author: "Алан Мур",
      name: "Неономікон",
      price: 70
    }, 
    {
     author: "Террі Пратчетт",
     name: "Рухомі картинки",
     price: 40
    },
    {
     author: "Анґус Гайленд",
     name: "Коти в мистецтві",
    }
  ];

  class UlList{
    constructor (id, array){
        this.ul=null;
        this.id=id;
        this.array=array;
    }
    
    createElement(){
        this.ul=document.createElement('ul');
        this.ul.id=this.id;
    }

    render(){
        this.createElement();
        this.array.forEach(el=>{
            try{
                if(new ListItem(el.author, el.name, el.price).render() === null){
                    throw new SyntaxError(`Дані неповні: немає list`);
                }this.ul.append(new ListItem(el.author, el.name, el.price).render());
            }catch(e){
                console.log("List: " + e.message);
            }
        })
        return this.ul;
    }
  }

  class ListItem{
    constructor(author, name, price){
        this.li=null;
        this.author=author;
        this.name=name;
        this.price=price;
    }

    createElement(){
        this.li = document.createElement('li');
        this.li.textContent = `author--${this.author}, name--${this.name}, price--${this.price}$`;
    }

    render(){
        try {
            if (!this.author) {
                throw new SyntaxError(`Дані неповні: немає author`);
            } else if (!this.name) {
                throw new SyntaxError(`Дані неповні: немає name`);
            } else if (!this.price) {
                throw new SyntaxError(`Дані неповні: немає price`);
            }else{
                this.createElement();
            }

        } catch (e) {
            console.log("Create list ERROR: " + e.message);
        }

        return this.li;
    }
  }

  const booksList = new UlList("ul-list", books);
  const root=document.getElementById('root');
  root.append(booksList.render());