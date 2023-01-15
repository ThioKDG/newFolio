const tabBtn = document.querySelectorAll('.tab_btn_list');
const tapMove = (e) => {
   e.preventDefault();
}

function Tapbox() {
   const path = process.env.PUBLIC_URL;

   return (
      <>
         <section id="item_wrapper">
            <div className="tap_btn">
                <ul className="tab_btn_list">
                    <li><a href="#!" className="focus" onClick={tapMove}>best</a></li>
                    <li><a href="#!" onClick={tapMove}>new</a></li>
                </ul>
            </div>
            <div className="item_box active">
                <div className="item_wrapper item1">
                    <a href="#!">
                        <div className="fade_incont">
                            <p>클릭시 팝업</p>
                        </div>
                        <img src={path + "/img/item1.png"} alt="item1" />
                    </a>
                </div>
                <div className="item_wrapper item2">
                    <a href="#!">
                        <div className="fade_incont">
                            <p>클릭시 팝업</p>
                        </div>
                        <img src={path + "/img/item2.png"} alt="item2" />
                    </a>
                </div>
                <div className="item_wrapper item3">
                    <a href="#!">
                        <div className="fade_incont">
                            <p>클릭시 팝업</p>
                        </div>
                        <img src={path + "/img/item3.png"} alt="item3" />
                    </a>
                </div>
            </div>
            <div className="item_box">

            </div>
        </section>
      </>
   );
}

export default Tapbox;