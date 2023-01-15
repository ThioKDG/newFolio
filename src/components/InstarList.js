import React from 'react';

const data = [
   {id:1, url:'https://source.unsplash.com/random', title:'img'},
   {id:2, url:'https://source.unsplash.com/random', title:'img'},
   {id:3, url:'https://source.unsplash.com/random', title:'img'},
   {id:4, url:'https://source.unsplash.com/random', title:'img'},
   {id:5, url:'https://source.unsplash.com/random', title:'img'},
   {id:6, url:'https://source.unsplash.com/random', title:'img'},
]

function InstarList(props) {
   return (
      <>
        <section id="instar_area">
            <div className="inner_box">
                <div className="id_line">
                    <h3 className="id_tit">@dyami</h3>
                </div>
                <div className="board_list">
                    <ul className="board_inner">
                        {data.map(item => (
                           <li key={item.id}>
                              <a href="#!">
                                 <img src={item.url} alt={item.title} />
                              </a>  
                           </li>
                        ))}
                        {/* <li>
                            <a href="#">
                                <img src="https://source.unsplash.com/random" alt="instar board" />
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </section> 
      </>
   );
}

export default InstarList;