document.addEventListener("DOMContentLoaded", function() {
    const crops = [
        {
            name: "방울토마토",
            img: "./images/cherrytomato.png",
            description: "방울토마토는 재배가 쉽고 작은 공간에서도 키울 수 있어 작은 텃밭에서도 재배가 가능합니다. 방울토마토는 항산화 효과가 뛰어나며, 비타민이 풍부하여 면역력 강화에 좋습니다. 재배한 방울토마토로 만들 수 있는 간단한 음식 추천으로는 방울토마토 샐러드, 방울토마토 카프레제 등이 있습니다. 이와 같이 직접 재배한 방울토마토를 활용하여 다양한 요리를 즐길 수 있습니다. "
        },
        {
            name: "상추",
            img: "./images/lettuce.png",
            description: "상추는 비교적 재배가 쉽고 빠르게 자라서 자주 수확할 수 있습니다. 상추는 비타민 A, 비타민 C, 칼륨, 철분 등이 풍부하여 면역력 강화에 도움을 주며 신경을 안정시켜 수면을 개선하는 데 도움을 줍니다 재배한 상추로 만들 수 있는 간단한 음식 추천으로는 상추 샐러드, 상추쌈 등이 있습니다. 이와 같이 직접 재배한 상추를 활용하여 다양한 요리를 즐길 수 있습니다."
        },
        {
            name: "고추",
            img: "./images/pepper.png",
            description: "고추는 비교적 재배가 쉬워 초보자도 쉽게 기를 수 있고 적절한 관리만 해주면 많은 수확량을 기대할 수 있습니다. 고추는 비타민 C를 다량 함유하고 있어 강력한 항산화 작용과 면역 체계를 강화하는 데 도움을 줍니다. 고추를 활용한 간단한 음식 추천으로는 고추장아찌, 고추튀김 등이 있습니다. 이와 같이 직접 재배한 고추를 활용하여 다양한 요리를 즐길 수 있습니다."
        },
        {
            name: "가지",
            img: "./images/eggplant.png",
            description: "가지는 햇빛과 물만 충분히 주면 잘 자랄 정도로 비교적 재배가 쉽고 많은 수확량을 기대할 수 있습니다. 가지는 식이섬유와 항산화 물질이 많이 포함되어 있어 콜레스테롤 수치를 낮춰주며 혈당 수치를 안정시키는 데 도움이 됩니다. 가지를 활용한 간단한 음식 추천으로는 가지볶음, 가지나물 등이 있습니다. 이와 같이 직접 재배한 가지를 활용하여 다양한 요리를 즐길 수 있습니다."
        },
        {
            name: "오이",
            img: "./images/cucumber.png",
            description: "오이는 비교적 재배가 쉽고 빠르게 자라서 자주 수확할 수 있습니다. 오이는 90% 이상이 수분으로 구성되어 있어 체내 수분 보충에 효과적이며 체내 독소를 제거하고 신장 기능을 돕는 해독 작용을 합니다. 오이를 활용한 간단한 음식 추천으로는 오이냉국, 오이 무침, 오이 샐러드 등이 있습니다. 이와 같이 직접 재배한 오이를 활용하여 다양한 요리를 즐길 수 있습니다. "
        },
        {
            name: "애호박",
            img: "./images/squash.png",
            description: "애호박은 재배가 비교적 쉬워 초보자도 쉽게 기를 수 있으며 작은 공간에서도 키울 수 있어 작은 텃밭에서도 재배가 가능합니다. 애호박은 비타민 A, 비타민 C, 칼륨, 철분 등이 풍부하여 영양 보충에 좋습니다. 애호박을 활용한 간단한 음식 추천으로는 애호박볶음, 애호박전, 애호박 된장찌개 등이 있습니다. 이와 같이 직접 재배한 애호박을 활용하여 다양한 요리를 즐길 수 있습니다."
        }
    ];


    function updateCrop() {
        const randomCrop = crops[Math.floor(Math.random() * crops.length)];
        const imageDiv = document.querySelector(".image");
        const descriptionDiv = document.querySelector(".description");
        imageDiv.innerHTML = `<img src="${randomCrop.img}" alt="${randomCrop.name}">`;
        descriptionDiv.innerHTML = `
            <h4>${randomCrop.name}</h4>
            <p>${randomCrop.description}</p>
        `;
    }

    const refreshButton = document.getElementById("refresh-crop");

    refreshButton.addEventListener("click", function() {
        updateCrop();
    });

    updateCrop();
});