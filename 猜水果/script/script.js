let timerStarted = false;
let timer = null;
let startTime;

function toggleBackground(element) {
    // 检查当前元素的透明度
    if (element.style.opacity === "100%") {
        // 如果透明度已经是50%，则将其设置回初始透明度10%
        element.style.opacity = "0%";
    } else {
        // 否则，将透明度设置为50%
        element.style.opacity = "100%";
    }
    if (!timerStarted) {
        startTime = new Date();
        timer = setInterval(function () {
            const elapsedTime = Math.floor((new Date() - startTime) / 1000);
            const minutes = Math.floor(elapsedTime / 60).toString().padStart(2, '0');
            // 计算秒数并确保是两位数
            const seconds = (elapsedTime % 60).toString().padStart(2, '0');
            document.getElementById(
                "timerDisplay"
            ).innerText = `${minutes}: ${seconds}`;
        }, 1000); // Update every second
        timerStarted = true;
    }
}
document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
        document.title = "你找不到我😋";
    } else {
        document.title = "啊哈被你找到了😒";
        setTimeout(function () {
            document.title = "猜东西";
        }, 2000); // 两秒后恢复原始标题
    }
});

document.getElementById('change').addEventListener('click', function () {
    // 假定你有一个函数来获取随机文件夹名称和图片路径
    updateImagesWithRandomFolder();
});

function updateImagesWithRandomFolder() {
    const folders = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5', 'pic6', 'pic7'];
    const selectedFolder = folders[Math.floor(Math.random() * folders.length)];
    for (let i = 1; i <= 9; i++) {
        const imgPath = `./img/${selectedFolder}/${i}.png`;
        const square = document.getElementById(`square${i}`);
        square.style.backgroundImage = `url('${imgPath}')`;
    }
}
document.addEventListener('DOMContentLoaded', function () {
    // 假设你有一个从服务器获取图片信息的函数，这里我们模拟图片路径
    // 实际情况中，你可能需要通过AJAX或Fetch API从服务器获取这些信息
    const folders = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5', 'pic6', 'pic7'];
    const answers = { // 假设答案和文件夹直接有映射关系
        'pic1': '鸟',
        'pic2': '蛋糕',
        'pic3': '彩虹',
        'pic4': '熊猫',
        'pic5': '猫',
        'pic6': '青蛙',
        'pic7': '苹果',
    };

    // 随机选择一个文件夹
    const selectedFolder = folders[Math.floor(Math.random() * folders.length)];
    currentAnswer = answers[selectedFolder];
    // 构建图片路径并更新HTML元素
    updateImages(selectedFolder);
});

function updateImages(folderName) {
    for (let i = 1; i <= 9; i++) {
        // 构建图片的路径
        // 注意根据实际情况调整路径格式
        const imgPath = `./img/pic/${folderName}/${i}.png`;

        // 找到对应的HTML元素并更新其背景图像
        const square = document.getElementById(`square${i}`);
        square.style.backgroundImage = `url('${imgPath}')`;
    }
}

// 绑定“换一个”按钮的点击事件以更换图片集
document.getElementById('change').addEventListener('click', function () {
    // 重新执行图片更新的逻辑
    const folders = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5', 'pic6', 'pic7'];
    const answers = { // 假设答案和文件夹直接有映射关系
        'pic1': '鸟',
        'pic2': '蛋糕',
        'pic3': '彩虹',
        'pic4': '熊猫',
        'pic5': '猫',
        'pic6': '青蛙',
        'pic7': '苹果',
    };

    const selectedFolder = folders[Math.floor(Math.random() * folders.length)];
    currentAnswer = answers[selectedFolder];
    updateImages(selectedFolder);
    // 直接刷新页面
    location.reload();


});

document.addEventListener('DOMContentLoaded', function () {
    // 获取表单和输入框元素
    var form = document.getElementById('answerForm');
    var input = document.getElementById('answerInput');

    // 监听表单的提交事件
    form.addEventListener('submit', function (event) {
        // 阻止表单的默认提交行为
        event.preventDefault();

        // 获取输入框的值
        var inputValue = input.value.trim();

        // 检查输入值是否符合某个条件
        if (inputValue === currentAnswer) { // 替换为你的条件
            // 如果输入内容符合条件
            alert("恭喜你，答案正确！");
        } else {
            // 如果输入内容不符合条件
            alert("很遗憾，答案错误。");
        }

        // 可选：清除输入框的内容
        input.value = "";
        const folders = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5', 'pic6', 'pic7'];
        const answers = { // 假设答案和文件夹直接有映射关系
            'pic1': '鸟',
            'pic2': '蛋糕',
            'pic3': '彩虹',
            'pic4': '熊猫',
            'pic5': '猫',
            'pic6': '青蛙',
            'pic7': '苹果',
        };

        const selectedFolder = folders[Math.floor(Math.random() * folders.length)];
        currentAnswer = answers[selectedFolder];
        updateImages(selectedFolder);
        // 直接刷新页面
        location.reload();

    });
});



