
import { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';


const ScrollTopButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <>
            <button type='button' className='hover:bg-slate-900 hover:underline text-yellow-400 flex flex-col items-center  fixed focus:outline-none font-medium rounded-lg text-xl p-2 text-center  dark:hover:bg-blue-700 md:left-[10%] md:top-[12%] top-[9%] left-2'>
                <FaArrowCircleUp onClick={scrollToTop}
                    style={{ display: visible ? 'inline' : 'none' }} />
            </button>
        </>

    );
}

export default ScrollTopButton;


