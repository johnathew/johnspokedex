import { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { AiOutlineVerticalAlignMiddle } from "react-icons/ai";


const ScrollMidButton = () => {

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

    const scrollToMiddle = () => {
        const middle = document.documentElement.scrollHeight / 2;

        window.scroll({
            top: middle,
            left: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <button type='button' className=' hover:bg-slate-900 hover:underline text-yellow-400 flex flex-col items-center  fixed focus:outline-none  font-medium rounded-lg text-xl p-2 text-center dark:bg-slate-900 dark:hover:bg-blue-700  md:left-[10%] md:top-[17.5%] top-[14%] left-2 '>
            <AiOutlineVerticalAlignMiddle onClick={scrollToMiddle}
                style={{ display: visible ? 'inline' : 'none' }} />
        </button>
    );
}

export default ScrollMidButton; 