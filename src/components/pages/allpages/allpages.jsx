import React from 'react';
import Kond from '../kond/kond';
import Kitob from '../kitob/kitob';
import Telefon from '../telefon/telefon';
import Televizor from '../televizor/televizor';
const Allpages = () => {
    return (<React.Fragment>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="kitob" element={<Kitob />}/>
            <Route path="telefon" element={<Telefon />}/>
            <Route path="kond" element={<Kond />}/>
            <Route path="televizor" element={<Televizor />}/>
        </Routes>
    </React.Fragment>);
}
 
export default Allpages;