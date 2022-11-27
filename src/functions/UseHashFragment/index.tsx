import { useEffect } from "react";

const UseHashFragment = (offset = 0, trigger = true) => {
    useEffect(() => {
        const scrollToHashElement = () => {
            if(!window.location.href.includes('#')) {
                return;
            };
            const { hash } = window.location;
            const elementToScroll = document.getElementById(hash?.replace("#", ""));
            if (!elementToScroll) return;
        
            window.scrollTo({
                top: elementToScroll.offsetTop - offset,
                behavior: "smooth"
            });
        };
    
        if (!trigger) return;
    
        scrollToHashElement();
        window.addEventListener("hashchange", scrollToHashElement);
        return window.removeEventListener("hashchange", scrollToHashElement);
    }, [trigger]);
};

export default UseHashFragment;