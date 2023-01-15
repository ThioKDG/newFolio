// import KaKaoMap from "./KaKaoMap";
import { useEffect, useRef } from "react";

function MapKakao() {
    const { kakao } = window;
    const mapContainer = useRef(null);
    const mapOption = {
        center: new kakao.maps.LatLng(37.56682, 126.97865),
        level: 3,
    };

    useEffect(() => {
        const map = new kakao.maps.Map(mapContainer.current, mapOption);
        const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(37.56682, 126.97865),
        map: map,
        });
    }, []);
    
   return (
    
      <>
         <section id="map_section">
            <div className="map_wrapper">
                <h2 className="left_tit">stroe map</h2>
                <div className="tap_location">
                    <p className="tit on">서울</p>
                    <p className="tit">제주</p>
                </div>
                <div class="loc_info_warpper">
                    <div id="map_kakao" class="map_kakao">
                        <KaKaoMap />
                        <div id="map" style={{ width: 750, height: 350 }} ref={mapContainer}></div>
                    </div>
                    <div className="info_area">
                        <div className="left_box">
                            <h3 className="loc_h3">information</h3>
                            <p>795 flosom ave, suite 600 san francisco</p>
                            <p>TEL : 02-1234-5678</p>
                            <p>FAX : 02-1234-5678</p>
                        </div>
                        <div className="right_box">
                            <h3 className="loc_h3">transportation</h3>
                            <p>subway line 1, suwon station exit #13 10m</p>
                            <p>subway line 1, suwon station exit #13 10m</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
      </>
   );
}

export default MapKakao;