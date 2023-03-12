import React, {Fragment} from 'react';
/**
 * формирование списка с заголовком
 * @param {items}  - массив обьектов для заполнения списка 
 * @param {headline}  - заголовок 
 * @param {styling} param3 - название класса для стиля 
 * @returns разметка
 */
function List({ items, styling, headline,  children}) {
  return (  <div>
            { headline && <h3>{headline}</h3> }
            <ul className={styling}>
               {children(items)}
               
            </ul>
            </div>
  )
  
}
/**
 * построение списков
 * @param {*} param0 
 * @returns 
 */
function ListItem({children}) {
    return <li>
            {children}
           </li>
}
/**
 * блок поиска
 */
function Searh() {
  return <div className='exchangeRate'>
            <img src='#' />
            <input type='text'></input>
            <button>Найти</button>
         </div>
}


function Component() {
  //список новостей
  const news = [ {
    key: 1,
    img: "#",
    title: "Новесть 1",
    link: "#"
  },
  {
    key: 2,
    img: "#",
    title: "Новесть 2",
    link: "#"
  } ,
  {
    key: 3,
    img: "#",
    title: "Новесть 3",
    link: "#"
  } ]
  //виды поиска
  const typesOfSearch = [{
    key: 1,
    title: "Видео",
    link: "#",
  },
  {
    key: 2,
    title: "Картинки",
    link: "#",
  },
  {
    key: 3,
    title: "Новости",
    link: "#",
  }
  ];
  // курс валют
  const exchangeRate = [{
    key: 1,
    currency: "USD MOEX",
    price: 63.52,
    dynamics: "+0,09"
  },
  {
    key: 2,
    currency: "EUR MOEX",
    price: 70.86,
    dynamics: "+0,14"
  },
  {
    key: 3,
    currency: "НЕФТЬ",
    price: 64.90,
    dynamics: "+1,63"
  }
  ];
  //погода
  const weather = [{
   key: 1,
   img: "#",
   link: "#",
   text: "+17",
   textdop: "Утром +17"
  }
  ]
  //посещаемые
  const visitedSites = [{
    key: 1,
    title: "Недвижимость - о сталинках",
    link: "#"
  } , {
    key: 2,
    title: "Маркет - люстры и светильники",
    link: "#"
  }   , {
    key: 3,
    title: "Авто.ру - привод 4х4 до 500000",
    link: "#"
  }     
  ]
  //ката германии
  const mapOfGermany = [{
    key: 1,
    title: "Расписание",
    link: "#"
  }   ]
  //телепрограммы
  const TVprograms = [{
    key: 1,
    tim: "02:00",
    title: "THT. Best",
    link: "#"
  }  , {
    key: 2,
    tim: "02:15",
    title: "Джинглики",
    link: "#"
  }   , {
    key: 3,
    tim: "02:25",
    title: "Наедине со всеми",
    link: "#"
  }   ]
  //эфир
  const ether = []
  return (
    <div>
        <List items={news} styling="news" headline="Новости дня" >
            {(news) => news.map((item) => <ListItem key={item.key}>
                                        {item.img && <img src={item.img} />}
                                        <a href={item.link}>{item.title}</a>
                                        </ListItem>)}
        </List>
        <List items={exchangeRate} styling="exchangeRate" >
            {(exchangeRate) => exchangeRate.map((item) => <ListItem key={item.key}>
                                         <span>{item.currency}</span>
                                         <span>{item.price}</span>
                                         <span>{item.dynamics}</span>
                                        </ListItem>)}
        </List>
        <List items={typesOfSearch} styling="exchangeRate" >
            {(typesOfSearch) => typesOfSearch.map((item) => <ListItem key={item.key}>
                                         <a href={item.link}>{item.title}</a>
                                        
                                        </ListItem>)}
        </List>
        <Searh />
        <div className='additional' >
             <List items={weather} styling="news" headline="Погода" >
            {(weather) => weather.map((item) => <ListItem key={item.key}>
                                          <img src={item.img} />
                                          <a href={item.link}>{item.text}</a>
                                          <span>{item.textdop}</span>
                                        </ListItem>)}
            </List>
             <List items={visitedSites} styling="news" headline="Посещаемость" >
            {(visitedSites) => visitedSites.map((item) => <ListItem key={item.key}>
                                          <a href={item.link}>{item.title}</a>
                                        </ListItem>)}
            </List>
            <List items={mapOfGermany} styling="news" headline="Карта Германии" >
            {(mapOfGermany) => mapOfGermany.map((item) => <ListItem key={item.key}>
                                            <a href={item.link}>{item.title}</a>
                                        </ListItem>)}
            </List>
            <List items={TVprograms} styling="news" headline="Телепрограмма" >
            {(TVprograms) => TVprograms.map((item) => <ListItem key={item.key}>
                                        <span>{item.tim}</span>
                                        <a href={item.link}>{item.title}</a>
                                        </ListItem>)}
        </List>
         <List items={ether} styling="news" headline="Эфир" >
            {(ether) => ether.map((item) => <ListItem key={item.key}>
                                           <a href={item.link}>{item.title}</a>
                                        </ListItem>)}
        </List>
        </div>
    </div>

  )
}

export default Component;