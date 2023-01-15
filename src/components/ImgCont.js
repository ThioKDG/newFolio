function ImgCont() {
   const path = process.env.PUBLIC_URL;
   return (
      <>
         <section id="imgcont_warpper">
            <div className="cont_container">
                <div className="left_area">
                    <img src={path + "/img/area_img.png"} alt="img1" />
                </div>
                <div className="right_area">
                    <h3 className="cont_txt">all over the world</h3>
                    <h3 className="cont_txt_stroke">digital marketing</h3>
                </div>
            </div>
            <div className="cont_container p_t98">
                <div className="intro_area">
                    <h2 className="left_tit">완벽하고 깔끔한 <span>반응형 디자인</span></h2>
                    <ul className="intro_list">
                        <li>우리는 사람, 팀 및 비즈니스와 협력하여 매일 더 나은 창의적인 작업을 수행하기위해 디자인 시스템, 전략 및 프로세스를 개발합니다.</li>
                        <li>이 테마는 원하는 모든 작업을 수행하며 아름답게 디자인 되었습니다.</li>
                        <li>아름답고 사용하기 쉬운 디지털 디자인 및 웹 개발 서비스를 전문으로 하는 열정적인 디지털 디자인 에이전시입니다.</li>
                    </ul>
                </div>
                <div className="gall_area">
                    <ul className="gall_list">
                        <li>
                            <a href="#!">
                                <p className="in_shadowbox">cont</p>
                                <img src="https://source.unsplash.com/random" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <p className="in_shadowbox">cont</p>
                                <img src="https://source.unsplash.com/random" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <p className="in_shadowbox">
                                    <span>open</span>
                                </p>
                                <img src="https://source.unsplash.com/random" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <p className="in_shadowbox">cont</p>
                                <img src="https://source.unsplash.com/random" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <p className="in_shadowbox">cont</p>
                                <img src="https://source.unsplash.com/random" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <p className="in_shadowbox">cont</p>
                                <img src="https://source.unsplash.com/random" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <p className="in_shadowbox">cont</p>
                                <img src="https://source.unsplash.com/random" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <p className="in_shadowbox">cont</p>
                                <img src="https://source.unsplash.com/random" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <p className="in_shadowbox">cont</p>
                                <img src="https://source.unsplash.com/random" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="cont_container p_t98">
                <div className="img_area">
                    <img src={path + "/img/area_img2.png"} alt="area_img" />
                </div>
                <div className="grid_area">
                    <div className="grid_item">
                        <h2>10개월</h2>
                        <p className="sub_txt">투자금 회수기간</p>
                        <p>
                           <span className="green_box">development</span>
                        </p>
                    </div>
                    <div className="grid_item">
                        <h2>40%</h2>
                        <p className="sub_txt">수익률</p>
                        <p>
                            <span className="gray_box">Branding</span>
                        </p>
                    </div>
                    <div className="grid_item">
                        <h2>300만원</h2>
                        <p className="sub_txt">평균임대료</p>
                        <span></span>
                    </div>
                    <div className="grid_item">
                        <h2>20평</h2>
                        <p className="sub_txt">평균 운영평수</p>
                        <p>
                            <span className="green_box">marketing</span>
                        </p>
                    </div>
                </div>

            </div>
        </section>
      </>
   );
}

export default ImgCont;