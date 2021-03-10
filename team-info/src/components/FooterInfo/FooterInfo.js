import React from 'react';

const FooterInfo = () => {
    return (
        <div className="text-white">
            &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/salmanprottoy"> Salman Prottoy </a>
        </div>
    );
};

export default FooterInfo;