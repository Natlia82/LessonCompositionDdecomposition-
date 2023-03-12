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

  export default List;