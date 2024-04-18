// content.js
console.log("Content script loading...");

// 使用MutationObserver来监听DOM变化
const observer = new MutationObserver(mutations => {
    console.log("DOM mutation observed.");

    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
                console.log("Element node added:", node);

                // 你提供的截图显示，“显示”是一个<span>，位于一个具有特定类的<div>内
                const displaySpans = node.querySelectorAll('span.css-1qaijid.r-bcqeeo.r-qvutc0.r-poiln3');
                console.log(`Found ${displaySpans.length} display spans inside added node.`);

                displaySpans.forEach(span => {
                    console.log("Checking span:", span.innerText);
                    if (span.innerText === '显示') {
                        console.log("Display span found, clicking...");
                        span.click(); // 执行点击操作
                        console.log("Clicked the display span.");
                    }
                });
            }
        });
    });
});

// 配置MutationObserver以监听子节点的添加
observer.observe(document.body, {
    childList: true,
    subtree: true
});

console.log("MutationObserver configured and observing the body.");
