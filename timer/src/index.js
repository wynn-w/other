import './style.css'

window.onload = () => {
    let totalTime = 0, stepTime = 10, maxTime = 362340000;
    let timer;
    let stop = document.getElementsByClassName('stop')[0]
    let start = document.getElementsByClassName('start')[0]
    let reset = document.getElementsByClassName('reset')[0]
    let content = document.getElementsByClassName('content')[0]

    const STARTMAP = new Map()
        .set(start, { display: 'none' })
        .set(stop, { display: 'flex' })
        .set(reset, { visibility: 'hidden' })
    const STOPMAP = new Map()
        .set(stop, { display: 'none' })
        .set(reset, { visibility: 'visible' })
        .set(start, { display: 'flex' })
    const RESETMAP = new Map()
        .set(start, { display: 'flex' })
        .set(reset, { visibility: 'hidden' })
        .set(stop, { display: 'none' })

    start.addEventListener('click', startHandle)
    stop.addEventListener('click', stopHandle)
    reset.addEventListener('click', resetHandle)

    /**
    * @description: 启动实现
    */
    function startHandle() {
        doChange(STARTMAP)
        runTimer(totalTime)
    }

    /**
     * @description: 暂停实现：清除定时器（阻止时间累加）
     */
    function stopHandle() {
        doChange(STOPMAP)
        clearTimeout(timer);
        timer = null;
        return
    }

    /**
     * @description: 重置实现：清除定时器，总时间置零
     */
    function resetHandle() {
        doChange(RESETMAP)
        clearTimeout(timer);
        timer = null;
        totalTime = 0;
        content.innerHTML = showTime(totalTime);
    }

    /**
    * @description: 定时器执行函数
    */
    function runTimer() {
        totalTime += stepTime;
        content.innerHTML = showTime(totalTime);
        if (totalTime < maxTime) {
            timer = setTimeout(runTimer, stepTime)
        }
    }
    /**
 * @description: 
 * @param {*} element
 * @param {*} target  target={ prop: propValue }
 * @return {*}
 */
    function changeStyle(element, target) {
        for (const key of Object.keys(target)) {
            element.style.setProperty(key, target[key])
        }
    }

    function doChange(map) {
        window.requestAnimationFrame(() => {
            for (let [key, value] of map.entries()) {
                changeStyle(key, value)
            }
        })
    }


    /**
     * @description: 返回 content 区域显示 
     */
    function showTime(totalTime) {
        let min = Math.floor(totalTime / 1000 / 60 % 60);
        let second = Math.floor((totalTime / 1000) % 60);
        let fsecond = (totalTime % 1000) / 10;

        // 值转化后为个位数时，前面补零
        if (min % 60 < 10) min = `0${min}`;
        if (second % 60 < 10) second = `0${second}`;
        if (fsecond < 10) fsecond = `0${fsecond}`;

        return `${min}:${second}.${fsecond}`;
    }
}

