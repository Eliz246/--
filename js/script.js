function initmarquee(container){
const track = container.querySelector('.condition__marquee-track');
const inner = track.querySelector('.condition__marquee-inner');
const speed = parseInt(container.getAttribute('data-speed')) || 30;
const direction = container.getAttribute('data-direction') || 'left';

    if (!inner.dataset.cloned){
        const originalBtn = Array.from(inner.children);
        let totalWidth = inner.scrollWidth;
        const containerWidth = container.offsetWidth;
        while (totalWidth < containerWidth*2){
            originalBtn.forEach((btn) => {
                inner.appendChild(btn.cloneNode(true));
            });
            totalWidth = inner.scrollWidth;
        }

        inner.dataset.cloned = 'true';
    }

const updateAnimation = () =>{
    const totalWidth = inner.scrollWidth/2;
    const duration = totalWidth/speed;
    inner.style.animationName = direction === 'right' ? 'scroll-right':
    'scroll-left';
    inner.style.animationDuration = `${duration}s`;
};

updateAnimation();
    window.addEventListener('resize', updateAnimation);
}

window.onload = ()=>{
    document.querySelectorAll('.condition__marquee-container').forEach(initmarquee);
};